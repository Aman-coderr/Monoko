export interface Member {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  left: string;
  right: string;
  rightMore: string;
}

export const members: Member[] = [
  {
    id: 1,
    name: "Pratik Prasad",
    role: "Graphic Designer",
    company: "Monoko",
    image: "/Mask%20group-1.png",
    left:
      "I'm Pratik Prasad, a graphic designer and co-founder of Monoko, based in India, helping brands create impactful visual identities and modern digital experiences.",
    right:
      "I specialize in graphic design, branding, social media design and website UI design, creating clean, modern visuals.",
    rightMore:
      "I've worked with businesses across various industries, helping brands grow through thoughtful design and engaging digital experiences.",
  },

  {
    id: 2,
    name: "Ravi",
    role: "Creative Director",
    company: "Monoko",
    image: "/Mask%20group.png",
    left:
      "I’m Ravi, a brand strategist and co-founder of Monoko, based in India, helping businesses build strong brand identities, define clear positioning, and create meaningful connections with their audience.",
    right:
      "I specialize in brand strategy, brand positioning, marketing strategy, and business growth, helping brands communicate with clarity and stand out in competitive markets.",
    rightMore:
      "I've worked with businesses across various industries, helping brands grow through clear messaging and meaningful connections with their audience.",
  },
];
