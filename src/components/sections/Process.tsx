import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { processSteps } from "@/data/process";

export function Process() {
  return (
    <section id="process" className="bg-white py-20 md:py-28">
      <Container>
        <FadeIn>
          <SectionHeading
            title="How we work"
            description="A straightforward process from first conversation to launch."
          />
        </FadeIn>

        <div className="mt-14 grid gap-10 md:grid-cols-4 md:gap-6">
          {processSteps.map((step, i) => (
            <FadeIn key={step.number} delay={i * 0.1}>
              <div
                className={
                  i < processSteps.length - 1
                    ? "border-b border-line pb-8 md:border-b-0 md:border-r md:pb-0 md:pr-6"
                    : "pb-0"
                }
              >
                <span className="font-mono text-sm text-amber">{step.number}</span>
                <h3 className="mt-3 font-display text-lg font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-slate">{step.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}