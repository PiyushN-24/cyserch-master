import Image from "next/image";
import Star from "../../../../public/icons/Star.png";

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
            Choosing Cyserch was a game-changer for our organization. Their
            tailored cloud security solutions brought our data protection
            standards to a new level. The team’s responsiveness and expertise
            made all the difference. Highly recommend their services!
          </p>
          <div className="flex items-center mt-4">
            <div className="testimonial-img"></div>
            <div className="testimonial-info">
              <h3 className="text-white text-[1.2rem] font-semibold">
                James Carter,
              </h3>
              <span className="text-[#19FFDB] text-[0.9rem] font-medium">
                Chief Information Officer
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
            {/* <Image width={40} height={40} src={Star} alt="start" /> */}
          </div>
          <p className="text-[#A39D9D] text-[1.2rem] font-light mt-4">
            As a small business owner, I was concerned about the complexity of
            cybersecurity. Cyserch made it simple and affordable. Their team
            provided exceptional support, ensuring our systems are safe without
            breaking the bank. Truly a partner you can trust!
          </p>
          <div className="flex items-center mt-4">
            <div className="testimonial-img"></div>
            <div className="testimonial-info">
              <h3 className="text-white text-[1.2rem] font-semibold">
                Maria Rodriguez,
              </h3>
              <span className="text-[#19FFDB] text-[0.9rem] font-medium">
                Founder & CEO
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
            Cyserch’s comprehensive approach to mobile and network security has
            fortified our digital assets against the latest threats. Their
            thorough risk assessments and proactive defenses have provided us
            with peace of mind. We couldn’t be happier with their performance
            and results!
          </p>
          <div className="flex items-center mt-4">
            <div className="testimonial-img"></div>
            <div className="testimonial-info">
              <h3 className="text-white text-[1.2rem] font-semibold">
              Ethan Taylor,
              </h3>
              <span className="text-[#19FFDB] text-[0.9rem] font-medium">
              Director of IT Security
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
