'use client'

import Image from 'next/image'

const Cook = () => {
  return (
    <section className='relative' id='aboutus'>
      <div className='container px-4'>
        <div className='absolute right-0 bottom-[-18%] xl:block hidden'>
          <Image
            src='/images/Cook/burger.webp'
            alt='burger-image'
            width={463}
            height={622}
          />
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-12 my-16 space-x-5'>
          <div className='lg:col-span-6 flex lg:justify-start justify-center'>
            <Image
              src='/images/Cook/cook.webp'
              alt='nothing'
              width={636}
              height={808}
            />
          </div>
          <div className='lg:col-span-6 flex flex-col justify-center items-center lg:items-start'>
            <p className='text-primary text-lg font-normal mb-3 tracking-widest uppercase lg:text-start text-center'>
              About Hunger Land
            </p>
            <h2 className='lg:text-start text-center'>
              Dining experience that excites the senses
            </h2>
            <p className='text-black/50 text-lg font-normal my-5 text-start'>
              At Hunger Land, every dish tells a story. Our chefs combine culinary tradition
              with modern innovation to create a dining experience that excites the senses.
              Using only the freshest, locally sourced ingredients and presenting each plate
              with care, we ensure every meal is a moment to remember.
            </p>
            <p className='text-black/50 text-lg font-normal mb-10 text-start'>
              Whether you’re celebrating a special occasion or simply enjoying a casual evening,
              Hunger Land offers a welcoming ambiance, flavorful creations, and something truly special for every guest.
            </p>
            {/*<button className='text-xl font-medium rounded-full text-white py-3 px-8 duration-300 bg-primary w-fit border border-primary hover:bg-transparent hover:text-primary hover:cursor-pointer'>
              Learn more
            </button>*/}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cook
