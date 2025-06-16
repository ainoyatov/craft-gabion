import BackToPortfolio from '@/components/ui/BackToPortfolio'

export default function UrbanGardenDividerPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 px-6 py-12 text-gray-800 dark:text-gray-100">
      <div className="max-w-3xl mx-auto space-y-6">
        <BackToPortfolio />

        <h1 className="text-2xl font-semibold text-center">Urban Garden Divider</h1>

        <img
          src="/main_project_3.png"
          alt="Modern Stone Entryway"
          className="w-full rounded border border-gray-200 dark:border-gray-700"
        />

        <p>
          This compact project was all about maximizing space in a tight urban yard. The client wanted to define their patio and garden zones without closing off light or airflow.
        </p>
        <p>
          We proposed a low-profile gabion divider, about waist-high, to separate the lounge area from raised beds and herbs. Recycled crushed stone was used for a lighter fill that still gave strong visual contrast against the surrounding greenery.
        </p>
        <p>
          Installation had to be done with minimal disruption to the existing garden — no heavy equipment, no regrading. The modular cage design made it possible to assemble and fill in place using hand tools and wheelbarrows.
        </p>
        <p>
          The result is functional but beautiful — a true example of how gabions can support urban spaces without sacrificing design or practicality.
        </p>
      </div>
    </main>
  )
}