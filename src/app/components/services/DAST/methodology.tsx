import Image from "next/image";
import hacker from "../../../../../public/images/what-is-cyber-security.jpg";

export default function DASTMethodology() {
  return (
    <div className="bg-[#011c3c] flex flex-col md:flex-row items-start justify-start w-full px-6 md:px-12 lg:px-36 py-12 mt-16 sm:mt-0">
      <div className="div-1 fadeLeft w-full md:w-3/5">
        <span className="text-teal-400 text-lg md:text-xl font-medium">
          HOW IT WORKS
        </span>
        <h3 className="text-white text-2xl md:text-4xl font-semibold mt-2 md:mt-4">
          DAST Methodology
        </h3>
        <p className="text-gray-400 text-base md:text-lg font-light mt-6">
          Our Dynamic Application Security Testing (DAST) methodology combines various techniques to simulate real-world attacks on running applications. We focus on identifying vulnerabilities from an external perspective, utilizing automated tools and manual techniques to provide a comprehensive security assessment. This approach ensures that your applications are thoroughly tested for potential weaknesses.
        </p>
        <ul className="mt-6">
          <li className="flex items-center text-gray-400 text-base md:text-lg font-light">
            1. Reconnaissance
          </li>
          <li className="flex items-center text-gray-400 text-base md:text-lg font-light">
            2. Scanning and Analysis
          </li>
          <li className="flex items-center text-gray-400 text-base md:text-lg font-light">
            3. Vulnerability Identification
          </li>
          <li className="flex items-center text-gray-400 text-base md:text-lg font-light">
            4. Manual Testing
          </li>
          <li className="flex items-center text-gray-400 text-base md:text-lg font-light">
            5. Reporting and Recommendations
          </li>
        </ul>
        {/* <button className="btn-2 mt-8 md:mt-12 px-8 py-3 rounded-lg bg-teal-400 text-gray-900 text-lg md:text-xl font-semibold transition duration-300 ease-in-out hover:bg-transparent hover:text-teal-400 hover:border-2 hover:border-teal-400">
          Schedule a call
        </button> */}
      </div>

      <div className="w-full md:w-2/5 flex items-center justify-center fadeRight mt-12 md:mt-12">
        <Image
          src={hacker}
          alt="hacker"
          className="rounded-lg object-contain"
        />
      </div>
    </div>
  );
}
