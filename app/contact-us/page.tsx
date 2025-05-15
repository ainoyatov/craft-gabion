'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    // Simulate form submission delay
    await new Promise((res) => setTimeout(res, 1000))
    setStatus('sent')
    setForm({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 px-6 py-12 text-gray-800 dark:text-gray-100">
      <div className="max-w-xl mx-auto space-y-8">
        <h2 className="text-center text-2xl font-semibold">Contact Us</h2>

        <p className="text-center text-gray-700 dark:text-gray-300 text-sm">
          We’re grateful you're considering CRAFT Gabion. Whether you have a project in mind or just want to say hello, we’d love to hear from you.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1 text-sm">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-sm"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 text-sm">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-sm"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block mb-1 text-sm">Phone</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-sm"
              // placeholder="(123) 456-7890"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-1 text-sm">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-sm"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm disabled:opacity-50"
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'sent' && (
            <p className="text-green-600 dark:text-green-400 text-sm mt-2">
              Thanks! We’ll be in touch soon.
            </p>
          )}
        </form>
      </div>
    </main>
  )
}