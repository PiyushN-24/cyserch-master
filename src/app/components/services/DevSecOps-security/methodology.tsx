import Image from "next/image";
import devops from "../../../../../public/images/DevOps_Lifecycle.png";

export default function Methodology() {
  return (
    <div className="bg-gray-300 flex flex-col md:flex-row items-center justify-between w-full px-6 md:px-12 lg:px-36 py-12 mt-16 sm:mt-0">
      <div className="w-full md:w-3/5 fadeRight md:ml-6"> {/* Added margin-left */}
        <span className="text-teal-500 text-lg md:text-xl font-medium">
          HOW IT WORKS?
        </span>
        <h3 className="text-black text-2xl md:text-4xl font-semibold mt-2 md:mt-4">
          Methodology
        </h3>
        <p className="text-black text-base md:text-lg font-light mt-6">
          We use a comprehensive DevSecOps methodology combined with industry best practices to embed security throughout the development lifecycle. Our approach ensures that security is not an afterthought but an integral part of your development process.
        </p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:pr-12">
        {[
          { title: "Plan", description: "Define security requirements and integrate them into the planning phase of the project." },
          { title: "Code", description: "Implement secure coding practices and tools to ensure the quality of the codebase." },
          { title: "Build", description: "Integrate security checks and scans into the build process to catch vulnerabilities early." },
          { title: "Test", description: "Conduct security testing to identify and address potential vulnerabilities." },
          { title: "Release", description: "Ensure secure release practices, including code reviews and vulnerability assessments." },
          { title: "Deploy", description: "Implement secure deployment strategies and monitor for any potential security issues." },
          { title: "Operate", description: "Manage and operate security controls and configurations to maintain a secure environment." },
          { title: "Monitor", description: "Continuously monitor the system for security threats and vulnerabilities." }
        ].map((item, index) => (
          <div key={index} className="bg-gray-900 p-6 rounded-lg text-gray-200 hover:bg-cyan-500 transition-colors duration-300 lg:col-span-2">
            <h4 className="text-xl md:text-2xl font-semibold text-white mb-2">{item.title}:</h4>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      </div>

      <div className="w-full md:w-2/5 flex items-center bg-gray-200 rounded-lg justify-center mt-12 md:mt-0 h-full">
        <Image
          src={devops} 
          width={800} 
          height={600} 
          alt="devsecops image" 
          className="rounded-lg object-cover" 
          style={{ maxHeight: '500px' }} // optional: restrict the maximum height of the image
        />
      </div>
    </div>
  );
}
