import BackToPortfolio from '@/components/ui/BackToPortfolio'

export default function UrbanGardenDividerPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 px-6 py-12 text-gray-800 dark:text-gray-100">
      <div className="max-w-3xl mx-auto space-y-6">
        <BackToPortfolio />
        
        <h1 className="text-2xl font-semibold text-center">Urban Garden Divider</h1>
        <div className="h-48 bg-gray-100 dark:bg-gray-800 rounded flex items-center justify-center text-gray-400">
          Image Placeholder
        </div>
        <p>
          Designed for a small urban backyard, this gabion divider separates the patio from the garden while adding structure and character to the space.
        </p>
        <p>
          Lightweight stone and tight framing made it perfect for a tight-space install with no compromise on style.
        </p>
      </div>
    </main>
  )
}