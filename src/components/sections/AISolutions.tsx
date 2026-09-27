import { Bot, FileSearch, FileText, Workflow, Plug } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

const capabilities = [
  {
    icon: Bot,
    title: "AI chatbots & assistants",
    description: "Answer questions, qualify leads, and support customers automatically.",
  },
  {
    icon: FileSearch,
    title: "RAG / knowledge-based AI",
    description: "Let your team or customers query your own documents and data directly.",
  },
  {
    icon: FileText,
    title: "AI document processing",
    description: "Extract, summarize, and structure information from documents at scale.",
  },
  {
    icon: Workflow,
    title: "AI agents & workflows",
    description: "Automate multi-step tasks that used to require manual handling.",
  },
  {
    icon: Plug,
    title: "LLM/API integrations",
    description: "Add AI capabilities directly into your existing tools and applications.",
  },
];

export function AISolutions() {
  return (
    <section className="bg-navy py-20 md:py-28">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <FadeIn direction="left">
            <p className="text-sm font-medium text-amber">AI, applied practically</p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-white md:text-4xl">
              We don't sell AI as a buzzword.
            </h2>
            <p className="mt-5 max-w-md text-base text-white/70">
              We start with the business problem, and use AI where it's genuinely
              the right tool — not because it's trending. Sometimes that means a
              chatbot. Sometimes it's automation. Sometimes it's neither.
            </p>
          </FadeIn>

          <div className="space-y-6">
            {capabilities.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <FadeIn key={cap.title} direction="right" delay={i * 0.08}>
                  <div className="flex gap-4 border-b border-white/10 pb-6 last:border-b-0">
                    <Icon className="mt-0.5 h-5 w-5 shrink-0 text-amber" strokeWidth={1.5} />
                    <div>
                      <h3 className="font-display text-base font-semibold text-white">
                        {cap.title}
                      </h3>
                      <p className="mt-1 text-sm text-white/60">{cap.description}</p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}