import Link from "next/link";

export default function clientsCount() {
  return (
    <div className="text-center sm:mt-[0rem] md:mt[0rem]">
      <div className="Industrys-boxs bg-[#011C3C] gap-20 flex p-7 px-[8rem] rounded-xl items-center justify-center mt-10 fadeInUp">
        <div>
          <h1 className="text-white text-[2rem] font-semibold fadeInUp">
            Have you put the correct
            <span className="text-[#19FFDB]"> security measures</span> into
            practice?
          </h1>
        </div>
        <div>
          <Link href="/contactus">
            <button className="btn-2">Schedule a call</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
