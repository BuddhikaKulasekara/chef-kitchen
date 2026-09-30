'use client'

import { useEffect, useState } from 'react'
import { Icon } from '@iconify/react'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 400)
    }
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  if (!isVisible) return null

  return (
    <button
      type='button'
      onClick={scrollToTop}
      aria-label='Scroll to top'
      className='fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-cream shadow-lg transition hover:bg-primary'
    >
      <Icon icon='solar:arrow-up-linear' width={22} />
    </button>
  )
}
