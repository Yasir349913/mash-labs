export type Founder = {
  name: string;
  role: string;
  photo?: string;
  photoAlt: string;
  bio: string[];
  focus: string[];
  linkedinUrl: string;
  email: string;
  cta: {
    label: string;
    href: string;
  };
};

export const founder: Founder = {
  name: "Yasir Maqsood",
  role: "Founder & Full-Stack AI Developer, Mash Labs",

  // Photo lagane ke liye: file ko public/images/ mein rakhein aur path yahan likhein,
  // jaise "/images/yasir-maqsood.jpg". Khali rahe to monogram dikhega.
  photo: undefined,
  photoAlt: "Portrait of Yasir Maqsood, founder of Mash Labs",

  bio: [
    "I'm a full-stack developer who builds business websites, AI integrations and practical automation. I work hands-on with every project, so the person you speak to at the start is the person building the solution.",
    "Every engagement starts with the same question: what does your business actually need? The technology comes after that answer, not before it.",
    // TODO: yahan apni kahani ka paragraph add karein: aap ne Mash Labs kyun shuru kiya
    // (2-3 lines, aap ke apne alfaaz mein, sirf sachi baatein).
  ],

  focus: ["Web development", "AI integrations", "Practical automation"],

  linkedinUrl: "https://www.linkedin.com/in/yasir-maqsood/",
  email: "yasirmaqsood534@gmail.com",

  cta: {
    label: "Let's Discuss Your Project",
    href: "#contact",
  },
};