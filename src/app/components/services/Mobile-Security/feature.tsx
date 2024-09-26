import { FaMobileAlt, FaKey, FaShieldAlt, FaUserShield } from 'react-icons/fa';

export default function WhyMobilePenetrationTesting() {
  return (
    <div className="px-4 sm:px-[9rem] py-4 sm:py-[3rem]">
      <h2 className="text-white text-[2.18rem] font-semibold mt-3 mb-[-5rem] sm:mb-[1rem]">
        Key Areas of Mobile Security Focus
      </h2>
      <p className="text-[#A39D9D] text-[1.2rem] font-light mt-24 sm:mt-2 sm:mb-[0rem]">
        Mobile Penetration Testing is essential for identifying vulnerabilities in mobile applications. With increasing reliance on mobile apps, it’s critical to assess their security against threats such as data leakage, insecure storage, and improper authentication mechanisms. Mobile testing helps to secure sensitive information and protect the application against malicious attacks.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 p-4 sm:p-[3rem]">
        <div className="flex flex-col items-center justify-start w-full sm:w-96 h-70 rounded-lg bg-[#011c3c] px-4 pt-4">
          <div className="flex gap-3 items-center">
            <FaMobileAlt className="w-12 h-12 text-white" />
          </div>
          <h3 className="text-white text-[1.1rem] font-semibold mt-3">
            Device Security
          </h3>
          <p className="text-[#a39d9d] text-lg font-light leading-normal mt-3 mb-2">
            Assess the security of mobile devices, ensuring they are protected from data leakage and unauthorized access.
          </p>
        </div>

        <div className="flex flex-col items-center justify-start w-full sm:w-96 h-70 rounded-lg bg-[#011c3c] p-4">
          <div className="flex gap-3 items-center">
            <FaKey className="w-12 h-12 text-white" />
          </div>
          <h3 className="text-white text-[1.1rem] font-semibold mt-3">
            Authentication
          </h3>
          <p className="text-[#a39d9d] text-lg font-light leading-normal mt-3 mb-2">
            Ensure robust authentication mechanisms to prevent unauthorized access to sensitive data.
          </p>
        </div>

        <div className="flex flex-col items-center justify-start w-full sm:w-96 h-70 rounded-lg bg-[#011c3c] p-4">
          <div className="flex gap-3 items-center">
            <FaShieldAlt className="w-12 h-12 text-white" />
          </div>
          <h3 className="text-white text-[1.1rem] font-semibold mt-3">
            Data Encryption
          </h3>
          <p className="text-[#a39d9d] text-lg font-light leading-normal mt-3 mb-2">
            Verify encryption of sensitive data at rest and in transit to protect against data breaches.
          </p>
        </div>

        <div className="flex flex-col items-center justify-start w-full sm:w-96 h-70 rounded-lg bg-[#011c3c] p-4">
          <div className="flex gap-3 items-center">
            <FaUserShield className="w-12 h-12 text-white" />
          </div>
          <h3 className="text-white text-[1.1rem] font-semibold mt-3">
            Permissions
          </h3>
          <p className="text-[#a39d9d] text-lg font-light leading-normal mt-3 mb-2">
            Evaluate app permissions to ensure they are not overly permissive and only grant necessary access.
          </p>
        </div>
      </div>
    </div>
  );
}
