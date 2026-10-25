export type Project = {
  slug: string;
  title: string;
  image: string;
  imageAlt?: string;
  liveUrl?: string;
  githubUrl?: string;
  label?: string;
  note?: string;
  problem: string;
  solution: string;
  features: string[];
  tech?: string[];
};

export const projects: Project[] = [
  {
    slug: "brightwell-dental",
    title: "Brightwell Dental",
    image: "/images/brightwell-work.png",
    imageAlt:
      "Brightwell Dental demo website homepage showing treatments and sample appointment times",
    liveUrl: "https://brightwell-dental-peach.vercel.app/",
    githubUrl: undefined,
    label: "Demo project",
    note: "A concept project built by Mash Labs. The clinic, dentists, reviews and patient data are fictional, and the sample appointment slots are not connected to a live diary.",
    problem:
      "Private dental practices often rely on dated websites and phone-only booking, which makes it hard for new patients to compare treatments and request a time.",
    solution:
      "A modern clinic website with clear treatment pricing and an online appointment-request flow, plus a prototype admin view for managing requests.",
    features: [
      "Treatment pages with clear starting prices",
      "Dentist profiles and a patient FAQ",
      "Online appointment-request page with a simple three-step flow",
      "Sample availability slots on the homepage (demo data)",
      "Admin prototype for reviewing requests (mock data)",
      "Phone and WhatsApp contact options",
    ],
    // tech: add after verifying the stack
  },
  {
    slug: "studymate-ai",
    title: "StudyMate AI",
    image: "/images/studymate-work.png",
    liveUrl: "https://studymate-ai-v9zx.vercel.app/",
    githubUrl: undefined,
    problem:
      "Students struggle to retain information from dense study material and spend hours manually creating notes and quizzes.",
    solution:
      "An AI-powered study platform that turns any document into structured, retrievable knowledge using RAG.",
    features: [
      "Document-based question answering",
      "Auto-generated quizzes",
      "Summarization of long material",
      "Knowledge retrieval across uploaded documents",
    ],
    tech: ["Next.js", "RAG", "Vector Search", "LLM API"],
  },
  {
    slug: "zezt-portal",
    title: "ZE(Z)T Restaurant Owner Portal",
    image: "/images/zezt-work.png",
    liveUrl: undefined,
    githubUrl: "https://github.com/Yasir349913/zezt-restaurant-portal",
    problem:
      "Restaurant owners manage bookings, deals, and performance across disconnected tools with no central view.",
    solution:
      "A single owner portal to manage bookings, promotions, and business performance from one dashboard.",
    features: [
      "Booking management",
      "Deals & promotions",
      "Authentication & role access",
      "Analytics dashboard",
    ],
    tech: ["Next.js", "Node.js", "PostgreSQL", "Auth"],
  },
  {
    slug: "landing-page-demo",
    title: "ICO/Crypto Landing Page",
    image: "/images/project-three-work.png",
    liveUrl: "https://ico-doc-g8g4.vercel.app/",
    githubUrl: undefined,
    problem:
      "Launching a new product or offering needs a landing page that builds trust and converts visitors fast — generic templates don't do that.",
    solution:
      "A fully custom, high-conversion landing page with polished visuals, clear structure, and fast performance.",
    features: [
      "Custom UI & animations",
      "Fully responsive layout",
      "Fast page load performance",
      "Conversion-focused structure",
    ],
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
  },
];