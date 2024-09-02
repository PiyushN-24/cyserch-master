import Image from "next/image";
import Link from "next/link";
import Heroimg from "../../../../../public/images/DAST.png";

export default function DASTHero() {
  return (
    <div className="div-boxs">
      <div className="div-box1 pr-4 fadeLeft">
        <h1 className="title">Dynamic Application Security Testing (DAST)</h1>
        <p className="text-[#A39D9D] text-base sm:text-lg md:text-[1.2rem] font-light mt-4">
          Uncover vulnerabilities in your applications by simulating real-world attacks to enhance security and safeguard your business data.
        </p>
        <Link href="/contactus">
          <button className="btn-2">Contact Us</button>
        </Link>

        {/* <p className="description2">Secured by the team with expertise in DAST methodologies</p> */}
      </div>
      <div className="div-box2 fadeRight">
        <Image 
          alt="DAST security" 
          src={Heroimg} 
          width={700}  // Adjust width as needed
          height={300} // Adjust height as needed
          className="rounded-lg" />
      </div>
    </div>
  );
}
