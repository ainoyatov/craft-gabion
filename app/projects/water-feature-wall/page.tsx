import BackToPortfolio from '@/components/ui/BackToPortfolio'

export default function WaterFeatureWallPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 px-6 py-12 text-gray-800 dark:text-gray-100">
      <div className="max-w-3xl mx-auto space-y-6">
        <BackToPortfolio />

        <h1 className="text-2xl font-semibold text-center">Water Feature Gabion Wall</h1>

        <img
          src="/main_project_2.png"
          alt="Modern Stone Entryway"
          className="w-full rounded border border-gray-200 dark:border-gray-700"
        />

        <p>
          This project combined the organic texture of gabions with the movement and sound of water. The homeowner envisioned a tranquil garden space where rock and water could interact in a visually striking way.
        </p>
        <p>
          We constructed a vertical gabion wall fitted with a recirculating pump system. Water spills gently over a smooth center slab inset within the rock, creating a subtle and soothing effect.
        </p>
        <p>
          Careful waterproofing and drainage considerations were key. We included an access hatch hidden in the rear cage for maintenance, and the base was reinforced to handle the added weight of water flow and stone.
        </p>
        <p>
          The finished piece is now the centerpiece of their yard — functional, artistic, and deeply calming. It attracts birds, masks ambient noise, and brings a natural rhythm to the space.
        </p>
      </div>
    </main>
  )
}