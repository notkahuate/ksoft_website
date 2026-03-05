"use client"

import { useIntersection } from "@/hooks/use-intersection"

const technologies = [
  "React",
  "Next.js",
  "Node.js",
  "TypeScript",
  "PostgreSQL",
  "MongoDB",
  "AWS",
  "Docker",
  "Flutter",
  "Python",
  "Tailwind CSS",
  "GraphQL",
]

export function Technologies() {
  const { ref, isVisible } = useIntersection()

  return (
    <section className="relative py-16 border-y border-border bg-secondary/20">
      <div className="mx-auto max-w-7xl px-6">
        <div ref={ref} className="text-center mb-10">
          <p
            className={`text-sm text-muted-foreground ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
          >
            Tecnologias con las que trabajamos
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex animate-scroll gap-8">
            {[...technologies, ...technologies].map((tech, i) => (
              <div
                key={`${tech}-${i}`}
                className="flex shrink-0 items-center justify-center rounded-lg border border-border bg-card px-6 py-3 text-sm text-muted-foreground font-mono transition-all hover:border-primary/30 hover:text-primary"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
