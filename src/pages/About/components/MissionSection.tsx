import Container from "../../../components/Container"

const MissionVisionSection = ({ heading, tagline }: any) => {
  return (
    <div className="py-16 bg-white">
      <Container>

        <div className="  mx-auto">
          {/* Top Badge */}
          <div className="flex justify-center mb-6">
            <div className="bg-purple-100 text-TwPrimaryPurple px-6 py-2 rounded-full inline-block">{tagline || "What we thrive for"}</div>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-700 text-center mb-4">{heading || "Mission and Vision"}</h2>

          {/* Subheading */}
          <p className="text-gray-500 text-center max-w-5xl mx-auto mb-12">
            At <b>EBC</b>, we are committed to empowering students by providing <b>seamless access to quality education abroad.</b> Our goal is to make the journey of studying overseas <b>smooth, transparent, and stress-free</b> for aspiring medical students.
          </p>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-purple-50 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 pb-4 border-b border-purple-100">Mission</h3>
              <p className="text-gray-600">
                Our mission is to <b>guide and support students</b> in securing admissions to top medical universities abroad. We aim to provide <b>expert counseling, a structured application process, and continuous assistance</b> to ensure every student finds the right path to success.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-amber-50 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 pb-4 border-b border-amber-100">Vision</h3>
              <p className="text-gray-600">
                We envision a future where <b>every student, regardless of background, has the opportunity to study abroad</b> with confidence. Through <b>trust, innovation, and dedication,</b> we strive to create a global community of future medical professionals.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default MissionVisionSection

