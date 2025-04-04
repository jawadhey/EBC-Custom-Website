import { Images } from "../assets/images"
import Container from "./Container"

const AboutUsSection = ({ Heading, Text }: any) => {
  return (
    <div className="py-16 bg-amber-50">

      <Container>
        <div className="mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            {/* Left Image */}
            <div className="col-span-full lg:col-span-4">
              <img src={Images.About.AboutGallery1} alt="Student reading in library" className="w-auto max-h-[500px] h-auto rounded-2xl" />
            </div>

            {/* Right Content */}
            <div className="col-span-full lg:col-span-8">
              <div className="inline-block px-4 py-2 rounded-full bg-gray-200 text-gray-700 text-sm mb-6">
                You can describe us as
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">{Heading || "About Us"}</h2>

              <div className="space-y-4 text-gray-600 text-wrap">
                {
                  Text ? Text : (
                    <p>
                      At <b>EBC</b>, we are dedicated to helping students <b>achieve their dream of studying medicine abroad</b>.
                      With expert guidance, personalized counseling, and a streamlined admission process, we ensure that every
                      student finds the right university that matches their aspirations. Our team works tirelessly to provide
                      <b>accurate information, visa support, and continuous assistance</b>, making the journey to international
                      education as smooth as possible. We believe that every student deserves <b>a chance to succeed</b>, and we
                      are here to make that happen with <b>trust, transparency, and commitment</b>.
                    </p>
                  )
                }
              </div>
            </div>
          </div>
        </div>
      </Container>

    </div>
  )
}

export default AboutUsSection

