import ContactForm from '@/app/components/Contact/Form'
import Cook from '@/app/components/Home/Cook'
import Expert from '@/app/components/Home/Expert'
import Features from '@/app/components/Home/Features'
import Gallery from '@/app/components/Home/Gallery'
import Hero from '@/app/components/Home/Hero'
import Newsletter from '@/app/components/Home/Newsletter'
import {
  expertChiefData,
  featuresData,
  galleryImagesData,
} from '@/lib/site-content'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chef Kitchen — Food made with love in Kandy',
  description:
    'Warm flavors, cozy dining, and dishes you will crave again. Reserve your table in Kandy.',
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Features items={featuresData} />
      <Cook />
      <Gallery items={galleryImagesData} />
      <Expert chefs={expertChiefData} />
      <ContactForm />
      <Newsletter />
    </main>
  )
}
