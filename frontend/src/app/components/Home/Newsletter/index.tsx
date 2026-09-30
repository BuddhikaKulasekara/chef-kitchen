import Image from 'next/image'
import Link from 'next/link'

export default function Newsletter() {
  return (
    <section className='section !pt-0'>
      <div className='container'>
        <div className='relative overflow-hidden rounded-[2rem] bg-linear-to-br from-spice via-spice-dark to-cocoa shadow-food'>
          <div className='grid md:grid-cols-2'>
            <div className='relative z-10 p-10 md:p-14'>
              <p className='text-xs font-bold uppercase tracking-[0.2em] text-cream/80'>
                Weekly specials
              </p>
              <h2 className='mt-3 font-display text-3xl text-cream sm:text-4xl'>
                New flavors drop every Thursday
              </h2>
              <p className='mt-4 max-w-md text-cream/85 leading-relaxed'>
                Limited chalkboard dishes, seasonal ingredients, and the kind of plates
                you&apos;ll want to photograph before the first bite.
              </p>
              <Link
                href='/#reserve'
                className='mt-8 inline-flex rounded-full bg-honey px-6 py-3 text-sm font-bold text-cocoa transition hover:bg-cream'
              >
                Join us this week
              </Link>
            </div>
            <div className='relative hidden min-h-[220px] md:block'>
              <Image
                src='/images/Newsletter/soup.webp'
                alt='Seasonal soup special'
                fill
                sizes='400px'
                className='object-contain object-bottom p-6'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
