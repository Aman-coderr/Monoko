interface Env {
  RESEND_API_KEY: string;
  CONTACT_EMAIL?: string;
  RESEND_FROM_EMAIL?: string;
}

export async function onRequestPost(context: { request: Request; env: Env }) {
  const { request, env } = context;

  try {
    const body = await request.json() as {
      name?: string;
      email?: string;
      message?: string;
    };

    const { name, email, message } = body;

    // 1. Validation
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return new Response(
        JSON.stringify({ success: false, error: "Please fill in all required fields." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return new Response(
        JSON.stringify({ success: false, error: "Please provide a valid email address." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const apiKey = env.RESEND_API_KEY;
    const targetEmail = env.CONTACT_EMAIL || "monoko.brandworks@gmail.com";
    const fromEmail = env.RESEND_FROM_EMAIL || "Monoko Contact <onboarding@resend.dev>";

    if (!apiKey) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "RESEND_API_KEY environment variable is missing in Cloudflare.",
        }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    // 2. Dispatch via Resend REST API
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [targetEmail],
        reply_to: email.trim(),
        subject: `New Inquiry from ${name.trim()} - Monoko`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #eaeaea; border-radius: 12px;">
            <h2 style="color: #ea580c; margin-top: 0;">New Message from Monoko Website</h2>
            <p><strong>From:</strong> ${escapeHtml(name.trim())}</p>
            <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email.trim())}">${escapeHtml(email.trim())}</a></p>
            <div style="margin-top: 16px;">
              <strong>Message:</strong>
              <p style="white-space: pre-wrap; background-color: #f7f3ef; padding: 14px; border-radius: 8px;">${escapeHtml(message.trim())}</p>
            </div>
          </div>
        `,
        text: `New contact submission:\n\nName: ${name.trim()}\nEmail: ${email.trim()}\n\nMessage:\n${message.trim()}`,
      }),
    });

    const resendData = await resendResponse.json() as any;

    if (!resendResponse.ok) {
      return new Response(
        JSON.stringify({
          success: false,
          error: resendData.message || "Failed to send email via Resend.",
        }),
        { status: resendResponse.status, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        messageId: resendData.id,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err: any) {
    return new Response(
      JSON.stringify({ success: false, error: err.message || "Internal server error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

