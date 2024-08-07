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
            Cyserch web application security solutions have been instrumental in
            protecting our online platforms. Their expertise and proactive
            approach have helped us identify and address vulnerabilities,
            ensuring the safety of our data and user information.
          </p>
          <div className="flex items-center mt-4">
            <div className="testimonial-img"></div>
            <div className="testimonial-info">
              <h3 className="text-white text-[1.2rem] font-semibold">
                Arun Sharma
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
            Choosing Cyserch for our web application security needs was a wise
            decision. Their thorough assessments and detailed reports have
            enabled us to strengthen our defenses and build trust with our
            customers. Highly recommended!
          </p>
          <div className="flex items-center mt-4">
            <div className="testimonial-img"></div>
            <div className="testimonial-info">
              <h3 className="text-white text-[1.2rem] font-semibold">
                Emily Jones
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
            As an Indian company, data security is of utmost importance to us.
            Cyserchs web application security services have exceeded our
            expectations. Their professionalism and attention to detail have
            provided us with peace of mind, knowing that our online platforms
            are protected against cyber threats.
          </p>
          <div className="flex items-center mt-4">
            <div className="testimonial-img"></div>
            <div className="testimonial-info">
              <h3 className="text-white text-[1.2rem] font-semibold">
                Rahul Gupta
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
