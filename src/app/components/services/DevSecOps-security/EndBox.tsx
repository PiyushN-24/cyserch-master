import Link from "next/link";

export default function ClientsCount() {
  return (
    <div className="text-center mt-5 md:mt-0">
      <div className="Industrys-boxs bg-[#011C3C] flex flex-col md:flex-row gap-6 md:gap-20 p-5 md:p-7 md:px-[8rem] rounded-xl items-center justify-center mx-4 md:mx-0 mt-10 fadeInUp">
        <div className="flex items-center text-center md:text-left">
          <h2 className="text-white text-[1.5rem] md:text-[2rem] font-semibold fadeInUp leading-snug">
            Looking for <span className="text-[#19FFDB]">DevSecOps Penetration Testing</span> to Secure Your Software Pipeline?
          </h2>
        </div>
        <div className="flex items-center">
          <Link href="/contactus">
            <button className="btn-2 py-2 px-4 md:py-3 md:px-6 text-sm md:text-base">
              Book a Consultation
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
