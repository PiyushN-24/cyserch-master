import React, { useState } from "react";
import Link from "next/link";

const Sidebar = ({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}): JSX.Element => {
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showResourcesDropdown, setShowResourcesDropdown] = useState(false);

  const handleMouseEnter = (setShowDropdown: React.Dispatch<React.SetStateAction<boolean>>) => {
    setShowDropdown(true);
  };

  const handleMouseLeave = (setShowDropdown: React.Dispatch<React.SetStateAction<boolean>>) => {
    setShowDropdown(false);
  };

  return (
    <>
      <div
        className="sidebar-container fixed w-full h-full overflow-hidden justify-center bg-white grid pt-12 left-0 z-10"
        style={{
          opacity: isOpen ? 1 : 0,
          top: isOpen ? 0 : "-100%",
        }}
      >
        <button className="absolute top-0 right-0 p-5" onClick={toggle}>
          {/* Close icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-current text-gray-600"
          >
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z"/>
          </svg>
        </button>

        <ul className="sidebar-nav text-center leading-relaxed text-lg">
          <li className="mb-4">
            <Link href="/" onClick={toggle}>
              <span className="text-gray-800 hover:text-gray-900 cursor-pointer">Home</span>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/about" onClick={toggle}>
              <span className="text-gray-800 hover:text-gray-900 cursor-pointer">About Us</span>
            </Link>
          </li>
          <li className="mb-4 relative">
            <span
              className="text-gray-800 hover:text-gray-900 cursor-pointer"
              onClick={() => {
                setShowServicesDropdown(!showServicesDropdown);
                setShowResourcesDropdown(false); // Close Resources dropdown if Services is clicked
              }}
            >
              Services
            </span>
            {showServicesDropdown && (
              <ul className="absolute left-0 w-[25rem] bg-gray-100 text-gray-800 py-2 rounded z-100">
                <li className="px-4 py-2">
                  <Link href="/services/cloud-security" onClick={toggle}>
                    <span className="hover:text-[#19FFDB] cursor-pointer">
                      Cloud Penetration Testing
                    </span>
                  </Link>
                </li>
                <li className="px-4 py-2">
                  <Link href="/services/web-security" onClick={toggle}>
                    <span className="hover:text-[#19FFDB] cursor-pointer">
                      Web Penetration Testing
                    </span>
                  </Link>
                </li>
                <li className="px-4 py-2">
                  <Link href="/services/api-security" onClick={toggle}>
                    <span className="hover:text-[#19FFDB] cursor-pointer">
                      API Penetration Testing
                    </span>
                  </Link>
                </li>
                <li className="px-4 py-2">
                  <Link href="/services/mobile-security" onClick={toggle}>
                    <span className="hover:text-[#19FFDB] cursor-pointer">
                      Mobile Penetration Testing
                    </span>
                  </Link>
                </li>
                <li className="px-4 py-2">
                  <Link href="/services/network-security" onClick={toggle}>
                    <span className="hover:text-[#19FFDB] cursor-pointer">
                      Network Penetration Testing
                    </span>
                  </Link>
                </li>
                <li className="px-4 py-2">
                  <Link href="/services/devsecops-security" onClick={toggle}>
                    <span className="hover:text-[#19FFDB] cursor-pointer">
                      DevSecOps Penetration Testing
                    </span>
                  </Link>
                </li>
                <li className="px-4 py-2">
                  <Link href="/services/ai-ml-security" onClick={toggle}>
                    <span className="hover:text-[#19FFDB] cursor-pointer">
                      AI-ML Penetration Testing
                    </span>
                  </Link>
                </li>
                <li className="px-4 py-2">
                  <Link href="/services/sast" onClick={toggle}>
                    <span className="hover:text-[#19FFDB] cursor-pointer">
                      SAST
                    </span>
                  </Link>
                </li>
                <li className="px-4 py-2">
                  <Link href="/services/dast" onClick={toggle}>
                    <span className="hover:text-[#19FFDB] cursor-pointer">
                      DAST
                    </span>
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li className="mb-4 relative">
            <span
              className="text-gray-800 hover:text-gray-900 cursor-pointer"
              onClick={() => {
                setShowResourcesDropdown(!showResourcesDropdown);
                setShowServicesDropdown(false); // Close Services dropdown if Resources is clicked
              }}
            >
              Resources
            </span>
            {showResourcesDropdown && (
              <ul className="absolute left-0 w-[25rem] bg-gray-100 text-gray-800 py-2 rounded z-100">
                <li className="px-4 py-2">
                  <Link href="/resources/casestudies" onClick={toggle}>
                    <span className="hover:text-[#19FFDB] cursor-pointer">
                      Case Studies
                    </span>
                  </Link>
                </li>
                <li className="px-4 py-2">
                  <Link href="/resources/report" onClick={toggle}>
                    <span className="hover:text-[#19FFDB] cursor-pointer">
                      Sample Reports
                    </span>
                  </Link>
                </li>
              </ul>
            )}
          </li>


          <li className="mb-4">
            <Link href="/training" onClick={toggle}>
              <span className="text-gray-800 hover:text-gray-900 cursor-pointer">Training</span>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/blog" onClick={toggle}>
              <span className="text-gray-800 hover:text-gray-900 cursor-pointer">Blog</span>
            </Link>
          </li>
          <li>
            <Link href="/contactus" onClick={toggle}>
              <span className="text-gray-800 hover:text-gray-900 cursor-pointer">Contact Us</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
