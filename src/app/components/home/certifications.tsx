import Image from "next/image";
import OSCP from "../../../../public/icons/OSCP.png";
import OSWE from "../../../../public/icons/OSWE.png";
import CISSP from "../../../../public/icons/CISSP.png";

export default function Certifications() {
  return (
    <div className="Certifications">
      <div className="w-1/2 Certifications-div1 fadeLeft2">
        <h2 className="text-white text-[1.65rem] font-semibold">
          Advanced Cybersecurity Certifications: Enhance Your Security Expertise
        </h2>
        <p className="text-[#D9D9D9] text-[1rem] font-light mt-4">
          With prestigious certifications such as OSCP, OSWE, and CISSP, I bring
          a high level of expertise and provide dependable solutions to meet
          your security needs.
        </p>
      </div>
      <div className="w-1/2 flex Certifications-div2 fadeRight2">
        <Image
          className="certifications-img"
          width={170}
          height={170}
          src={OSCP}
          alt="OSCP"
        />
        <Image
          className="certifications-img"
          width={170}
          height={170}
          src={OSWE}
          alt="OSW"
        />
        <Image
          className="certifications-img"
          width={170}
          height={170}
          src={CISSP}
          alt="CISSP"
        />
      </div>
    </div>
  );
}
