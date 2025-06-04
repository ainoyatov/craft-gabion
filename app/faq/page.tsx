import FaqForm from "@/components/forms/FaqSection"

const FAQPage = () => {
  return (
    <div>
      <div className="flex flex-col items-center">
        
        <h3 className="w-full flex justify-center text-center font-semibold text-lg mt-6 mb-2 text-gray-900 dark:text-white">
          FAQ
        </h3>
        <div className="flex flex-col space-y-2 max-w-lg text-center p-2">
          <div>
            Explore our frequently asked questions to get a better understanding of how gabions work, from design and material options to the installation process and long-term durability. 
          </div>
          <div>
            Whether you’re considering a decorative feature or a functional retaining wall, we cover the most common questions to help you feel confident and informed. 
          </div>
          <div>
            Learn what to expect when partnering with us, including customization options, timelines, and how we ensure every project is built to last.
          </div>
        </div>

        {/* Center the form within its column */}
        <div className="w-full flex justify-center py-8">
          <FaqForm />
        </div>
      </div>
    </div>
  )
}

export default FAQPage