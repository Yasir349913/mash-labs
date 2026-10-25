import {
  Code2,
  Bot,
  FileSearch,
  Workflow,
  LayoutDashboard,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  icon: LucideIcon;
  title: string;
  problem: string;
  outcome: string;
  includes: string[];
  proof?: {
    label: string;
    href: string;
  };
};

export const services: Service[] = [
  {
    slug: "web-development",
    icon: Code2,
    title: "Website & web application development",
    problem:
      "Your website looks dated, loads slowly, or makes it hard for customers to contact or book with you.",
    outcome:
      "A fast, mobile-friendly site that explains what you do and makes enquiring or booking simple.",
    includes: [
      "Business and clinic websites",
      "Web applications and customer portals",
      "Online enquiry and booking-request flows",
      "Responsive, accessible front-end",
    ],
    proof: {
      label: "Brightwell Dental (demo project)",
      href: "https://brightwell-dental-peach.vercel.app/",
    },
  },
  {
    slug: "ai-chatbots",
    icon: Bot,
    title: "AI chatbots & integrations",
    problem:
      "Your team answers the same questions repeatedly, and enquiries that arrive outside office hours go unanswered.",
    outcome:
      "An assistant on your site that answers common questions and passes genuine enquiries to your team.",
    includes: [
      "Website chatbots and assistants",
      "Lead capture and enquiry handoff",
      "LLM API integrations into your existing tools",
    ],
  },
  {
    slug: "rag-knowledge-assistants",
    icon: FileSearch,
    title: "RAG & knowledge assistants",
    problem:
      "Important answers are buried in documents, handbooks and PDFs that nobody can search properly.",
    outcome:
      "An assistant that answers questions from your own documents, so people stop digging through files.",
    includes: [
      "Document-based question answering",
      "Summaries of long material",
      "Retrieval across uploaded documents",
    ],
    proof: {
      label: "StudyMate AI",
      href: "https://studymate-ai-v9zx.vercel.app/",
    },
  },
  {
    slug: "workflow-automation",
    icon: Workflow,
    title: "Workflow automation",
    problem:
      "Repetitive admin, such as copying data between tools, chasing follow-ups and sending reminders, takes time your team needs elsewhere.",
    outcome:
      "Connected tools and automated steps that handle routine work consistently.",
    includes: [
      "API and third-party integrations",
      "Automated notifications and follow-ups",
      "Document processing workflows",
    ],
  },
  {
    slug: "custom-business-software",
    icon: LayoutDashboard,
    title: "Custom business software",
    problem:
      "Off-the-shelf tools don't fit how you work, so information ends up in spreadsheets and disconnected systems.",
    outcome:
      "A tailored dashboard or portal that gives your team one place to manage the work.",
    includes: [
      "Dashboards and admin portals",
      "Role-based access and authentication",
      "Booking and operations management tools",
    ],
    proof: {
      label: "ZE(Z)T Restaurant Owner Portal (GitHub)",
      href: "https://github.com/Yasir349913/zezt-restaurant-portal",
    },
  },
];