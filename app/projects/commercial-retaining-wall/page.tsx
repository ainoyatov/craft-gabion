import BackToPortfolio from '@/components/ui/BackToPortfolio'

export default function CommercialRetainingWallPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 px-6 py-12 text-gray-800 dark:text-gray-100">
      <div className="max-w-3xl mx-auto space-y-6">
        <BackToPortfolio />

        <h1 className="text-2xl font-semibold text-center">Commercial Retaining Wall</h1>

        <img
          src="/main_project_4.png"
          alt="Modern Stone Entryway"
          className="w-full rounded border border-gray-200 dark:border-gray-700"
        />

        <p>
          This large-scale gabion retaining wall was built to stabilize a sloped commercial site while meeting strict engineering specs. The wall needed to hold back over 6 feet of grade across a 60-foot span.
        </p>
        <p>
          We sourced heavy-duty mesh cages and used angular basalt rock to create optimal interlock and drainage. The wall also includes weep holes and buried filtration to manage water flow without erosion.
        </p>
        <p>
          Timing was critical on this job — we coordinated tightly with concrete crews, electricians, and landscapers to stay on track and avoid delays during site development.
        </p>
        <p>
          The finished wall is rock-solid, visually striking, and built to last. It’s a great example of how gabions can fulfill infrastructure needs while still delivering aesthetics.
        </p>
      </div>
    </main>
  )
}