import { Images } from "../../../assets/images"
import Container from "../../../components/Container"

const JourneySection = () => {
  // Journey data
  const journeyItems = [
    {
      year: "2007",
      title: "Lorem ipsum dolor sit amet consectetur.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Maecenas dolor turpis donec mauris quis nulla elit elit cursus. Quis felis lorem habitant elit. Ornare mattis nibh tristique amet amet nisi.",
      image: "/whiteboard-person.jpg",
      imageAlt: "Person writing on whiteboard",
    },
    {
      year: "2008",
      title: "Lorem ipsum dolor sit amet consectetur.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Maecenas dolor turpis donec mauris quis nulla elit elit cursus. Quis felis lorem habitant elit. Ornare mattis nibh tristique amet amet nisi.",
      image: "/meeting-discussion.jpg",
      imageAlt: "Two people in discussion",
    },
    {
      year: "2010",
      title: "Lorem ipsum dolor sit amet consectetur.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Maecenas dolor turpis donec mauris quis nulla elit elit cursus. Quis felis lorem habitant elit. Ornare mattis nibh tristique amet amet nisi.",
      image: "/placeholder.svg?height=300&width=500",
      imageAlt: "Company expansion",
    },
    {
      year: "2015",
      title: "Lorem ipsum dolor sit amet consectetur.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Maecenas dolor turpis donec mauris quis nulla elit elit cursus. Quis felis lorem habitant elit. Ornare mattis nibh tristique amet amet nisi.",
      image: "/placeholder.svg?height=300&width=500",
      imageAlt: "International partnerships",
    },
  ]

  return (
    <div className="py-16 bg-white">
      <Container>

        <div className="mx-auto">
          {/* Top Badge */}
          <div className="flex justify-center mb-6">
            <div className="bg-purple-100 text-TwPrimaryPurple px-6 py-2 rounded-full inline-block">
              Have a look at our journey
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-700 text-center mb-4">Brief History of EBC</h2>

          {/* Subheading */}
          <p className="text-gray-500 text-center max-w-3xl mx-auto mb-16">
            Lorem ipsum dolor sit amet consectetur. Nisl ut neque tortor nulla felis nunc. Sit ac sed sed pulvinar sit
            purus morbi. Elit amet sed velit auctor urna vitae nam ultricies massa.
          </p>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-[9px] lg:left-1/2 transform lg:-translate-x-1/2 h-full w-1 bg-purple-200"></div>

            {/* Journey Items */}
            {journeyItems.map((item, index) => (
              <div key={index} className="relative mb-24 last:mb-0">
                {/* Timeline Dot */}
                <div className="top-24 absolute left-0 lg:left-1/2 transform lg:-translate-x-1/2 w-6 h-6 rounded-full bg-TwPrimaryPurple z-10"></div>

                <div
                  className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} lg:pl-0 pl-[70px] items-center gap-14 lg:gap-36`}
                >
                  {/* Text Content */}
                  <div
                    className={`w-full lg:w-1/2 ${index % 2 === 0 ? "lg:text-right lg:pr-12" : "lg:text-left lg:pl-12"}`}
                  >
                    <div className="bg-purple-50 rounded-xl p-6 lg:p-8">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>

                  {/* Year */}
                  <div className="absolute text-2xl font-bold text-TwPrimaryPurple top-0 -left-4 lg:left-1/2 transform lg:-translate-x-1/2 mt-12">
                    {item.year}
                  </div>

                  {/* Image */}
                  <div className="w-full md:w-1/2 ">
                    <img
                      src={Images.About.Timeline1 || "/placeholder.svg"}
                      alt={item.imageAlt}
                      className="w-full h-auto rounded-xl max-h-[340px] object-cover object-top"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </Container>

    </div>
  )
}

export default JourneySection

