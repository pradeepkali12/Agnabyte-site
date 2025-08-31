import { Rocket, ShieldCheck, TrendingUp, Wrench } from "lucide-react"

const values = [
  { title: "Affordable", description: "Clear pricing that respects your budget.", Icon: Wrench },
  { title: "Scalable", description: "Built to grow without rewrites.", Icon: TrendingUp },
  { title: "Reliable", description: "Modern stack and proven practices.", Icon: ShieldCheck },
  { title: "Growth-focused", description: "Outcomes over vanity metrics.", Icon: Rocket },
]

export function ValueProps() {
  return (
    <section className="bg-white px-6 py-12 md:py-16" aria-label="Why Choose Us">
      <div className="mx-auto max-w-xl">
        <h2 className="text-balance text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
          Why Choose Agnabyte?
        </h2>
        <ul className="mt-8 grid gap-6">
          {values.map(({ title, description, Icon }) => (
            <li key={title} className="rounded-lg border border-slate-200 p-5">
              <div className="flex items-start gap-4">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-amber-600/10 text-amber-600">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{description}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
