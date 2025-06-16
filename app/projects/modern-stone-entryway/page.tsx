import BackToPortfolio from '@/components/ui/BackToPortfolio'

export default function ModernStoneEntrywayPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 px-6 py-12 text-gray-800 dark:text-gray-100">
      <div className="max-w-3xl mx-auto space-y-6">
        <BackToPortfolio />

        <h1 className="text-2xl font-semibold text-center">Modern Stone Entryway</h1>

        <img
          src="/main_project_1.png"
          alt="Modern Stone Entryway"
          className="w-full rounded border border-gray-200 dark:border-gray-700"
        />

        <p>
          This gabion entryway was designed for a modern desert home with clean lines and natural finishes. The client wanted a structure that added architectural interest and blended with their xeriscaped surroundings.
        </p>
        <p>
          We selected a cool-toned stone mix to complement the home’s neutral stucco and metal features. The entryway also needed to provide a sense of privacy and security while remaining visually open — a perfect use case for gabion cages.
        </p>
        <p>
          One of the main challenges was anchoring the structure securely without disrupting existing irrigation lines. We coordinated with the homeowner’s landscaper to ensure a smooth install that respected the original layout.
        </p>
        <p>
          The result is a sharp, welcoming focal point that feels rooted in the space. It adds dimension to the property without overwhelming it, proving that even small-scale gabion work can make a strong design statement.
        </p>
      </div>
    </main>
  )
}