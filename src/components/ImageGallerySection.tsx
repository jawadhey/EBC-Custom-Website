import { Images } from "../assets/images"
import Container from "./Container"

const ImageGallerySection = () => {
  return (
    <div className="py-16 bg-amber-50">
      <Container>

        <div className="mx-auto">
          <div className="grid grid-cols-12 gap-4 md:gap-6">
            {/* Top Row */}
            <div className="col-span-12 md:col-span-4 max-h-[500px]">
              <img
                src={Images.About.AboutGallery2}
                alt="Students discussing"
                className="w-auto h-full object-cover rounded-2xl"
              />
            </div>

            <div className="col-span-12 md:col-span-8 max-h-[500px]">
              <img
                src={Images.About.AboutGallery3}
                alt="Hands working on laptop"
                className="w-auto h-full object-cover rounded-2xl"
              />
            </div>

            {/* Middle Row */}
            <div className="col-span-12 md:col-span-7 mt-5">
              <img
                src={Images.About.AboutGallery4}
                alt="Students studying in cafe"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>

            <div className="col-span-12 md:col-span-5 md:row-span-2 mt-5">
              <img
                src={Images.About.AboutGallery5}
                alt="Student in graduation cap"
                className="w-full max-h-[700px] h-full object-cover rounded-2xl"
              />
            </div>

            {/* Bottom Row */}
            <div className="col-span-12 md:col-span-7">
              <img
                src={Images.About.AboutGallery4}
                alt="Students in office"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>

      </Container>

    </div>
  )
}

export default ImageGallerySection

