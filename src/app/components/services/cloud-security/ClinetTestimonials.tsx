import Image from "next/image";
import Star from "../../../../../public/icons/Star.png";

export default function ClientTestimonials() {
  return (
    <div className="flex flex-col px-[1rem] py-[3rem] sm:px-[9rem]">
      <span className="text-teal-400 text-[1.37rem] font-medium mb-4 block">
        Testimonials
      </span>

      <h3 className="text-white text-[1.6rem] md:text-[2.18rem] font-semibold mb-8">
        What Clients Say About Us
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col justify-start items-start w-full h-[18rem] rounded-[0.625rem] bg-[#011c3c] p-3">
          <div className="flex gap-3">
            {[...Array(5)].map((_, index) => (
              <Image key={index} width={40} height={40} src={Star} alt="star" />
            ))}
          </div>

          <p className="text-gray-400 text-sm md:text-base mt-4">
            Cyserchs cloud security solutions have been invaluable for our
            organization. Their expertise and proactive approach have helped us
            mitigate risks and ensure the safety of our data in the cloud.
            Highly recommended!
          </p>
          <div className="flex items-center mt-4">
            {/* <div className="testimonial-img w-10 h-10 bg-gray-400 rounded-full"></div> */}
            <div className="testimonial-info ml-3">
              <h3 className="text-white text-sm md:text-base font-semibold">
                Rajesh Patel
              </h3>
              <span className="text-teal-400 text-xs md:text-sm font-medium">
                Chief Information Officer
              </span>
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
            Choosing Cyserch for our cloud security needs was a game-changer.
            Their comprehensive solutions and dedicated support team have
            provided us with peace of mind, knowing our data is protected
            against evolving threats.
          </p>
          <div className="flex items-center mt-4">
            {/* <div className="testimonial-img w-10 h-10 bg-gray-400 rounded-full"></div> */}
            <div className="testimonial-info ml-3">
              <h3 className="text-white text-sm md:text-base font-semibold">
                Sarah Khan
              </h3>
              <span className="text-teal-400 text-xs md:text-sm font-medium">
                IT Manager
              </span>
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
            As an Indian company, data security is paramount for us. Cyserchs
            cloud security services have exceeded our expectations. Their
            attention to detail and proactive approach have made a significant
            difference in safeguarding our sensitive information.
          </p>
          <div className="flex items-center mt-4">
            {/* <div className="testimonial-img w-10 h-10 bg-gray-400 rounded-full"></div> */}
            <div className="testimonial-info ml-3">
              <h3 className="text-white text-sm md:text-base font-semibold">
                Amit Gupta
              </h3>
              <span className="text-teal-400 text-xs md:text-sm font-medium">
                Chief Technology Officer
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
