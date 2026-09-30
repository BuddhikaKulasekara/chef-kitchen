import Image from 'next/image'
import { ExpertChiefType } from '@/app/types/expertchief'

type ExpertProps = {
  chefs?: ExpertChiefType[]
}

export default function Expert({ chefs = [] }: ExpertProps) {
  return (
    <section className='section'>
      <div className='container text-center'>
        <p className='label mb-2'>Meet the chefs</p>
        <h2 className='text-3xl sm:text-4xl'>
          The hands behind the <span className='italic text-spice'>magic</span>
        </h2>

        <ul className='mt-14 grid gap-8 sm:grid-cols-3'>
          {chefs.map((chef) => (
            <li key={chef.name} className='card-food pb-6'>
              <div className='relative aspect-[4/5] overflow-hidden rounded-t-3xl bg-cream-deep'>
                <Image
                  src={chef.imgSrc}
                  alt={chef.name}
                  fill
                  sizes='(max-width: 640px) 100vw, 33vw'
                  className='object-cover object-top'
                />
                <div className='absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-cocoa/60 to-transparent' />
              </div>
              <p className='mt-5 font-display text-xl text-cocoa'>{chef.name}</p>
              <p className='mt-1 text-sm font-semibold text-spice'>{chef.profession}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
