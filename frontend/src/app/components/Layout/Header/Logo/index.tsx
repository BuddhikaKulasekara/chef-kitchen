import Link from 'next/link'

type LogoProps = {
  light?: boolean
}

export default function Logo({ light }: LogoProps) {
  return (
    <Link href='/' className='group flex items-center gap-2.5'>
      <span
        className={`flex h-10 w-10 items-center justify-center rounded-2xl text-lg transition group-hover:rotate-6 ${
          light ? 'bg-spice text-white' : 'bg-spice text-white shadow-md'
        }`}
        aria-hidden
      >
        CK
      </span>
      <span className='flex flex-col leading-tight'>
        <span
          className={`font-display text-xl font-semibold sm:text-[1.35rem] ${
            light ? 'text-cream' : 'text-cocoa'
          }`}
        >
          Chef Kitchen
        </span>
        <span
          className={`text-[10px] font-semibold uppercase tracking-[0.18em] ${
            light ? 'text-cream/60' : 'text-spice'
          }`}
        >
          Made with love
        </span>
      </span>
    </Link>
  )
}
