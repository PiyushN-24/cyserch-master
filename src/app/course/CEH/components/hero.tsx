import React from "react";
import Image from "next/image";
import Link from "next/link";
import Card1 from "../../../../../public/images/card1.png";

export default function CourseHero() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between py-8 ">
      <div className="flex flex-col justify-center w-full sm:w-1/2 px-4 sm:px-16 lg:px-28">
        <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight">
        Elevate Your Career: Certified Ethical Hacker
        </h1>
        <p className="text-gray-300 text-lg sm:text-xl mt-4 font-light leading-relaxed">
        Accelerate your journey to becoming a cybersecurity expert with our exclusive program developed in collaboration with industry-leading cybersecurity leaders. Over the duration of this intensive course, you will delve deep into advanced offensive cybersecurity strategies aimed at fortifying networks and shielding critical data from ever-evolving threats including breaches, theft, attacks, and beyond.
        </p>
        <Link href="/contactus">
          <button className="btn-2">Apply Now</button>
        </Link>
      </div>

      <div className="flex w-full sm:w-1/2 mt-4 sm:mt-0">
        <Image
          src={Card1}
          className="w-full object-cover rounded-lg shadow-lg"
          alt="Cybersecurity Red Team"
          width={500} // Set the desired width or keep it responsive
          height={300} // Set the desired height or adjust according to aspect ratio
          layout="responsive" // This makes the image scale nicely
        />
      </div>
    </div>
  );
}
