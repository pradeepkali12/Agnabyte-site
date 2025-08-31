import Link from "next/link"

export function CTA() {
  return (
    <section className="px-6 py-12 md:py-16" aria-label="Call to action">
      <div className="mx-auto max-w-xl rounded-lg border border-slate-200 p-6 text-center">
        <h3 className="text-pretty text-xl font-semibold text-slate-900 md:text-2xl">
          Let’s build your digital future together.
        </h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Ready to move forward? We’d love to learn about your goals.
        </p>
        <div className="mt-4 flex justify-center">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center rounded-md bg-amber-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2"
          >
            Contact us today
          </Link>
        </div>
      </div>
    </section>
  )
}
