import Image from "next/image"

export function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 px-6 py-8">
      <div className="mx-auto flex max-w-xl flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-center gap-3">
          <Image src="/images/agnabyte-logo.png" alt="Agnabyte logo" width={28} height={28} />
          <span className="font-sans text-sm font-semibold text-slate-900">Agnabyte</span>
        </div>
        <p className="text-center text-xs text-slate-600">
          © {new Date().getFullYear()} Agnabyte. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
