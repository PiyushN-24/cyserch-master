import Image from "next/image";
import Star from "../../../../../public/icons/Star.png";

export default function ClientTestimonials() {
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
            <Image width={40} height={40} src={Star} alt="star" />
            <Image width={40} height={40} src={Star} alt="star" />
            <Image width={40} height={40} src={Star} alt="star" />
            <Image width={40} height={40} src={Star} alt="star" />
            <Image width={40} height={40} src={Star} alt="star" />
          </div>

          <p className="text-[#A39D9D] text-[1.2rem] font-light mt-4">
            Implementing DevSecOps with Cyserch has revolutionized our approach to security. Their seamless integration of security practices throughout our development process has enhanced our overall security posture and allowed us to release software with confidence.
          </p>
          <div className="flex items-center mt-4">
            <div className="testimonial-img"></div>
            <div className="testimonial-info">
              <h3 className="text-white text-[1.2rem] font-semibold">
                Anita Patel
              </h3>
              <span className="text-[#19FFDB] text-[0.9rem] font-medium">
                Head of Development
              </span>
            </div>
          </div>
        </div>

        <div className="testimonial-card">
          <div className="flex gap-3">
            <Image width={40} height={40} src={Star} alt="star" />
            <Image width={40} height={40} src={Star} alt="star" />
            <Image width={40} height={40} src={Star} alt="star" />
            <Image width={40} height={40} src={Star} alt="star" />
            <Image width={40} height={40} src={Star} alt="star" />
          </div>
          <p className="text-[#A39D9D] text-[1.2rem] font-light mt-4">
            Cyserch DevSecOps expertise has been a game-changer for our organization. Their proactive security measures and continuous integration of security checks have greatly reduced vulnerabilities and improved our deployment cycles.
          </p>
          <div className="flex items-center mt-4">
            <div className="testimonial-img"></div>
            <div className="testimonial-info">
              <h3 className="text-white text-[1.2rem] font-semibold">
                Michael Nguyen
              </h3>
              <span className="text-[#19FFDB] text-[0.9rem] font-medium">
                DevOps Engineer
              </span>
            </div>
          </div>
        </div>

        <div className="testimonial-card">
          <div className="flex gap-3">
            <Image width={40} height={40} src={Star} alt="star" />
            <Image width={40} height={40} src={Star} alt="star" />
            <Image width={40} height={40} src={Star} alt="star" />
            <Image width={40} height={40} src={Star} alt="star" />
            <Image width={40} height={40} src={Star} alt="star" />
          </div>
          <p className="text-[#A39D9D] text-[1.2rem] font-light mt-4">
            Partnering with Cyserch for our DevSecOps needs has been highly beneficial. Their approach has not only fortified our security but also streamlined our development and operations processes, leading to more secure and efficient software releases.
          </p>
          <div className="flex items-center mt-4">
            <div className="testimonial-img"></div>
            <div className="testimonial-info">
              <h3 className="text-white text-[1.2rem] font-semibold">
                Priya Desai
              </h3>
              <span className="text-[#19FFDB] text-[0.9rem] font-medium">
                Product Manager
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
