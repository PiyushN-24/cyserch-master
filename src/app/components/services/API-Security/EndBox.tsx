import Link from "next/link";

export default function ClientsCount() {
  return (
    <div className="text-center sm:mt-[0rem] md:mt-[0rem]">
      <div className="Industrys-boxs bg-[#011C3C] gap-20 flex p-7 px-[8rem] rounded-xl items-center justify-center mt-10 fadeInUp">
        <div>
          <h2 className="text-white text-[2rem] font-semibold fadeInUp">
            Enhance Your API <span className="text-[#19FFDB]">Security</span> with Expert Penetration Testing
          </h2>
          <p className="text-[#a39d9d] text-lg font-light leading-normal mt-3">
            Leverage our advanced API penetration testing services to uncover vulnerabilities, strengthen defenses, and ensure robust security for your APIs.
          </p>
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
