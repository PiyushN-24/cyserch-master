import Link from "next/link";

export default function clientsCount() {
  return (
    <div className="text-center clintCount sm:mt-[0rem] md:mt-[0rem]">
      <div className="Industrys-boxs bg-[#011C3C] gap-2 sm:gap-20 flex flex-col sm:flex-row p-4 sm:p-7 px-4 sm:px-[8rem] rounded-xl items-center justify-center mt-10 fadeInUp">
        <div className="mb-4 sm:mb-0">
          <h2 className="text-white text-[1.5rem] sm:text-[2rem] font-semibold fadeInUp">
            Schedule a free consultation to identify and fix
            <span className="text-[#19FFDB]"> Cloud Penetration Testing</span> vulnerabilities with Cyserch experts.
          </h2>
        </div>
        <div>
          <Link href="/contactus">
            <button className="btn-2">Schedule a Call</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
