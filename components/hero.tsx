import Image from "next/image"
import Link from "next/link"

export function Hero() {
  return (
    <header className="relative" aria-label="Agnabyte hero">
      {/* Subtle brand-aligned gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-amber-50 to-white" />
      <div className="mx-auto flex max-w-xl flex-col items-start gap-6 px-6 py-16 md:py-20">
        <div className="flex items-center gap-3">
          <Image src="/images/agnabyte-logo.png" alt="Agnabyte logo" width={44} height={44} priority />
          <span className="font-sans text-xl font-semibold tracking-tight text-slate-900">Agnabyte</span>
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
    </header>
  )
}
