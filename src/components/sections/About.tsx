import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

export function About() {
  return (
    <section id="about" className="bg-white py-20 md:py-28">
      <Container>
        <div className="max-w-2xl">
          <FadeIn>
            <p className="text-sm font-medium text-amber">About Mash Labs</p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              A focused software and AI solutions business.
            </h2>
            <p className="mt-5 text-base text-slate">
              We're not a large agency, and we're not trying to be. We work
              directly with businesses to understand their problems and build
              practical solutions — whether that's a website, an AI feature,
              an automation, or a combination of all three.
            </p>
            <p className="mt-4 text-base text-slate">
              Every engagement starts with the same question: what does your
              business actually need? The technology comes after that answer,
              not before it.
            </p>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}