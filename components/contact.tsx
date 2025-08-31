"use client"

import { useState } from "react"

export function Contact() {
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")

  const email = "info@agnabyte.com"
  const phone = "8667430428"

  const mailto = () => {
    const subject = encodeURIComponent(`Hello from ${name || "Agnabyte site"}`)
    const body = encodeURIComponent(message || "I'd like to get in touch.")
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="px-6 py-12 md:py-16" aria-label="Contact">
      <div className="mx-auto max-w-xl">
        <h2 className="text-balance text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">Contact Us</h2>

        <div className="mt-6 grid gap-6">
          <div className="rounded-lg border border-slate-200 p-5">
            <dl className="grid gap-3 text-sm">
              <div className="flex items-center justify-between">
                <dt className="text-slate-600">Email</dt>
                <dd>
                  <a className="text-amber-600 underline-offset-2 hover:underline" href={`mailto:${email}`}>
                    {email}
                  </a>
                </dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-slate-600">Phone</dt>
                <dd>
                  <a className="text-amber-600 underline-offset-2 hover:underline" href={`tel:${phone}`}>
                    {phone}
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          {/* Optional lightweight form that opens the user's email client */}
          <form
            className="rounded-lg border border-slate-200 p-5"
            onSubmit={(e) => {
              e.preventDefault()
              mailto()
            }}
          >
            <div className="grid gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-900">
                  Your name
                </label>
                <input
                  id="name"
                  type="text"
                  className="mt-1 w-full rounded-md border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-amber-600"
                  placeholder="Jane Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-900">
                  Message
                </label>
                <textarea
                  id="message"
                  className="mt-1 h-28 w-full rounded-md border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-amber-600"
                  placeholder="Tell us a bit about your project..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-md bg-amber-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2"
                >
                  Send via Email
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
