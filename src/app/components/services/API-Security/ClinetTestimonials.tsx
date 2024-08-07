import Image from "next/image";
import Star from "../../../../../public/icons/Star.png";

export default function ClinetTestimonials() {
  return (
    <div className="Testimonials">
      <span className="text-[#19FFDB] text-[1.37rem] font-medium mb-4">
        Testimonials
      </span>

      <h3 className="text-white text-[2.18rem] font-semibold mb-4">
        What Client Says About Us
      </h3>

      <div className="testimonial-cards">
        <div className="testimonial-card">
          <div className="flex gap-3">
            <Image width={40} height={40} src={Star} alt="start" />
            <Image width={40} height={40} src={Star} alt="start" />
            <Image width={40} height={40} src={Star} alt="start" />
            <Image width={40} height={40} src={Star} alt="start" />
            <Image width={40} height={40} src={Star} alt="start" />
          </div>

          <p className="text-[#A39D9D] text-[1.2rem] font-light mt-4">
            Cyserchs web services & API security solutions have been crucial for
            our organization digital infrastructure. Their expertise and
            proactive approach have helped us secure our APIs, ensuring the
            integrity of our data. Highly recommended!
          </p>
          <div className="flex items-center mt-4">
            <div className="testimonial-img"></div>
            <div className="testimonial-info">
              <h3 className="text-white text-[1.2rem] font-semibold">
                Priya Patel
              </h3>
              <span className="text-[#19FFDB] text-[0.9rem] font-medium">
                Chief Technology Officer
              </span>
            </div>
          </div>
        </div>

        <div className="testimonial-card">
          <div className="flex gap-3">
            <Image width={40} height={40} src={Star} alt="start" />
            <Image width={40} height={40} src={Star} alt="start" />
            <Image width={40} height={40} src={Star} alt="start" />
            <Image width={40} height={40} src={Star} alt="start" />
            <Image width={40} height={40} src={Star} alt="start" />
          </div>
          <p className="text-[#A39D9D] text-[1.2rem] font-light mt-4">
            Choosing Cyserch for our web services & API security needs was a
            wise decision. Their thorough assessments and comprehensive reports
            have enabled us to identify and address vulnerabilities effectively,
            strengthening our digital defenses.
          </p>
          <div className="flex items-center mt-4">
            <div className="testimonial-img"></div>
            <div className="testimonial-info">
              <h3 className="text-white text-[1.2rem] font-semibold">
                Rajesh Kumar
              </h3>
              <span className="text-[#19FFDB] text-[0.9rem] font-medium">
                IT Manager
              </span>
            </div>
          </div>
        </div>

        <div className="testimonial-card">
          <div className="flex gap-3">
            <Image width={40} height={40} src={Star} alt="start" />
            <Image width={40} height={40} src={Star} alt="start" />
            <Image width={40} height={40} src={Star} alt="start" />
            <Image width={40} height={40} src={Star} alt="start" />
            <Image width={40} height={40} src={Star} alt="start" />
          </div>
          <p className="text-[#A39D9D] text-[1.2rem] font-light mt-4">
            As an Indian company, data security is paramount for us. Cyserchs
            web services & API security services have provided us with peace of
            mind, knowing that our APIs are protected against cyber threats.
            Their dedication to security is commendable.
          </p>
          <div className="flex items-center mt-4">
            <div className="testimonial-img"></div>
            <div className="testimonial-info">
              <h3 className="text-white text-[1.2rem] font-semibold">
                Amit Sharma
              </h3>
              <span className="text-[#19FFDB] text-[0.9rem] font-medium">
                Director of Technology
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
