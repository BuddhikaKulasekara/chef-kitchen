import Link from 'next/link'
import Logo from '../Header/Logo'
import { FooterLinkType } from '@/app/types/footerlink'

type FooterProps = {
  sections: FooterLinkType[]
}

export default function Footer({ sections }: FooterProps) {
  return (
    <footer className='bg-cocoa text-cream section !py-14'>
      <div className='container grid gap-12 md:grid-cols-12'>
        <div className='md:col-span-5'>
          <Logo light />
          <p className='mt-4 max-w-sm text-sm leading-relaxed text-cream/65'>
            Where every plate tells a story and every guest leaves with a full heart
            (and a happy stomach). See you at the table.
          </p>
        </div>

        <div className='flex flex-wrap gap-12 md:col-span-4'>
          {sections.map((block) => (
            <div key={block.section}>
              <p className='text-xs font-bold uppercase tracking-[0.2em] text-honey mb-4'>
                {block.section}
              </p>
              <ul className='space-y-2.5'>
                {block.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className='text-sm text-cream/70 transition hover:text-cream'
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className='md:col-span-3 text-sm text-cream/70 space-y-2'>
          <p>69/1 D.S. Senanayake Road, Kandy</p>
          <a href='tel:+94761627842' className='block hover:text-cream'>
            +94 76 162 7842
          </a>
          <a href='mailto:info@chefkitchen.com' className='block hover:text-cream'>
            info@chefkitchen.com
          </a>
        </div>
      </div>
      <p className='container mt-12 border-t border-cream/10 pt-8 text-center text-xs text-cream/50'>
        © {new Date().getFullYear()} Chef Kitchen · Made with love in Kandy
      </p>
    </footer>
  )
}
