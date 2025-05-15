import Link from 'next/link'
import { galleryData } from '@/components/gallery/galleryData'

export default function GalleryPage() {
  return (
    <main id="main_gallery" className="min-h-screen bg-white dark:bg-gray-900 px-6 py-12 text-gray-800 dark:text-gray-100">
      <h2 className="text-center text-lg font-semibold mb-12">
        Gabion Work in Action – Explore Our Craft
      </h2>

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


// import Link from 'next/link'
// import { galleryData } from '@/components/gallery/galleryData'

// export default function GalleryPage() {
//   return (
//     <main id="main_gallery" className="min-h-screen bg-white dark:bg-gray-900 px-6 py-12 text-gray-800 dark:text-gray-100">
//       <h2 className="text-center text-lg font-semibold mb-12">
//         Gabion Work in Action – Explore Our Craft
//       </h2>

//       <section className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
//         {galleryData.map((item) => (
//           <Link
//             key={item.slug}
//             href={`/gallery/${item.slug}`}
//             className="block border border-gray-300 dark:border-gray-600 rounded-lg p-4 hover:shadow-md transition text-center"
//           >
//             <div className="h-32 bg-gray-100 dark:bg-gray-800 rounded mb-3 flex items-center justify-center text-gray-400 text-sm">
//               Image Placeholder
//             </div>
//             <h4 className="text-sm font-medium text-gray-800 dark:text-gray-100">{item.title}</h4>
//           </Link>
//         ))}
//       </section>
//     </main>
//   )
// }