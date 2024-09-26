import Link from "next/link";

export default function MobilePenTesting() {
  return (
    <div className="text-center sm:mt-[0rem] md:mt[0rem]">
      <div className="Industrys-boxs bg-[#011C3C] gap-20 flex p-7 px-[8rem] rounded-xl items-center justify-center mt-10 fadeInUp">
        <div>
          <h2 className="text-white text-[2rem] font-semibold fadeInUp">
            Is your <span className="text-[#19FFDB]">mobile application</span> truly secure?
          </h2>
          <span className="text-gray-400">
            Ensure your mobile app is fortified against emerging threats. Comprehensive mobile penetration testing identifies critical vulnerabilities before they can be exploited.
          </span>
        </div>
        <div>
          <Link href="/contactus">
            <button className="btn-2">Book a Security Assessment</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
