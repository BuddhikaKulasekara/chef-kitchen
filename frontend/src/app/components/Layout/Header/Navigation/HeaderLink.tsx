'use client'

import { useState } from 'react'
import Link from 'next/link'
import { HeaderItem } from '../../../../types/menu'
import { usePathname } from 'next/navigation'

const ALLOWED_MENU = ['Home', 'About Us', 'Menu']

const HeaderLink: React.FC<{ item: HeaderItem; inverted?: boolean }> = ({
  item,
  inverted = false,
}) => {
  const [submenuOpen, setSubmenuOpen] = useState(false)
  const path = usePathname()

  if (!ALLOWED_MENU.includes(item.label)) {
    return null
  }

  const active = path === item.href
  const base = inverted
    ? active
      ? 'text-gold'
      : 'text-cream/80 hover:text-cream'
    : active
      ? 'text-primary'
      : 'text-ink-muted hover:text-primary'

  return (
    <div
      className='relative'
      onMouseEnter={() => item.submenu && setSubmenuOpen(true)}
      onMouseLeave={() => setSubmenuOpen(false)}
    >
      <Link
        href={item.href}
        className={`text-sm font-semibold tracking-wide transition ${base}`}
      >
        {item.label}
      </Link>

      {submenuOpen && item.submenu && (
        <div className='absolute left-0 mt-2 w-52 rounded-xl border border-ink/5 bg-white py-2 shadow-xl'>
          {item.submenu.map((subItem, index) => (
            <Link
              key={index}
              href={subItem.href}
              className={`block px-4 py-2 text-sm ${
                path === subItem.href
                  ? 'bg-primary/10 text-primary'
                  : 'text-ink-muted hover:bg-cream-dark hover:text-ink'
              }`}
            >
              {subItem.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default HeaderLink
