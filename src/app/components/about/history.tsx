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
        Cyserch was founded in 2012 with a clear and ambitious vision: to excel in the rapidly growing field of cybersecurity. What began as a small, passionate team of security enthusiasts has evolved into a globally recognized leader in digital security. Our journey has been shaped by a steadfast commitment to innovation, excellence, and a profound understanding of the unique needs of our clients.
        </p>
        <p className="text-[#A39D9D] text-[1.2rem] font-light mt-6">
        From the very beginning, we understood that the cybersecurity landscape is in a constant state of flux. Cyber threats are evolving at an unprecedented pace, and businesses need more than just reactive measures; they need proactive strategies that anticipate and mitigate risks before they become critical issues. This understanding has driven us to expand our services and expertise continuously, ensuring that we remain at the cutting edge of digital security.
        </p>
      </div>
    </div>
  );
}
