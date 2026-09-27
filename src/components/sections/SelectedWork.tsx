import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { projects } from "@/data/projects";

export function SelectedWork() {
  return (
    <section id="work" className="bg-white py-20 md:py-28">
      <Container>
        <FadeIn>
          <SectionHeading
            title="Selected work"
            description="A few projects that show how we approach real problems."
          />
        </FadeIn>

        <div className="mt-16 space-y-24 md:space-y-32">
          {projects.map((project, i) => {
            const imageFirst = i % 2 === 0;

            return (
              <div
                key={project.slug}
                className="grid items-center gap-10 md:grid-cols-2 md:gap-16"
              >
                <FadeIn
                  direction={imageFirst ? "left" : "right"}
                  className={imageFirst ? "md:order-1" : "md:order-2"}
                >
                  <div className="overflow-hidden rounded-sm border border-line">
                    <Image
                      src={project.image}
                      alt={`${project.title} interface`}
                      width={1000}
                      height={700}
                      className="w-full"
                    />
                  </div>
                </FadeIn>

                <FadeIn
                  direction={imageFirst ? "right" : "left"}
                  className={imageFirst ? "md:order-2" : "md:order-1"}
                >
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-ink md:text-3xl">
                      {project.title}
                    </h3>

                    <div className="mt-6 space-y-5">
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wide text-slate">
                          Problem
                        </p>
                        <p className="mt-1 text-sm text-ink">{project.problem}</p>
                      </div>
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wide text-slate">
                          Solution
                        </p>
                        <p className="mt-1 text-sm text-ink">{project.solution}</p>
                      </div>
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wide text-slate">
                          Key features
                        </p>
                        <ul className="mt-1 space-y-1">
                          {project.features.map((f) => (
                            <li key={f} className="text-sm text-ink">
                              — {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-sm border border-line px-2.5 py-1 font-mono text-xs text-slate"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-wrap gap-5">
                      {project.liveUrl && (
                        <Link
                          href={project.liveUrl}
                          target="_blank"
                          className="inline-flex items-center gap-1 text-sm font-medium text-ink hover:text-amber"
                        >
                          View live project
                          <ArrowUpRight className="h-4 w-4" />
                        </Link>
                      )}
                      {project.githubUrl && (
                        <Link
                          href={project.githubUrl}
                          target="_blank"
                          className="inline-flex items-center gap-1 text-sm font-medium text-slate hover:text-ink"
                        >
                          View on GitHub
                          <ArrowUpRight className="h-4 w-4" />
                        </Link>
                      )}
                    </div>
                  </div>
                </FadeIn>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}