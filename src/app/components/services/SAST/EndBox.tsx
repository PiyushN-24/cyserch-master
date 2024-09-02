import Link from "next/link";

export default function ClientsCount() {
  return (
    <div className="text-center clients-count sm:mt-0 md:mt-0">
      <div className="industry-boxes bg-[#011C3C] gap-20 flex flex-col sm:flex-row p-7 px-[8rem] rounded-xl items-center justify-center mt-10 fadeInUp">
        <div className="text-center sm:text-left">
          <h2 className="text-white text-[2rem] font-semibold fadeInUp">
            Searching for the
            <span className="text-[#19FFDB]"> optimal security</span> strategy
            to safeguard your information?
          </h2>
        </div>
        <div className="mt-4 sm:mt-0">
          <Link href="/contactus">
            <button className="btn-2">Schedule a call</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
