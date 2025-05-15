'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function BackToGallery() {
  return (
    <div className="mb-8">
      <Link
        href="/gallery#main_gallery"
        className="inline-flex items-center text-sm text-blue-600 dark:text-blue-400 hover:underline"
      >
        <ArrowLeft className="w-4 h-4 mr-1" />
        Back to Gallery
      </Link>
    </div>
  )
}