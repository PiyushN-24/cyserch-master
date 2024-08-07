import Image from "next/image";
import cirtificateImg from "../../../../../public/images/web-pentest.png";


export default function Certificate() {
  return (
    <div className="bg-[#011C3C] px-4 sm:px-[7rem] py-[3rem]">
      <h2 className="text-white text-[1.7rem] font-semibold">
        Certification
      </h2>
      <p className="text-[#A39D9D] text-[1.1rem] py-[1rem]">
      Gain industry-recognized  certification with us and showcase your expertise to potential employers.
      </p>

      <div className="flex flex-col sm:flex-row py-2">
        <div className="flex justify-center items-center w-full max-h-[30rem] sm:w-1/2">
          <Image src={cirtificateImg} className="h-full w-auto object-center" alt="img" />
        </div>
        <div className="w-full sm:w-1/2 flex flex-col pl-0 sm:pl-8 mt-4 sm:mt-0">
          <h2 className="text-white text-[1.7rem] mt-10 font-semibold">
            {/* Collaborating With IIT Kanpur: */}
          </h2>
          <div className="py-[0.4rem] gap-4 sm:gap-14 flex flex-col sm:flex-row fadeInUp">
            <ul className="h-auto w-full sm:w-[30rem]">
              <li className="text-[#A39D9D] text-[1.1rem] py-[1rem]">
                ✓ Achieve EC-Council certification through our industry-recognized cybersecurity course.

              </li>
              <li className="text-[#A39D9D] text-[1.1rem] py-[1rem]">
                ✓ Elevate your credentials with EC-Council certification and stand out in the cybersecurity field.
              </li>
              <li className="text-[#A39D9D] text-[1.1rem] py-[1rem]">
                ✓ Join us to earn EC-Council certification and open doors to rewarding cybersecurity opportunities
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}