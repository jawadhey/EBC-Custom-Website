import { FaGraduationCap } from "react-icons/fa"
import { Images } from "../../../assets/images"
import Container from "../../../components/Container"

const GraduatesSection = () => {

  const sections = [
    {
      title: "Commitment to Student Success",
      content:
        "We are dedicated to guiding students toward the best educational opportunities abroad. From personalized counseling to hassle-free admission processes, we ensure that every student gets the support they need to thrive.",
    },
    {
      title: "Transparency & Trust",
      content:
        "Our process is built on honesty and clarity, ensuring students and parents receive accurate information about universities, tuition, and visa procedures, leaving no room for uncertainty.",
    },
    {
      title: "Proven Track Record",
      content:
        "With 15000+ successful student placements and partnerships with top medical universities, we take pride in our impact on shaping future doctors and healthcare professionals.",
    },
  ];


  return (
    <div className="py-16 bg-white">
      <Container>

        <div className="  mx-auto">
          {/* Top Badge */}
          <div className="flex justify-center mb-6">
            <div className="bg-green-100 text-green-600 px-6 py-2 rounded-full inline-block">
              Looking back, we have come a long way
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-700 text-center mb-12 max-w-4xl mx-auto">
            Our Core Values & Achievements
          </h2>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Left Column - Image */}
            <div className="relative">
              <img src={Images.About.Graduate} alt="Graduates taking selfie" className="w-full h-full max-h-[470px] object-cover rounded-2xl" />

              {/* Overlay */}
              <div className="absolute bottom-6 left-0 mx-auto justify-center xl:left-1/2 transform xl:-translate-x-1/2 bg-white rounded-full py-2 px-4 shadow-md flex items-center">
                <div className="flex-shrink-0 mr-3">
                  <img
                    src={Images.About.Graduate}
                    alt="Profile"
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                </div>
                <div>
                  <p className="font-medium text-sm">Our Graduates Get-together</p>
                  <p className="text-gray-500 text-xs">Lorem ipsum dolor sit amet consectetur.</p>
                </div>
                <div className="ml-3 bg-gray-100 rounded-full p-2">
                  <FaGraduationCap className="text-gray-600 text-xs" />
                </div>
              </div>
            </div>

            {/* Right Column - Text Blocks */}
            <div className="space-y-6">
              {sections.map((section, index) => (
                <div key={index} className="bg-purple-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">{section.title}</h3>
                  <p className="text-gray-600">{section.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>

    </div>
  )
}

export default GraduatesSection

