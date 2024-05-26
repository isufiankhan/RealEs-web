import { TESTIMONIALS } from "@/constants"
import Image from "next/image"

const Testimonials = () => {
  return (
    <div className="container mx-auto my-20 border-b pb-10" id="Testimonials">
      <h2 className="mb-20 font-semibold text-center text-3xl tracking-tighter sm:text-4xl lg:text-5xl">
        What Our Clients Said
      </h2>
      <div className="flex flex-wrap">
        {TESTIMONIALS.map((testimonials, index) => (
          <div key={index} className="w-full md:w-1/2 p-2 lg:w-1/4">
            <div className="rounded-xl border p-4">
              <div className="flex flex-wrap">
                <Image
                  src={testimonials.image}
                  alt={testimonials.name}
                  width={80} height={80}
                  className="rounded-full object-cover mr-4 border-4 border-neutral-400" />
                <div>
                  <h4 className="w-full">
                    {testimonials.name}
                  </h4>
                  <span className="text-sm text-neutral-600">
                    {testimonials.instagram}
                  </span>
                </div>
              </div>
              <p className="p-4">
                {testimonials.feedback}
              </p>
              <p className="text-sm text-neutral-400">
                {testimonials.city_country}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials
