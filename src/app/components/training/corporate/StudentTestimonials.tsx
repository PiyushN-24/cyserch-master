import Image from "next/image";
import Star from "../../../../../public/icons/Star.png";

export default function StudentTestimonials() {
  return (
    <div className="Testimonials">
      <span className="text-[#19FFDB] text-[1.37rem] font-medium mb-4">
        Testimonials
      </span>

      <h3 className="text-white text-[2.18rem] font-semibold mb-4">
        What Student Says About Us
      </h3>

      <div className="testimonial-cards">
        <div className="student-testimonial-card">
          <div className="flex gap-3">
            <Image width={40} height={40} src={Star} alt="start" />
            <Image width={40} height={40} src={Star} alt="start" />
            <Image width={40} height={40} src={Star} alt="start" />
            <Image width={40} height={40} src={Star} alt="start" />
            <Image width={40} height={40} src={Star} alt="start" />
          </div>

          <p className="text-[#A39D9D] text-[1.2rem] font-light mt-4">
          The corporate training we received was exceptional. The tailored approach addressed our specific needs and the interactive sessions kept our team engaged. We saw immediate improvements in our security protocols thanks to the practical insights.
          </p>
          <div className="flex items-center mt-4">
            <div className="testimonial-img"></div>
            <div className="testimonial-info">
              <h3 className="text-white text-[1.2rem] font-semibold">
              Sarah Lee
              </h3>
            </div>
          </div>
        </div>

        <div className="student-testimonial-card">
          <div className="flex gap-3">
            <Image width={40} height={40} src={Star} alt="start" />
            <Image width={40} height={40} src={Star} alt="start" />
            <Image width={40} height={40} src={Star} alt="start" />
            <Image width={40} height={40} src={Star} alt="start" />
            <Image width={40} height={40} src={Star} alt="start" />
          </div>
          <p className="text-[#A39D9D] text-[1.2rem] font-light mt-4">
          The training sessions were insightful and highly relevant to our industry. The expertise of the trainers and the comprehensive content made a significant difference in our teams performance. We highly recommend these services.
          </p>
          <div className="flex items-center mt-4">
            <div className="testimonial-img"></div>
            <div className="testimonial-info">
              <h3 className="text-white text-[1.2rem] font-semibold">
              David Kim
              </h3>
            </div>
          </div>
        </div>

        <div className="student-testimonial-card">
          <div className="flex gap-3">
            <Image width={40} height={40} src={Star} alt="start" />
            <Image width={40} height={40} src={Star} alt="start" />
            <Image width={40} height={40} src={Star} alt="start" />
            <Image width={40} height={40} src={Star} alt="start" />
            <Image width={40} height={40} src={Star} alt="start" />
          </div>
          <p className="text-[#A39D9D] text-[1.2rem] font-light mt-4">
          The corporate training provided by the team was top-notch. The knowledge shared was practical and actionable, which helped us improve our overall security posture. The feedback from our employees has been overwhelmingly positive.
          </p>
          <div className="flex items-center mt-4">
            <div className="testimonial-img"></div>
            <div className="testimonial-info">
              <h3 className="text-white text-[1.2rem] font-semibold">
              Jessica Chen
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
