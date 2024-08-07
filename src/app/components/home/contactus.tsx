import Link from "next/link";

export default function contactus() {
  return (
    <div
      id="contacts"
      className="text-center clintCount sm:mt-[0rem] md:mt-[0rem]"
    >
      <div className="Industrys-boxs bg-[#011C3C] gap-2 sm:gap-20 flex flex-col sm:flex-row p-4 sm:p-7 px-4 sm:px-[8rem] rounded-xl items-center justify-center mt-10 fadeInUp">
        <div className="mb-4 sm:mb-0">
          <h2 className="text-white text-[1.5rem] sm:text-[2rem] font-semibold fadeInUp">
            Address your 
            <span className="text-[#19FFDB]"> security risks</span> with
            Cyserch. Book a Schedule your complimentary consultation today.
          </h2>
        </div>
        <div>
          <Link href="/contactus">
            <button className="btn-2">Schedule a call</button>
          </Link>
          {/* <span className="text-white text-[1.5rem] sm:text-[1rem]">
            OR Email us at
          </span>
          <h2 className="text-white text-[1.5rem] sm:text-[1.3rem] font-semibold fadeInUp">
            cyserch@gmail.com
          </h2> */}
        </div>
      </div>
    </div>
  );
}
