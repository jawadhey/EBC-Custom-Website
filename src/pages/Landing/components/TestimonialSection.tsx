"use client"

import { useState } from "react"
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa"
import Container from "../../../components/Container"
import { Images } from "../../../assets/images"

const TestimonialSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Mary Jane",
      position: "MBBS Wuhan University of Medical Sciences",
      image: Images.TestimonialImage,
      text: "Lorem ipsum dolor sit amet consectetur. Nibh mollis molestie quis faucibus commodo ullamcorper venenatis purus molestie. Tempus sit purus pretium egestas pellentesque nulla erat. Proin semper pellentesque ultricies enim id tellus condimentum. Enim arcu aliquet neque dolor eget in dolor in consectetur. Habitasse ornare aliquam faucibus cursus.",
    },
    {
      id: 2,
      name: "John Smith",
      position: "MD European Medical University",
      image: Images.TestimonialImage,
      text: "Lorem ipsum dolor sit amet consectetur. Nibh mollis molestie quis faucibus commodo ullamcorper venenatis purus molestie. Tempus sit purus pretium egestas pellentesque nulla erat. Proin semper pellentesque ultricies enim id tellus condimentum.",
    },
    {
      id: 3,
      name: "Sarah Williams",
      position: "MBBS Beijing Medical University",
      image: Images.TestimonialImage,
      text: "Lorem ipsum dolor sit amet consectetur. Nibh mollis molestie quis faucibus commodo ullamcorper venenatis purus molestie. Tempus sit purus pretium egestas pellentesque nulla erat. Proin semper pellentesque ultricies enim id tellus condimentum. Enim arcu aliquet neque dolor eget in dolor in consectetur.",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  return (
    <div className="py-16 bg-[#FFF7E8]">
      <Container>
        <div className="mx-auto">
          {/* Progress Bar */}
          <div className="w-64 h-2 bg-gray-200 rounded-full mx-auto mb-12">
            <div
              className="h-full bg-TwPrimaryPurple rounded-full"
              style={{ width: `${((currentSlide + 1) / testimonials.length) * 100}%` }}
            ></div>
          </div>

          {/* Testimonial Content */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-16 items-center mb-12">
            {/* Left Column - Image */}
            <div className="col-span-4">
              <img
                src={testimonials[currentSlide].image || "/placeholder.svg"}
                alt={testimonials[currentSlide].name}
                className="w-full h-auto max-h-[400px] max-w-[400px] rounded-2xl"
              />
            </div>

            {/* Right Column - Testimonial */}
            <div className="col-span-8">
              <p className="text-gray-700 text-lg leading-relaxed mb-8">{testimonials[currentSlide].text}</p>

              <div className="flex items-start">
                <div className="bg-TwPrimaryPurple p-3 rounded-lg mr-4">
                  <FaQuoteLeft className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{testimonials[currentSlide].name}</h3>
                  <p className="text-gray-600">{testimonials[currentSlide].position}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-amber-200 mb-6"></div>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <button className="border border-gray-300 rounded-full px-8 py-3 text-gray-700 hover:bg-amber-100 transition-colors">
              See All Reviews
            </button>

            <div className="flex space-x-2">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-amber-100 transition-colors"
              >
                <FaChevronLeft className="text-gray-700" />
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-800 transition-colors"
              >
                <FaChevronRight className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </Container>

    </div>
  )
}

export default TestimonialSection

