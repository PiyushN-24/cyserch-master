import Image from "next/image";
import Star from "../../../../../public/icons/Star.png";

export default function SASTTestimonials() {
  return (
    <div className="flex flex-col px-[1rem] py-[3rem] sm:px-[9rem]">
      <span className="text-teal-400 text-[1.37rem] font-medium mb-4 block">
        Testimonials
      </span>

      <h3 className="text-white text-[1.6rem] md:text-[2.18rem] font-semibold mb-8">
        What Clients Say About Our SAST Services
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col justify-start items-start w-full h-[18rem] rounded-[0.625rem] bg-[#011c3c] p-3">
          <div className="flex gap-3">
            {[...Array(5)].map((_, index) => (
              <Image key={index} width={40} height={40} src={Star} alt="star" />
            ))}
          </div>

          <p className="text-gray-400 text-sm md:text-base mt-4">
            Cyserch’s SAST services have significantly improved our application security. Their thorough code analysis and detailed reports allowed us to address vulnerabilities early and enhance the overall robustness of our software.
          </p>
          <div className="flex items-center mt-4">
            {/* <div className="testimonial-img w-10 h-10 bg-gray-400 rounded-full"></div> */}
            <div className="testimonial-info ml-3">
              <h3 className="text-white text-sm md:text-base font-semibold">
                Rajeev Mehta
              </h3>
              <span className="text-teal-400 text-xs md:text-sm font-medium">
                Head of Development
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
            The SAST solutions provided by Cyserch have been instrumental in improving our code quality. Their expertise in detecting and addressing potential vulnerabilities has given us the confidence to deploy our applications securely.
          </p>
          <div className="flex items-center mt-4">
            {/* <div className="testimonial-img w-10 h-10 bg-gray-400 rounded-full"></div> */}
            <div className="testimonial-info ml-3">
              <h3 className="text-white text-sm md:text-base font-semibold">
                Priya Patel
              </h3>
              <span className="text-teal-400 text-xs md:text-sm font-medium">
                Security Analyst
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
            Our collaboration with Cyserch for SAST services has been highly successful. Their proactive approach and detailed vulnerability assessments have greatly contributed to securing our software against potential threats.
          </p>
          <div className="flex items-center mt-4">
            {/* <div className="testimonial-img w-10 h-10 bg-gray-400 rounded-full"></div> */}
            <div className="testimonial-info ml-3">
              <h3 className="text-white text-sm md:text-base font-semibold">
                Ankur Sharma
              </h3>
              <span className="text-teal-400 text-xs md:text-sm font-medium">
                CTO
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
