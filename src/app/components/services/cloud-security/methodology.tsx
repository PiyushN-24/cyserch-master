import Image from "next/image";
import cloudImage from "../../../../../public/images/cloud_pentest_lifecycle.png"; // Adjust path as needed

export default function CloudTestingPage() {
  return (
    <div className="bg-gray-300 flex flex-col md:flex-row items-center justify-between w-full px-6 md:px-12 lg:px-36 py-12 mt-16 sm:mt-0">
      <div className="w-full md:w-2/5 flex items-center rounded-lg justify-center mt-12 md:mt-0 h-full md:mr-12"> {/* Added margin-right */}
        <Image
          src={cloudImage}
          alt="Cloud Penetration Testing Methodology Image"
          className="rounded-lg object-cover w-auto h-auto max-w-full max-h-[500px]" // Ensures image size adjusts automatically while limiting its height
        />
      </div>
      <div className="w-full md:w-3/5 fadeRight md:ml-6"> {/* Added margin-left */}
        <span className="text-teal-500 text-lg md:text-xl font-medium">
          HOW IT WORKS?
        </span>
        <h3 className="text-black text-2xl md:text-4xl font-semibold mt-2 md:mt-4">
          Cloud Penetration Testing Methodology
        </h3>
        <p className="text-black text-base md:text-lg font-light mt-6">
          Our Cloud Penetration Testing methodology helps organizations identify and address vulnerabilities within their cloud environments. This comprehensive testing process includes an evaluation of cloud infrastructure, configurations, and services to ensure robust security against potential threats.
        </p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:pr-12">
          {[
            { title: "Cloud Configuration Review", description: "Evaluate the security posture of your cloud configurations and policies." },
            { title: "Identity & Access Management", description: "Assess access controls to ensure that only authorized users can access critical resources." },
            { title: "Data Protection", description: "Verify the security measures protecting your data at rest, in transit, and in use." },
            { title: "Network Security", description: "Analyze your cloud network architecture for vulnerabilities in communication channels." },
            { title: "API Security Testing", description: "Test your cloud APIs for potential weaknesses that attackers could exploit." },
            { title: "Storage Vulnerability Assessment", description: "Evaluate the security of cloud storage solutions, ensuring that data is not exposed." },
            { title: "Compliance Audits", description: "Ensure that your cloud infrastructure complies with relevant industry standards and regulations." },
            { title: "Remediation Testing", description: "Re-test your cloud environment to ensure that vulnerabilities have been effectively mitigated." }
          ].map((item, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg text-gray-200 hover:bg-cyan-500 transition-colors duration-300 lg:col-span-2">
              <h4 className="text-xl md:text-2xl font-semibold text-white mb-2">{item.title}:</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
