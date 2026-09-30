'use client'

import { useState } from 'react'
import { FullMenuType } from '@/app/types/fullmenu'

export default function MenuLauncher() {
  const [open, setOpen] = useState(false)
  const [items, setItems] = useState<FullMenuType[]>([])
  const [loading, setLoading] = useState(false)

  const loadMenu = async () => {
    setOpen(true)
    if (items.length > 0) return
    setLoading(true)
    try {
      const res = await fetch('http://localhost:5000/api/menu')
      if (res.ok) setItems(await res.json())
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <button
        type='button'
        onClick={loadMenu}
        className='shrink-0 rounded-full border-2 border-cream/30 bg-cream/10 px-5 py-2.5 text-sm font-bold text-cream transition hover:border-honey hover:bg-honey hover:text-cocoa'
      >
        Full menu →
      </button>

      {open && (
        <div
          className='fixed inset-0 z-50 flex items-end justify-center bg-cocoa/70 p-4 backdrop-blur-sm sm:items-center'
          role='dialog'
          aria-modal='true'
          onClick={() => setOpen(false)}
        >
          <div
            className='max-h-[85vh] w-full max-w-lg overflow-hidden rounded-3xl bg-cream shadow-food'
            onClick={(e) => e.stopPropagation()}
          >
            <div className='flex items-center justify-between border-b border-line px-6 py-4'>
              <h3 className='font-display text-2xl text-cocoa'>Full menu</h3>
              <button
                type='button'
                className='text-sm font-bold text-spice'
                onClick={() => setOpen(false)}
              >
                Close
              </button>
            </div>
            <div className='overflow-y-auto px-6 py-4'>
              {loading ? (
                <p className='py-12 text-center text-muted'>Plating your menu…</p>
              ) : items.length === 0 ? (
                <p className='py-12 text-center text-sm text-muted'>
                  Connect the backend to see live dishes.
                </p>
              ) : (
                <ul className='divide-y divide-line'>
                  {items.map((item) => (
                    <li key={item.id ?? item.name} className='flex gap-4 py-4'>
                      <div className='flex-1'>
                        <p className='font-semibold text-cocoa'>{item.name}</p>
                        <p className='text-sm text-muted'>{item.description}</p>
                      </div>
                      <span className='font-display text-lg text-spice'>${item.price}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
