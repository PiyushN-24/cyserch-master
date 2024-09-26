import { FaNetworkWired, FaLock, FaExclamationTriangle, FaShieldAlt } from 'react-icons/fa';

export default function WhyNetworkPenetrationTesting() {
  return (
    <div className="px-4 sm:px-[9rem] py-4 sm:py-[3rem]">
      <h2 className="text-white text-[2.18rem] font-semibold mt-3 mb-[-5rem] sm:mb-[1rem]">
        Key Areas of Network Security Focus
      </h2>
      <p className="text-[#A39D9D] text-[1.2rem] font-light mt-24 sm:mt-2 sm:mb-[0rem]">
        Network Penetration Testing is crucial for identifying vulnerabilities within network infrastructures. As networks become more complex, it is essential to evaluate their security to protect against threats such as unauthorized access, data breaches, and misconfigurations. This testing helps secure critical network resources and maintain robust security posture.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 p-4 sm:p-[3rem]">
        <div className="flex flex-col items-center justify-start w-full sm:w-96 h-70 rounded-lg bg-[#011c3c] px-4 pt-4">
          <div className="flex gap-3 items-center">
            <FaNetworkWired className="w-12 h-12 text-white" />
          </div>
          <h3 className="text-white text-[1.1rem] font-semibold mt-3">
            Network Scanning
          </h3>
          <p className="text-[#a39d9d] text-lg font-light leading-normal mt-3 mb-2">
            Identify active devices, services, and open ports to map out the network topology and assess potential vulnerabilities.
          </p>
        </div>

        <div className="flex flex-col items-center justify-start w-full sm:w-96 h-70 rounded-lg bg-[#011c3c] p-4">
          <div className="flex gap-3 items-center">
            <FaLock className="w-12 h-12 text-white" />
          </div>
          <h3 className="text-white text-[1.1rem] font-semibold mt-3">
            Access Control
          </h3>
          <p className="text-[#a39d9d] text-lg font-light leading-normal mt-3 mb-2">
            Ensure proper access controls are in place to prevent unauthorized access and privilege escalation within the network.
          </p>
        </div>

        <div className="flex flex-col items-center justify-start w-full sm:w-96 h-70 rounded-lg bg-[#011c3c] p-4">
          <div className="flex gap-3 items-center">
            <FaExclamationTriangle className="w-12 h-12 text-white" />
          </div>
          <h3 className="text-white text-[1.1rem] font-semibold mt-3">
            Vulnerability Assessment
          </h3>
          <p className="text-[#a39d9d] text-lg font-light leading-normal mt-3 mb-2">
            Assess vulnerabilities within network services and configurations to identify and address potential security weaknesses.
          </p>
        </div>

        <div className="flex flex-col items-center justify-start w-full sm:w-96 h-70 rounded-lg bg-[#011c3c] p-4">
          <div className="flex gap-3 items-center">
            <FaShieldAlt className="w-12 h-12 text-white" />
          </div>
          <h3 className="text-white text-[1.1rem] font-semibold mt-3">
            Security Policies
          </h3>
          <p className="text-[#a39d9d] text-lg font-light leading-normal mt-3 mb-2">
            Evaluate and enforce security policies to ensure consistent protection and compliance across the network.
          </p>
        </div>
      </div>
    </div>
  );
}
