import Image from 'next/image'
import Link from 'next/link'

export default function Cook() {
  return (
    <section id='aboutus' className='section scroll-mt-24 overflow-hidden'>
      <div className='container'>
        <div className='grid items-center gap-12 lg:grid-cols-2'>
          <div className='relative order-2 lg:order-1'>
            <div className='relative aspect-[5/6] overflow-hidden rounded-[2rem] shadow-food'>
              <Image
                src='/images/Cook/cook.webp'
                alt='Chef cooking with passion'
                fill
                sizes='(max-width: 1024px) 100vw, 50vw'
                className='object-cover'
              />
            </div>
            <Image
              src='/images/Cook/burger.webp'
              alt=''
              width={140}
              height={180}
              className='absolute -bottom-6 -right-4 hidden rounded-2xl border-4 border-cream shadow-food rotate-3 sm:block'
              aria-hidden
            />
          </div>

          <div className='order-1 lg:order-2'>
            <p className='label mb-2'>Our story</p>
            <h2 className='text-3xl sm:text-4xl lg:text-5xl leading-tight'>
              Cooked slow. Served with{' '}
              <span className='italic text-spice'>heart.</span>
            </h2>
            <p className='mt-5 text-muted leading-relaxed'>
              We believe great food starts with respect—for farmers, for fire, and for
              the people around your table. Every plate at Chef Kitchen is a little
              love letter from our open kitchen in Kandy.
            </p>
            <p className='mt-4 text-muted leading-relaxed'>
              Come hungry. Leave happy. That&apos;s the only rule.
            </p>
            <Link href='/#menu' className='btn mt-8'>
              Taste the menu
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
