'use client'

import Link from 'next/link'
import { useState } from 'react'
import Logo from './Logo'
import { HeaderItem } from '@/app/types/menu'

const NAV_FILTER = ['Home', 'About', 'Menu', 'Reserve']

type HeaderProps = {
  links: HeaderItem[]
}

export default function Header({ links }: HeaderProps) {
  const [open, setOpen] = useState(false)
  const nav = links.filter((l) => NAV_FILTER.includes(l.label))

  return (
    <header className='sticky top-0 z-50 border-b border-line/80 bg-cream/90 backdrop-blur-md'>
      <div className='container flex h-[4.25rem] items-center justify-between gap-4'>
        <Logo />

        <nav className='hidden items-center gap-9 md:flex' aria-label='Main'>
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className='text-sm font-semibold text-cocoa-soft transition hover:text-spice'
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className='flex items-center gap-3'>
          <a
            href='tel:+94761627842'
            className='hidden text-sm font-semibold text-muted lg:inline'
          >
            +94 76 162 7842
          </a>
          <Link href='/#reserve' className='btn !py-2.5 !px-5 text-xs sm:text-sm'>
            Book a table
          </Link>
          <button
            type='button'
            className='rounded-full border-2 border-line bg-surface px-3 py-2 text-xs font-bold text-cocoa md:hidden'
            aria-expanded={open}
            aria-label='Open menu'
            onClick={() => setOpen((v) => !v)}
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      {open && (
        <nav
          className='border-t border-line bg-cream px-4 py-4 md:hidden'
          aria-label='Mobile'
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className='block py-2.5 text-base font-semibold text-cocoa'
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
