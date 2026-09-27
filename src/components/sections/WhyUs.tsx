import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { whyUsPoints } from "@/data/whyUs";

export function WhyUs() {
  return (
    <section className="bg-white py-20 md:py-28">
      <Container>
        <FadeIn>
          <SectionHeading
            title="Why work with us"
            description="What you can expect when you work with Mash Labs."
          />
        </FadeIn>

        <div className="mt-14 grid gap-x-10 gap-y-8 md:grid-cols-2">
          {whyUsPoints.map((point, i) => (
            <FadeIn key={point.title} delay={i * 0.06} direction={i % 2 === 0 ? "left" : "right"}>
              <div className="flex gap-4">
                <Check className="mt-1 h-5 w-5 shrink-0 text-amber" strokeWidth={2} />
                <div>
                  <h3 className="font-display text-base font-semibold text-ink">
                    {point.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate">{point.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}