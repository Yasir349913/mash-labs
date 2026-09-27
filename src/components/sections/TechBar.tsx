import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

const techStack = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "PostgreSQL",
  "OpenAI / LLM APIs",
];

export function TechBar() {
  return (
    <section className="border-y border-line bg-white py-8">
      <Container>
        <FadeIn>
          <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
            <p className="whitespace-nowrap text-xs font-medium uppercase tracking-wide text-slate">
              Built with
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 md:justify-end">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-sm text-slate/70 transition-colors hover:text-ink"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}