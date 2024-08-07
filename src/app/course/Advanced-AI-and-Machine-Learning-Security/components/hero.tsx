import React from "react";
import Image from "next/image";
import Link from "next/link";
import Card1 from "../../../../../public/images/card1.png";

export default function CourseHero() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between py-8 ">
      <div className="flex flex-col justify-center w-full sm:w-1/2 px-4 sm:px-16 lg:px-28">
        <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight">
        Advanced AI and Machine Learning Security
        </h1>
        <p className="text-gray-300 text-lg sm:text-xl mt-4 font-light leading-relaxed">
        Delve deep into the intricate world of securing AI and machine learning systems in the Advanced AI and Machine Learning Security course. Covering a spectrum of topics from adversarial attacks to privacy preservation, this course equips you with the knowledge and skills to safeguard AI systems effectively.</p>
 
        <Link href="/#contacts">
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
