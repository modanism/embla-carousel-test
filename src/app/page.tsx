import EmblaCarousel from '@/components/EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel-react'
import Image from 'next/image'

export default function Home() {
  const OPTIONS: EmblaOptionsType = { loop: true }
const SLIDE_COUNT = 3
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
  return (
    <main className="sandbox">
    <section className="sandbox__carousel">
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </section>
  </main>
  )
}
