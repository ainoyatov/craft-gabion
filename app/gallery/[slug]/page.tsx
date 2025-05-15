'use client'

import { useParams, notFound } from 'next/navigation'
import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import BackToGallery from '@/components/ui/BackToGallery'
import { galleryData } from '@/components/gallery/galleryData'

export default function GalleryDetailPage() {
  const { slug } = useParams()
  const gallery = galleryData.find((g) => g.slug === slug)
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  if (!gallery) return notFound()

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 px-6 py-12 text-gray-800 dark:text-gray-100">
      <div className="max-w-5xl mx-auto">
        <BackToGallery />

        <h1 className="text-2xl font-semibold text-center mb-8">{gallery.title}</h1>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {gallery.images.map((img, i) => (
            <div
              key={i}
              onClick={() => {
                setIndex(i)
                setOpen(true)
              }}
              className="cursor-pointer w-full h-48 bg-gray-100 dark:bg-gray-800 rounded flex items-center justify-center text-gray-400 text-sm hover:opacity-80"
            >
              <img
                    src={img.src}
                    alt={img.alt}
                    className="object-cover w-full h-full"
                />
            </div>
          ))}
        </div>

        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={index}
          slides={gallery.images.map((img) => ({ src: img.src, alt: img.alt }))}
        />
      </div>
    </main>
  )
}