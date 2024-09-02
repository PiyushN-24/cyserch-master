import Link from "next/link";

export default function ClientsCount() {
  return (
    <div className="text-center sm:mt-0 md:mt-0">
      <div className="Industrys-boxs bg-[#011C3C] gap-20 flex p-7 px-[8rem] rounded-xl items-center justify-center mt-10 fadeInUp">
        <div className="flex items-center">
          <h2 className="text-white text-[2rem] font-semibold fadeInUp">
            Seeking the <span className="text-[#19FFDB]"> Perfect Security</span> Solution to Protect Your Data?
          </h2>
        </div>
        <div className="flex items-center">
          <Link href="/contactus">
            <button className="btn-2">Schedule a call</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
