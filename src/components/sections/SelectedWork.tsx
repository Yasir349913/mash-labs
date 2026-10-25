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
                  <div className="group overflow-hidden rounded-sm border border-line">
                    <Image
                      src={project.image}
                      alt={project.imageAlt ?? `${project.title} interface`}
                      width={1000}
                      height={700}
                      priority={i === 0}
                      className="w-full transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  </div>
                </FadeIn>

                <FadeIn
                  direction={imageFirst ? "right" : "left"}
                  className={imageFirst ? "md:order-2" : "md:order-1"}
                >
                  <div>
                    {project.label && (
                      <span className="inline-block rounded-sm border border-amber/40 px-2.5 py-1 font-mono text-xs uppercase tracking-wide text-amber">
                        {project.label}
                      </span>
                    )}

                    <h3
                      className={`font-display text-2xl font-semibold text-ink md:text-3xl ${
                        project.label ? "mt-4" : ""
                      }`}
                    >
                      {project.title}
                    </h3>

                    {project.note && (
                      <p className="mt-3 border-l-2 border-amber/60 pl-3 text-sm text-slate">
                        {project.note}
                      </p>
                    )}

                    <div className="mt-6 space-y-5">
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wide text-slate">
                          Problem
                        </p>
                        <p className="mt-1 text-sm text-ink">
                          {project.problem}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wide text-slate">
                          Solution
                        </p>
                        <p className="mt-1 text-sm text-ink">
                          {project.solution}
                        </p>
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

                    {project.tech && project.tech.length > 0 && (
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
                    )}

                    <div className="mt-6 flex flex-wrap gap-5">
                      {project.liveUrl && (
                        <Link
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm font-medium text-ink hover:text-amber"
                        >
                          {project.label
                            ? "View live demo"
                            : "View live project"}
                          <ArrowUpRight
                            className="h-4 w-4"
                            aria-hidden="true"
                          />
                        </Link>
                      )}
                      {project.githubUrl && (
                        <Link
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm font-medium text-slate hover:text-ink"
                        >
                          View on GitHub
                          <ArrowUpRight
                            className="h-4 w-4"
                            aria-hidden="true"
                          />
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