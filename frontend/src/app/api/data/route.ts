import { NextResponse } from 'next/server'
import {
  expertChiefData,
  featuresData,
  footerLinkData,
  fullMenuData,
  galleryImagesData,
  headerLinks,
} from '@/lib/site-content'

export const GET = () => {
  return NextResponse.json({
    HeaderData: headerLinks,
    FeaturesData: featuresData,
    ExpertChiefData: expertChiefData,
    GalleryImagesData: galleryImagesData,
    FullMenuData: fullMenuData,
    FooterLinkData: footerLinkData,
  })
}
