import Image from "next/image";
import Star from "../../../../../public/icons/Star.png";

export default function DASTClientTestimonials() {
  return (
    <div className="Testimonials">
      <span className="text-[#19FFDB] text-[1.37rem] font-medium mb-4">
        Testimonials
      </span>

      <h3 className="text-white text-[2.18rem] font-semibold mb-4">
        What Clients Say About Our DAST Services
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
            Cyserchs DAST services have been a game-changer for our security
            posture. Their in-depth analysis of our applications has helped us
            address vulnerabilities in real-time, ensuring our platforms remain
            secure against evolving threats.
          </p>
          <div className="flex items-center mt-4">
            <div className="testimonial-img"></div>
            <div className="testimonial-info">
              <h3 className="text-white text-[1.2rem] font-semibold">
                Priya Mehta
              </h3>
              <span className="text-[#19FFDB] text-[0.9rem] font-medium">
                Senior Security Engineer
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
            The DAST services from Cyserch were exactly what we needed. Their
            expert team identified critical vulnerabilities that we were
            previously unaware of, allowing us to quickly address them and
            improve our security.
          </p>
          <div className="flex items-center mt-4">
            <div className="testimonial-img"></div>
            <div className="testimonial-info">
              <h3 className="text-white text-[1.2rem] font-semibold">
                Michael Rodriguez
              </h3>
              <span className="text-[#19FFDB] text-[0.9rem] font-medium">
                Head of IT Security
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
            As a technology-driven company, we rely heavily on Cyserchs DAST
            services to keep our applications secure. Their thorough testing and
            proactive recommendations have made a significant difference in our
            security strategy.
          </p>
          <div className="flex items-center mt-4">
            <div className="testimonial-img"></div>
            <div className="testimonial-info">
              <h3 className="text-white text-[1.2rem] font-semibold">
                Ayesha Khan
              </h3>
              <span className="text-[#19FFDB] text-[0.9rem] font-medium">
                Chief Information Officer
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
