import Link from "next/link";

export default function DASTSection() {
  return (
    <div className="text-center dastSection sm:mt-[0rem] md:mt-[0rem]">
      <div className="Industrys-boxs bg-[#011C3C] gap-20 flex p-7 px-[8rem] rounded-xl items-center justify-center mt-10 fadeInUp">
        <div>
          <h2 className="text-white text-[2rem] font-semibold fadeInUp">
            Interested in 
            <span className="text-[#19FFDB]"> DAST services</span> to protect your web applications?
          </h2>
          <p className="text-[#a39d9d] text-lg font-light leading-normal mt-3">
            Ensure your applications are secure against the latest threats with our comprehensive 
            Dynamic Application Security Testing services.
          </p>
        </div>
        <div>
          <Link href="/contactus">
            <button className="btn-2">Learn More</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
