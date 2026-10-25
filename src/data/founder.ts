import { Bot, Code2, Workflow, type LucideIcon } from "lucide-react";

export type Founder = {
  name: string;
  role: string;
  photo?: string;
  photoAlt: string;
  bio: string[];
  quote?: string;
  focus: { icon: LucideIcon; label: string; description: string }[];
  linkedinUrl: string;
  email: string;
};

export const founder: Founder = {
  name: "Yasir Maqsood",
  role: "Founder & Full-Stack AI Developer, Mash Labs",

  // Photo lagane ke liye: apni photo ko public/images/yasir-maqsood.jpg naam se rakh dein.
  // (Ya doosra naam/format ho to neeche path badal dein.) File na ho to initials dikhte hain.
  // Best size: portrait 4:5, kam az kam 800x1000 px.
  photo: "/images/yasir-maqsood.jpg",
  photoAlt: "Portrait of Yasir Maqsood, founder of Mash Labs",

  bio: [
    "I'm a full-stack developer who builds business websites, AI integrations and practical automation. I work hands-on with every project, so the person you speak to at the start is the person building the solution.",
    // TODO: yahan apni kahani ka paragraph add karein: aap ne Mash Labs kyun shuru kiya
    // (2-3 lines, aap ke apne alfaaz mein, sirf sachi baatein).
  ],

  quote:
    "Every engagement starts with the same question: what does your business actually need? The technology comes after that answer, not before it.",

  focus: [
    {
      icon: Code2,
      label: "Web development",
      description: "Fast business websites and web apps that make enquiring simple.",
    },
    {
      icon: Bot,
      label: "AI integrations",
      description: "Assistants and LLM integrations that handle common questions.",
    },
    {
      icon: Workflow,
      label: "Practical automation",
      description: "Workflows that take repetitive work off your team.",
    },
  ],

  linkedinUrl: "https://www.linkedin.com/in/yasir-maqsood/",
  email: "yasirmaqsood534@gmail.com",
};