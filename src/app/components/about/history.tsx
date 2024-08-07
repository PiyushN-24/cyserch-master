import Image from "next/image";
import CodingBoy from "../../../../public/images/young-hacker.png";

export default function AboutHistory() {
  return (
    <div className="flex flex-col-reverse sm:flex-row mt-12">
      <div className="div-1">
        <Image src={CodingBoy} alt="hacker" layout="responsive" />
      </div>

      <div className="div-1 px-4 sm:px-[2rem] flex items-center justify-center fadeRight">
        <span className="text-[#19FFDB] text-[1.37rem] font-medium mb-4">
          HISTORY
        </span>
        <h3 className="text-white text-[2.18rem] font-semibold">
          Charting the Path to Digital Security Excellence
        </h3>
        <p className="text-[#A39D9D] text-[1.2rem] font-light mt-6">
          Founded in 2024, Cyserch began with a vision to excel in the
          burgeoning field of cybersecurity. Starting as a small, passionate
          team, we have evolved into a globally recognized leader in digital
          security. Our journey has been driven by a commitment to innovation,
          excellence, and a deep understanding of our clients needs. Throughout
          our history, we have expanded our services and expertise to
          effectively combat the most challenging cyber threats, establishing
          ourselves as a trusted protector in the cybersecurity realm. Today, we
          continue to advance, empower, and secure the digital assets of
          businesses around the world. Our legacy is marked by a relentless
          pursuit of security solutions that are not only effective but also
          ahead of their time.
        </p>
      </div>
    </div>
  );
}
