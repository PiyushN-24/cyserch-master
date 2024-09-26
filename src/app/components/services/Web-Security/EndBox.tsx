import Link from "next/link";

export default function clientsCount() {
  return (
    <div className="text-center clintCount sm:mt-[0rem] md:mt[0rem]">
      <div className="Industrys-boxs bg-[#011C3C] gap-20 flex p-7 px-[8rem] rounded-xl items-center justify-center mt-10 fadeInUp">
        <div>
          <h2 className="text-white text-[2rem] font-semibold fadeInUp">
            Looking for comprehensive 
            <span className="text-[#19FFDB]"> web penetration testing</span> 
            to identify and eliminate vulnerabilities in your web applications?
          </h2>
        </div>
        <div>
          <Link href="/contactus">
            <button className="btn-2">Schedule a Consultation</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
