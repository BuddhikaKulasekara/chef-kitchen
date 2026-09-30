'use client'

import { useState, useEffect } from 'react'

const fieldClass =
  'w-full rounded-2xl border border-line bg-cream px-4 py-3 text-sm text-cocoa placeholder:text-muted focus:border-spice focus:outline-none focus:ring-2 focus:ring-spice/20'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phnumber: '',
    outlet: 'Main dining',
    time: '',
    people: '',
    Message: '',
  })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [valid, setValid] = useState(false)

  useEffect(() => {
    const keys = ['fullname', 'email', 'phnumber', 'time', 'people'] as const
    setValid(keys.every((k) => formData[k].trim() !== ''))
  }, [formData])

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!valid) return
    setLoading(true)
    try {
      const res = await fetch('http://localhost:5000/api/reservations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (!res.ok) throw new Error('failed')
      setSent(true)
      setFormData({
        fullname: '',
        email: '',
        phnumber: '',
        outlet: 'Main dining',
        time: '',
        people: '',
        Message: '',
      })
      setTimeout(() => setSent(false), 4000)
    } catch {
      alert('Could not send. Please call +94 76 162 7842.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id='reserve' className='section scroll-mt-24 bg-cream-deep/50'>
      <div className='container'>
        <div className='overflow-hidden rounded-[2rem] border border-line bg-surface shadow-card'>
          <div className='grid lg:grid-cols-5'>
            <div className='bg-linear-to-br from-spice/10 to-honey/10 p-10 lg:col-span-2 lg:p-12'>
              <p className='label mb-2'>Reservations</p>
              <h2 className='text-3xl sm:text-4xl'>
                Save your seat at the table
              </h2>
              <p className='mt-4 text-sm leading-relaxed text-muted'>
                Lunch 12:00–15:00 · Dinner 18:00–23:00
                <br />
                69/1 D.S. Senanayake Road, Kandy
              </p>
              <p className='mt-6 font-display text-lg italic text-spice'>
                &ldquo;Good food is all the sweeter when shared.&rdquo;
              </p>
            </div>

            <form onSubmit={onSubmit} className='space-y-3 p-8 lg:col-span-3 lg:p-10'>
              {sent && (
                <p className='rounded-2xl bg-spice/10 px-4 py-3 text-sm font-semibold text-spice'>
                  You&apos;re on the list—we&apos;ll confirm soon! 🎉
                </p>
              )}
              <input
                name='fullname'
                placeholder='Your name'
                required
                value={formData.fullname}
                onChange={onChange}
                className={fieldClass}
              />
              <div className='grid gap-3 sm:grid-cols-2'>
                <input
                  type='email'
                  name='email'
                  placeholder='Email'
                  required
                  value={formData.email}
                  onChange={onChange}
                  className={fieldClass}
                />
                <input
                  name='phnumber'
                  placeholder='Phone'
                  required
                  value={formData.phnumber}
                  onChange={onChange}
                  className={fieldClass}
                />
              </div>
              <div className='grid gap-3 sm:grid-cols-2'>
                <input
                  type='time'
                  name='time'
                  required
                  value={formData.time}
                  onChange={onChange}
                  className={fieldClass}
                />
                <input
                  type='number'
                  min={1}
                  name='people'
                  placeholder='Guests'
                  required
                  value={formData.people}
                  onChange={onChange}
                  className={fieldClass}
                />
              </div>
              <select
                name='outlet'
                value={formData.outlet}
                onChange={onChange}
                className={fieldClass}
              >
                <option>Main dining</option>
                <option>Chef&apos;s counter</option>
                <option>Garden terrace</option>
              </select>
              <textarea
                name='Message'
                rows={2}
                placeholder='Celebrating something special? Tell us…'
                value={formData.Message}
                onChange={onChange}
                className={fieldClass}
              />
              <button type='submit' disabled={!valid || loading} className='btn w-full disabled:opacity-50'>
                {loading ? 'Sending love…' : 'Request a table'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
