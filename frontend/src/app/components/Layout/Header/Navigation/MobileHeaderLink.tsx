import { useState } from 'react'
import Link from 'next/link'
import { HeaderItem } from '../../../../types/menu'

const ALLOWED_MENU = ['Home', 'About Us', 'Menu']

const MobileHeaderLink: React.FC<{ item: HeaderItem }> = ({ item }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false)

  if (!ALLOWED_MENU.includes(item.label)) {
    return null
  }

  return (
    <div className='w-full border-b border-ink/5 last:border-0'>
      <Link
        href={item.href}
        onClick={item.submenu ? () => setSubmenuOpen(!submenuOpen) : undefined}
        className='flex w-full items-center justify-between py-3 text-base font-semibold text-ink'
      >
        {item.label}
      </Link>
      {submenuOpen && item.submenu && (
        <div className='pb-3 pl-3'>
          {item.submenu.map((subItem, index) => (
            <Link
              key={index}
              href={subItem.href}
              className='block py-2 text-sm text-ink-muted hover:text-primary'
            >
              {subItem.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default MobileHeaderLink
