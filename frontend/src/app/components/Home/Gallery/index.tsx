import Image from 'next/image'
import { GalleryImagesType } from '@/app/types/galleryimage'
import MenuLauncher from './MenuLauncher'

type GalleryProps = {
  items?: GalleryImagesType[]
}

export default function Gallery({ items = [] }: GalleryProps) {
  return (
    <section id='menu' className='section scroll-mt-24 bg-cocoa text-cream'>
      <div className='container'>
        <div className='flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between'>
          <div>
            <p className='label !text-honey mb-2'>Menu highlights</p>
            <h2 className='text-3xl text-cream sm:text-4xl lg:text-5xl'>
              Dishes you&apos;ll <span className='italic text-spice'>dream</span> about
            </h2>
          </div>
          <MenuLauncher />
        </div>

        <ul className='mt-12 grid gap-6 sm:grid-cols-2'>
          {items.map((item, i) => (
            <li
              key={item.name}
              className='group relative overflow-hidden rounded-3xl bg-cocoa-soft/50'
            >
              <div className='relative aspect-[4/3] overflow-hidden'>
                <Image
                  src={item.src}
                  alt={item.name}
                  fill
                  sizes='(max-width: 640px) 100vw, 50vw'
                  className='object-cover transition duration-700 group-hover:scale-110'
                />
                <div className='absolute inset-0 bg-linear-to-t from-cocoa via-cocoa/20 to-transparent opacity-90' />
                <span className='absolute left-4 top-4 rounded-full bg-spice px-3 py-1 text-xs font-bold text-white'>
                  #{i + 1} favorite
                </span>
              </div>
              <div className='absolute bottom-0 left-0 right-0 flex items-end justify-between gap-3 p-5'>
                <div>
                  <p className='font-display text-xl text-cream sm:text-2xl'>{item.name}</p>
                  <p className='text-xs font-medium uppercase tracking-wider text-cream/60'>
                    Chef&apos;s kitchen
                  </p>
                </div>
                <p className='shrink-0 rounded-full bg-honey px-4 py-2 font-bold text-cocoa'>
                  ${item.price}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
