"use client"; // Ensures this is a Client Component

import { useEffect, useState } from "react";

export default function MobilePenetrationOverview() {
  const [tools, setTools] = useState<{ src: string; name: string }[]>([]);

  useEffect(() => {
    const mobilePenTestingTools: { src: string; name: string }[] = [
      { src: "/icons/KaliNethunter.png", name: "KaliNethunter" },
      { src: "/icons/Appium.png", name: "Appium" },
      { src: "/icons/GenyMotion.svg", name: "GenyMotion" },
      { src: "/icons/AndroidStudio.png", name: "Android Studio" },
      { src: "/icons/Xposed.svg", name: "Xposed Framework" },
      { src: "/icons/Zanti.svg", name: "Zanti" },
    ];
    setTools(mobilePenTestingTools);
  }, []);

  return (
    <div className="bg-gray-300 text-left px-4 sm:px-6 md:px-8 lg:px-[9rem] py-6 sm:py-8 md:py-10 max-h-[150vh] overflow-auto">
      {/* Heading for Tools */}
      <h2 className="text-lg sm:text-xl md:text-[1.8rem] font-semibold mt-6 flex flex-col items-center">
        <span className="text-black">Tools used in</span>
        <span className="text-teal-600">Mobile Penetration Testing</span>
      </h2>

      {/* Sliding animation for Mobile PenTesting tools */}
      <div className="overflow-hidden mt-6">
        <div className="animate-slide text-black flex space-x-8 md:space-x-12 lg:space-x-20">
          {tools.map((tool, index) => (
            <div key={index} className="flex flex-col items-center transform transition-transform duration-300 hover:scale-110">
              <img
                src={tool.src}
                alt={`Mobile Penetration Testing Tool ${index}`}
                className="w-32 h-32 object-contain mb-2 bg-gray-200 shadow-2xl rounded-md"
                style={{ width: '128px', height: '128px' }} // Fixed size for consistency
              />
              <span className="text-lg sm:text-xl md:text-2xl font-semibold">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Image and Information Section */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        {/* Image Section with Text Below */}
        <div className="w-full flex flex-col justify-start items-center space-y-6">
          <img
            src="/images/what_is_mobile_penetration.png" // Make sure this path is correct
            alt="Mobile Penetration Testing"
            className="w-full max-w-[500px] h-auto rounded-md object-cover" // Responsive width and automatic height
          />
          <p className="text-black text-base sm:text-lg md:text-[1.2rem] font-light mb-6">
            For more details on Mobile Penetration Testing and its significance, you can explore our comprehensive blog post on <a href="/blog/Common-Vulnerabilities-in-Mobile-:-An-In-Depth-Guide" target="_blank" className="text-blue-500 hover:underline">Common Vulnerabilities in Mobile: An in Depth Guide</a>.
          </p>
        </div>
        {/* Information Section */}
        <div className="w-full flex flex-col justify-start space-y-8 p-6 bg-gray-100 rounded-lg shadow-lg">
          <h2 className="text-black text-lg sm:text-xl md:text-[1.8rem] font-semibold mb-4 border-b-2 border-teal-600 pb-2">
            What is Mobile Penetration Testing?
          </h2>

          {/* Brief Answer */}
          <p className="text-black text-base sm:text-lg md:text-[1.2rem] font-light mb-6">
            Mobile Penetration Testing is a comprehensive assessment process to identify vulnerabilities in mobile applications. As mobile devices become increasingly popular for both personal and business use, ensuring the security of mobile applications is essential to protect sensitive data and prevent unauthorized access.
            <br />
            Mobile Penetration Testing typically involves:
            <ul className="list-disc list-inside ml-6">
              <li><strong>Application Security:</strong> Testing mobile apps for vulnerabilities such as insecure data storage, weak encryption, and improper authentication mechanisms.</li>
              <li><strong>Network Security:</strong> Assessing how mobile apps communicate with servers and testing for data leakage or weak encryption during transmission.</li>
              <li><strong>Device Security:</strong> Evaluating how mobile devices handle sensitive data and whether they are vulnerable to attacks such as jailbreaking or rooting.</li>
              <li><strong>Session Management:</strong> Ensuring secure session management practices, preventing attackers from hijacking user sessions.</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}
