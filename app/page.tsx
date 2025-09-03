import Image from "next/image"
import Link from "next/link"
import { BarChart3, Boxes, Globe, Rocket, ShieldCheck, TrendingUp, Wrench } from "lucide-react"
import { NavigationHeader } from "@/components/navigation-header"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Navigation Header */}
      <NavigationHeader />

      {/* Hero */}
      <section className="relative" aria-label="Agnabyte hero">
        {/* Subtle brand-aligned gradient (allowed per brief) */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-amber-50 to-white" />
        <div className="mx-auto flex max-w-xl flex-col items-center gap-6 px-6 py-16 md:py-20 text-center">
          {/* Centered Logo */}
          <div className="flex items-center gap-6">
            <Image src="/images/agnabyte-logo.png" alt="Agnabyte logo" width={80} height={80} priority className="h-35 w-90" />
            
          </div>

          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            Transforming Local Businesses into Digital Success Stories
          </h1>

          <p className="max-w-prose text-pretty text-base leading-relaxed text-slate-600">
            Practical digital transformation, clear analytics, and scalable SaaS—built for real businesses and real
            results.
          </p>

          <div className="flex items-center gap-3">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-md bg-amber-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2"
            >
              Get in Touch
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center justify-center rounded-md border border-slate-200 px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="px-6 py-12 md:py-16" aria-label="About Agnabyte">
        <div className="mx-auto max-w-xl">
          <h2 className="text-balance text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">About Us</h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-slate-600">
            Agnabyte digitally empowers local businesses with practical tools and honest guidance. We keep things simple
            and reliable so you can focus on growth—whether that's launching online, understanding your data, or scaling
            with SaaS.
          </p>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-6 py-12 md:py-16" aria-label="About Agnabyte">
        <div className="mx-auto max-w-xl">
          <h2 className="text-balance text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">About Us</h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-slate-600">
            Agnabyte digitally empowers local businesses with practical tools and honest guidance. We keep things simple
            and reliable so you can focus on growth—whether that's launching online, understanding your data, or scaling
            with SaaS.
          </p>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="px-6 py-12 md:py-16" aria-label="Services">
        <div className="mx-auto max-w-xl">
          <h2 className="text-balance text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">What We Do</h2>
          <ul className="mt-8 grid gap-6">
            <li className="rounded-lg border border-slate-200 p-5">
              <div className="flex items-start gap-4">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-amber-600/10 text-amber-600">
                  <Globe size={20} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">Digital Transformation</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Helping local businesses go online with clean, fast, and trustworthy experiences.
                  </p>
                </div>
              </div>
            </li>
            <li className="rounded-lg border border-slate-200 p-5">
              <div className="flex items-start gap-4">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-amber-600/10 text-amber-600">
                  <BarChart3 size={20} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">Data Analytics</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Turning data into actionable insights for confident decisions.
                  </p>
                </div>
              </div>
            </li>
            <li className="rounded-lg border border-slate-200 p-5">
              <div className="flex items-start gap-4">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-amber-600/10 text-amber-600">
                  <Boxes size={20} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">SaaS Products</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Scalable, no-bloat tools that grow with your business.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Value Props */}
      <section id="why-choose-us" className="px-6 py-12 md:py-16" aria-label="Why Choose Us">
        <div className="mx-auto max-w-xl">
          <h2 className="text-balance text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
            Why Choose Agnabyte?
          </h2>
          <ul className="mt-8 grid gap-6">
            <li className="rounded-lg border border-slate-200 p-5">
              <div className="flex items-start gap-4">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-amber-600/10 text-amber-600">
                  <Wrench size={20} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">Affordable</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">Clear pricing that respects your budget.</p>
                </div>
              </div>
            </li>
            <li className="rounded-lg border border-slate-200 p-5">
              <div className="flex items-start gap-4">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-amber-600/10 text-amber-600">
                  <TrendingUp size={20} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">Scalable</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">Built to grow without rewrites.</p>
                </div>
              </div>
            </li>
            <li className="rounded-lg border border-slate-200 p-5">
              <div className="flex items-start gap-4">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-amber-600/10 text-amber-600">
                  <ShieldCheck size={20} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">Reliable</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">Modern stack and proven practices.</p>
                </div>
              </div>
            </li>
            <li className="rounded-lg border border-slate-200 p-5">
              <div className="flex items-start gap-4">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-amber-600/10 text-amber-600">
                  <Rocket size={20} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">Growth-focused</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">Outcomes over vanity metrics.</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 py-12 md:py-16" aria-label="Contact">
        <div className="mx-auto max-w-xl">
          <h2 className="text-balance text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">Contact Us</h2>
          <div className="mt-6 grid gap-6">
            <div className="rounded-lg border border-slate-200 p-5">
              <dl className="grid gap-3 text-sm">
                <div className="flex items-center justify-between">
                  <dt className="text-slate-600">Email</dt>
                  <dd>
                    <a className="text-amber-600 underline-offset-2 hover:underline" href="mailto:info@agnabyte.tech">
                      info@agnabyte.tech
                    </a>
                  </dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-slate-600">Phone</dt>
                  <dd>
                    <a className="text-amber-600 underline-offset-2 hover:underline" href="tel:8667430428">
                      8667430428
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-12 md:py-16" aria-label="Call to action">
        <div className="mx-auto max-w-xl rounded-lg border border-slate-200 p-6 text-center">
          <h3 className="text-pretty text-xl font-semibold text-slate-900 md:text-2xl">
            Let’s build your digital future together.
          </h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Ready to move forward? We’d love to learn about your goals.
          </p>
          <div className="mt-4 flex justify-center">
            <a
              href="mailto:info@agnabyte.tech?subject=I%20want%20to%20get%20in%20touch"
              className="inline-flex items-center justify-center rounded-md bg-amber-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2"
            >
              Contact us today
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-slate-200 px-6 py-8">
        <div className="mx-auto flex max-w-xl flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-3">
            <Image src="/images/agnabyte-logo.png" alt="Agnabyte logo" width={32} height={32} />
            <span className="font-sans text-sm font-semibold text-slate-900">Agnabyte</span>
          </div>
          <p className="text-center text-xs text-slate-600">
            © {new Date().getFullYear()} Agnabyte. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  )
}
