import { BarChart3, Boxes, Globe } from "lucide-react"

const services = [
  {
    title: "Digital Transformation",
    description: "Launch online with clean, fast experiences that customers trust.",
    Icon: Globe,
  },
  {
    title: "Data Analytics",
    description: "Turn raw data into clear insights and confident decisions.",
    Icon: BarChart3,
  },
  {
    title: "SaaS Products",
    description: "Scalable tools that grow with your business—no bloat.",
    Icon: Boxes,
  },
]

export function Services() {
  return (
    <section id="services" className="px-6 py-12 md:py-16" aria-label="Services">
      <div className="mx-auto max-w-xl">
        <h2 className="text-balance text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">What We Do</h2>
        <ul className="mt-8 grid gap-6">
          {services.map(({ title, description, Icon }) => (
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
