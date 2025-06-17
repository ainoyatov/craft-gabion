import Link from 'next/link'
import { galleryData } from '@/components/gallery/galleryData'

export default function GalleryPage() {
  return (
    <main id="main_gallery" className="min-h-screen bg-white dark:bg-gray-900 px-6 py-12 text-gray-800 dark:text-gray-100">
      <h2 className="text-center text-lg font-semibold mb-6">
        Gabion Work in Action – Explore Our Craft
      </h2>

      <p className="max-w-3xl mx-auto text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-12 text-center">
        Every project in our gallery tells a story of precision, patience, and passion. At CRAFT Gabion, we approach each structure not only as a functional solution but as a canvas for natural materials. Whether it’s a modern stone entryway, a tranquil water feature, or a robust retaining wall, our gabions are handcrafted to meet both aesthetic and structural needs. Explore the gallery to see how rock, steel, and design come together to create long-lasting installations that blend with nature and elevate architectural spaces. From small residential accents to large-scale commercial applications, this is where quality craftsmanship meets intentional design.
      </p>

      <section className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {galleryData.map((item) => (
          <Link
            key={item.slug}
            href={`/gallery/${item.slug}`}
            className="block border border-gray-300 dark:border-gray-600 rounded-lg p-4 hover:shadow-md transition text-center"
          >
            <div className="h-32 w-full overflow-hidden rounded mb-3 border border-gray-200 dark:border-gray-700">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-sm font-medium text-gray-800 dark:text-gray-100">{item.title}</h4>
          </Link>
        ))}
      </section>
    </main>
  )
}