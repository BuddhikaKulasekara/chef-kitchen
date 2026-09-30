import Image from 'next/image'
import { FeaturesType } from '@/app/types/features'

type FeaturesProps = {
  items?: FeaturesType[]
}

export default function Features({ items = [] }: FeaturesProps) {
  return (
    <section className='section bg-cream-deep/60'>
      <div className='container text-center'>
        <p className='label mb-2'>The experience</p>
        <h2 className='text-3xl sm:text-4xl lg:text-5xl'>
          More than a meal—a <span className='italic text-spice'>feeling</span>
        </h2>
        <p className='mx-auto mt-3 max-w-xl text-muted'>
          Warm lights, sizzling pans, and flavors that hug your soul.
        </p>

        <ul className='mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
          {items.map((item) => (
            <li
              key={item.heading}
              className='card-food group p-6 text-left'
            >
              <div className='relative mx-auto mb-5 h-24 w-24 overflow-hidden rounded-full border-4 border-cream-deep bg-cream transition group-hover:scale-105'>
                <Image
                  src={item.imgSrc}
                  alt=''
                  fill
                  sizes='96px'
                  className='object-contain p-2'
                />
              </div>
              <h3 className='font-display text-xl text-cocoa'>{item.heading}</h3>
              <p className='mt-2 text-sm leading-relaxed text-muted'>{item.subheading}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
