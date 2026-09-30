import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className='relative overflow-hidden food-glow'>
      <div className='absolute -right-20 top-20 h-72 w-72 rounded-full bg-honey/20 blur-3xl' />
      <div className='absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-spice/10 blur-3xl' />

      <div className='container section !pb-12'>
        <div className='grid items-center gap-12 lg:grid-cols-2 lg:gap-16'>
          <div className='relative z-10'>
            <div className='mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-surface/80 px-4 py-1.5 text-xs font-semibold text-cocoa-soft shadow-sm'>
              <span className='text-honey'>★</span> 4.9 loved by locals · Kandy
            </div>
            <h1 className='text-[2.65rem] leading-[1.08] sm:text-5xl lg:text-[3.4rem]'>
              Fall in love with{' '}
              <span className='font-display italic text-spice'>every bite</span>
            </h1>
            <p className='mt-5 max-w-lg text-base leading-relaxed text-muted sm:text-lg'>
              Bold flavors, cozy vibes, and plates that look as good as they taste.
              Chef Kitchen is where cravings meet comfort food—elevated.
            </p>
            <div className='mt-9 flex flex-wrap gap-4'>
              <Link href='/#menu' className='btn'>Explore flavors</Link>
              <Link href='/#reserve' className='btn-outline'>Reserve your spot</Link>
            </div>
            <p className='mt-8 text-sm font-medium text-cocoa-soft'>
              <span className='text-spice'>30+</span> signature dishes · Open kitchen ·
              Fresh daily
            </p>
          </div>

          <div className='relative mx-auto w-full max-w-lg lg:max-w-none'>
            <div className='relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-food sm:aspect-[5/6]'>
              <Image
                src='/images/hero/banner-image.webp'
                alt='Beautiful plated dish'
                fill
                priority
                sizes='(max-width: 1024px) 90vw, 50vw'
                className='object-cover'
              />
              <div className='absolute inset-0 bg-linear-to-t from-cocoa/50 via-transparent to-transparent' />
            </div>

            <div className='absolute -bottom-4 left-4 right-4 flex items-center gap-3 rounded-2xl border border-line/80 bg-surface/95 p-3 shadow-card backdrop-blur-sm sm:left-6 sm:right-auto sm:max-w-xs'>
              <div className='relative h-14 w-14 shrink-0 overflow-hidden rounded-xl'>
                <Image
                  src='/images/hero/pizza.webp'
                  alt='Chef special'
                  fill
                  sizes='56px'
                  className='object-cover'
                />
              </div>
              <div>
                <p className='text-xs font-bold uppercase tracking-wide text-spice'>
                  Chef&apos;s pick
                </p>
                <p className='text-sm font-semibold text-cocoa'>Stone-oven flatbread</p>
              </div>
            </div>

            <div className='absolute -top-3 -right-2 hidden rounded-2xl bg-honey px-4 py-3 text-center shadow-md sm:block rotate-6'>
              <p className='font-display text-2xl font-bold text-cocoa'>30+</p>
              <p className='text-[10px] font-bold uppercase tracking-wider text-cocoa/80'>
                Dishes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
