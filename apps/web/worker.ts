export interface Env {
  RESEND_API_KEY: string;
  CONTACT_EMAIL?: string;
  RESEND_FROM_EMAIL?: string;
  ASSETS: { fetch: typeof fetch };
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    // Handle contact form POST request
    if (url.pathname === "/api/contact" && request.method === "POST") {
      try {
        const body = (await request.json()) as {
          name?: string;
          email?: string;
          message?: string;
        };

        const { name, email, message } = body;

        if (!name?.trim() || !email?.trim() || !message?.trim()) {
          return new Response(
            JSON.stringify({ success: false, error: "Please fill in all fields." }),
            { status: 400, headers: { "Content-Type": "application/json" } }
          );
        }

        const apiKey = env.RESEND_API_KEY;
        const targetEmail = env.CONTACT_EMAIL || "monoko.brandworks@gmail.com";
        const fromEmail = env.RESEND_FROM_EMAIL || "Monoko Contact <onboarding@resend.dev>";

        if (!apiKey) {
          return new Response(
            JSON.stringify({ success: false, error: "RESEND_API_KEY is not configured in Cloudflare." }),
            { status: 500, headers: { "Content-Type": "application/json" } }
          );
        }

        // Send via Resend REST API
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
              <div style="font-family: sans-serif; max-width: 600px; padding: 20px;">
                <h2 style="color: #ea580c;">New Message from Monoko Website</h2>
                <p><strong>From:</strong> ${name.trim()}</p>
                <p><strong>Email:</strong> <a href="mailto:${email.trim()}">${email.trim()}</a></p>
                <p><strong>Message:</strong></p>
                <p style="white-space: pre-wrap; background-color: #f7f3ef; padding: 12px; border-radius: 8px;">${message.trim()}</p>
              </div>
            `,
            text: `New submission from ${name} (${email}):\n\n${message}`,
          }),
        });

        const data = (await resendResponse.json()) as any;

        if (!resendResponse.ok) {
          return new Response(
            JSON.stringify({ success: false, error: data.message || "Failed to send email." }),
            { status: resendResponse.status, headers: { "Content-Type": "application/json" } }
          );
        }

        return new Response(
          JSON.stringify({ success: true, messageId: data.id }),
          { status: 200, headers: { "Content-Type": "application/json" } }
        );
      } catch (err: any) {
        return new Response(
          JSON.stringify({ success: false, error: err.message || "Server error" }),
          { status: 500, headers: { "Content-Type": "application/json" } }
        );
      }
    }

    // Pass all other requests (pages, images, CSS, JS) to your static assets in ./out
    return env.ASSETS.fetch(request);
  },
};
