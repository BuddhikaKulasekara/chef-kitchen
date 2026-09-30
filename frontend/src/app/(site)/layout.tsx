import Footer from '@/app/components/Layout/Footer'
import Header from '@/app/components/Layout/Header'
import { footerLinkData, headerLinks } from '@/lib/site-content'

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header links={headerLinks} />
      {children}
      <Footer sections={footerLinkData} />
    </>
  )
}
