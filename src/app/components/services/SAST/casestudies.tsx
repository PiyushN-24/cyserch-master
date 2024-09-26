'use client';

import Image from "next/image";
import Thumbnail from "../../../../../public/images/CS_1a.png";

export default function DownloadForm() {
  return (
    <>
      <div className="bg-[#011c3c] h-[10vh] px-4 sm:px-8 lg:px-16 flex flex-col justify-center items-center">
        <h1 className="text-2xl sm:text-4xl lg:text-5xl text-teal-400 font-medium text-center">
          Explore Our Case Studies
        </h1>
      </div>

      <div className="Industrys-boxs gap-6 flex flex-col md:flex-row p-5 md:p-7 md:px-[8rem] rounded-xl items-center justify-center mt-5 mx-4">
        <div className="w-full bg-[#011c3c] p-6 rounded-lg shadow-2xl flex flex-col md:flex-row">
          <div className="md:w-1/2 p-4 md:p-6 text-white flex flex-col justify-between items-center md:items-start">
            <p className="text-base md:text-lg mb-4 text-center md:text-left">
              Discover how Cyserch tackles diverse challenges across various industries. Our case studies offer an in-depth look at our approach to solving complex security issues, enhancing compliance, and optimizing performance. Each case study highlights our customized solutions, successful implementations, and the impactful results we have achieved. Whether addressing SaaS security, fintech resilience, or healthcare protection, our expert insights and strategic solutions are designed to meet the unique needs of our clients and drive lasting success.
            </p>
            <div className="mt-8 md:mt-4">
              <a href="/resources/casestudies" className="bg-[#0ABAB5] text-white text-lg font-medium py-2 px-4 rounded-lg hover:bg-[#07a59b] transition-transform transform hover:scale-105 duration-300">
                Download the Case Study Now!!
              </a>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center items-center mt-6 md:mt-0">
            <Image
              src={Thumbnail}
              width={550}
              height={350}
              alt="SaaS_Security"
              className="rounded-lg object-cover transform transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </>
  );
}
