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
          <p className="text-gray-500 text-center max-w-3xl mx-auto mb-12">
            Lorem ipsum dolor sit amet consectetur. Nam sem amet nulla in non lorem. Rhoncus a lectus venenatis mattis
            tellus risus nullam risus. Eu amet feugiat enim nunc. Eget.
          </p>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-purple-50 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 pb-4 border-b border-purple-100">Mission</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur. Donec sit tristique velit justo vel a scelerisque laoreet. Urna
                lectus justo lectus quis duis odio montes. Lacus.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-amber-50 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 pb-4 border-b border-amber-100">Vision</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur. Donec sit tristique velit justo vel a scelerisque laoreet. Urna
                lectus justo lectus quis duis odio montes. Lacus.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default MissionVisionSection

