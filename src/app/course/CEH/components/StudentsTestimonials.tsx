import Image from "next/image";
import Star from "../../../../../public/icons/Star.png";

export default function ClientTestimonials() {
  return (
    <div className="flex flex-col px-[1rem] py-[3rem] sm:px-[9rem]">
      <span className="text-teal-400 text-[1.37rem] font-medium mb-4 block">
        Testimonials
      </span>

      <h3 className="text-white text-[1.6rem] md:text-[2.18rem] font-semibold mb-8">
        What Students Say About Us
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col justify-start items-start w-full h-[18rem] rounded-[0.625rem] bg-[#011c3c] p-3">
          <div className="flex gap-3">
            {[...Array(5)].map((_, index) => (
              <Image key={index} width={40} height={40} src={Star} alt="star" />
            ))}
          </div>

          <p className="text-gray-400 text-sm md:text-base mt-4">
            This course exceeded all my expectations. The personalized attention
            from the Exclusive Coach made complex topics accessible and
            engaging. I feel much more confident in my ability to manage and
            prevent cyber threats. this is best course for cybersecurity.
          </p>
          <div className="flex items-center mt-4">
            {/* <div className="testimonial-img w-10 h-10 bg-gray-400 rounded-full"></div> */}
            <div className="testimonial-info ml-3">
              <h3 className="text-white text-sm md:text-base font-semibold">
                Rajesh Patel
              </h3>
              {/* <span className="text-teal-400 text-xs md:text-sm font-medium">
                Chief Information Officer
              </span> */}
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-start items-start w-full h-[18rem] rounded-[0.625rem] bg-[#011c3c] p-3">
          <div className="flex gap-3">
            {[...Array(5)].map((_, index) => (
              <Image key={index} width={40} height={40} src={Star} alt="star" />
            ))}
          </div>

          <p className="text-gray-400 text-sm md:text-base mt-4">
            The Creative Minds sessions on data privacy were enlightening. I now
            understand the importance of robust security protocols and
            compliance. Thanks to this course, Im better equipped to safeguard
            sensitive information in my organization.
          </p>
          <div className="flex items-center mt-4">
            {/* <div className="testimonial-img w-10 h-10 bg-gray-400 rounded-full"></div> */}
            <div className="testimonial-info ml-3">
              <h3 className="text-white text-sm md:text-base font-semibold">
                Sarah Khan
              </h3>
              {/* <span className="text-teal-400 text-xs md:text-sm font-medium">
                IT Manager
              </span> */}
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-start items-start w-full h-[18rem] rounded-[0.625rem] bg-[#011c3c] p-3">
          <div className="flex gap-3">
            {[...Array(5)].map((_, index) => (
              <Image key={index} width={40} height={40} src={Star} alt="star" />
            ))}
          </div>

          <p className="text-gray-400 text-sm md:text-base mt-4">
            The video tutorials were a game-changer for me. The detailed
            content, presented by certified experts, was easy to follow yet
            highly informative. I highly recommend this course to anyone looking
            to enhance their cybersecurity skills.
          </p>
          <div className="flex items-center mt-4">
            {/* <div className="testimonial-img w-10 h-10 bg-gray-400 rounded-full"></div> */}
            <div className="testimonial-info ml-3">
              <h3 className="text-white text-sm md:text-base font-semibold">
                Amit Gupta
              </h3>
              {/* <span className="text-teal-400 text-xs md:text-sm font-medium">
                Chief Technology Officer
              </span> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
