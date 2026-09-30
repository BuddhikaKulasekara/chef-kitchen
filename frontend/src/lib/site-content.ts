import { HeaderItem } from '@/app/types/menu'
import { FeaturesType } from '@/app/types/features'
import { ExpertChiefType } from '@/app/types/expertchief'
import { GalleryImagesType } from '@/app/types/galleryimage'
import { FooterLinkType } from '@/app/types/footerlink'
import { FullMenuType } from '@/app/types/fullmenu'

export const headerLinks: HeaderItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#aboutus' },
  { label: 'Menu', href: '/#menu' },
  { label: 'Reserve', href: '/#reserve' },
]

export const featuresData: FeaturesType[] = [
  {
    imgSrc: '/images/Features/cozy.webp',
    heading: 'Warm dining room',
    subheading: 'Comfortable seating for dates, families, and small celebrations.',
  },
  {
    imgSrc: '/images/Features/unique.webp',
    heading: 'Chef-driven menu',
    subheading: 'Seasonal plates that change with local harvests and guest feedback.',
  },
  {
    imgSrc: '/images/Features/fresh.webp',
    heading: 'Fresh daily',
    subheading: 'Produce and proteins sourced from trusted Sri Lankan suppliers.',
  },
  {
    imgSrc: '/images/Features/community.webp',
    heading: 'Live events',
    subheading: 'Wine dinners, tasting menus, and chef’s table nights each month.',
  },
]

export const expertChiefData: ExpertChiefType[] = [
  {
    profession: 'Executive Chef',
    name: 'Marco Benton',
    imgSrc: '/images/Expert/boyone.png',
  },
  {
    profession: 'Pastry Lead',
    name: 'Elena Rivera',
    imgSrc: '/images/Expert/girl.png',
  },
  {
    profession: 'Sous Chef',
    name: 'John Doe',
    imgSrc: '/images/Expert/boytwo.png',
  },
]

export const galleryImagesData: GalleryImagesType[] = [
  {
    src: '/images/Gallery/foodone.webp',
    name: 'Caesar Salad',
    price: 35,
  },
  {
    src: '/images/Gallery/foodtwo.webp',
    name: 'Christmas Salad',
    price: 17,
  },
  {
    src: '/images/Gallery/foodthree.webp',
    name: 'Pumpkin & Mushroom Bowl',
    price: 45,
  },
  {
    src: '/images/Gallery/foodfour.webp',
    name: 'BBQ Chicken Pizza',
    price: 27,
  },
]

export const fullMenuData: FullMenuType[] = [
  {
    name: 'Grilled Salmon',
    price: 18.99,
    description: 'Lemon butter, grilled vegetables.',
  },
  {
    name: 'Caesar Salad',
    price: 9.99,
    description: 'Romaine, parmesan, house dressing.',
  },
  {
    name: 'Margherita Pizza',
    price: 13.49,
    description: 'Tomato, mozzarella, basil.',
  },
  {
    name: 'Tomato Basil Soup',
    price: 6.99,
    description: 'Creamy tomato with garlic and basil.',
  },
]

export const footerLinkData: FooterLinkType[] = [
  {
    section: 'Visit',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/#aboutus' },
      { label: 'Menu', href: '/#menu' },
      { label: 'Reserve', href: '/#reserve' },
    ],
  },
  {
    section: 'Info',
    links: [
      { label: 'Admin', href: '/admin/login' },
      { label: 'Privacy', href: '/privacy-policy' },
      { label: 'Terms', href: '/terms-conditions' },
    ],
  },
]
