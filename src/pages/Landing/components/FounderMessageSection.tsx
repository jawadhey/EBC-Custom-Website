import { FaArrowRight, FaQuoteLeft } from "react-icons/fa"

const FoundersMessageSection = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Top Badge */}
        <div className="flex justify-center mb-6">
          <div className="bg-green-100 text-green-600 px-6 py-2 rounded-full inline-block">Get to know us better</div>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-700 text-center mb-4">Message from the Founders</h2>

        {/* Subheading */}
        <p className="text-gray-500 text-center max-w-3xl mx-auto mb-12">
          Lorem ipsum dolor sit amet consectetur. Nam sem amet nulla in non lorem. Rhoncus a lectus venenatis mattis
          tellus risus nullam risus. Eu amet feugiat enim nunc. Eget.
        </p>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column - Founder Images */}
          <div className="flex gap-4">
            <div className="w-2/3">
              <img src="/founder-main.jpg" alt="Founder" className="w-full h-auto rounded-lg" />
            </div>
            <div className="w-1/3 flex flex-col gap-4">
              <img src="/founder-secondary-1.jpg" alt="Co-Founder" className="w-full h-auto rounded-lg" />
              <img src="/founder-secondary-2.jpg" alt="Co-Founder" className="w-full h-auto rounded-lg" />
            </div>
          </div>

          {/* Right Column - Message */}
          <div>
            <FaQuoteLeft className="text-gray-300 text-5xl mb-6" />
            <p className="text-gray-700 text-lg leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Nibh mollis molestie quis faucibus commodo ullamcorper venenatis
              purus molestie. Tempus sit purus pretium egestas pellentesque nulla erat. Proin semper pellentesque
              ultricies enim id tellus condimentum. Enim arcu aliquet neque dolor eget in dolor in consectetur.
              Habitasse ornare aliquam faucibus cursus.
            </p>

            <div className="mt-10 flex justify-end">
              <a
                href="#"
                className="inline-flex items-center bg-purple-100 text-purple-600 px-6 py-3 rounded-full hover:bg-purple-200 transition-colors"
              >
                View Executive Team <FaArrowRight className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FoundersMessageSection

