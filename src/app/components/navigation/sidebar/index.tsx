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
  const [showTrainingDropdown, setShowTrainingDropdown] = useState(false);

  return (
    <>
      <div
        className={`sidebar-container fixed inset-0 bg-white z-10 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`} // Sidebar is hidden initially on mobile screens
      >
        <button className="absolute top-4 right-4 p-4" onClick={toggle}>
          {/* Close icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-current text-gray-600"
          >
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z" />
          </svg>
        </button>

        <ul className="sidebar-nav p-4 text-center text-lg">
          <li className="mb-4">
            <Link href="/" onClick={toggle}>
              <span className="text-gray-800 hover:text-gray-900">Home</span>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/about" onClick={toggle}>
              <span className="text-gray-800 hover:text-gray-900">About Us</span>
            </Link>
          </li>
          <li className="mb-4 relative">
            <button
              className="text-gray-800 hover:text-gray-900"
              onClick={() => {
                setShowServicesDropdown(!showServicesDropdown);
                setShowResourcesDropdown(false); // Close Resources dropdown if Services is clicked
              }}
            >
              Services
            </button>
            {showServicesDropdown && (
              <ul className="absolute left-0 w-full bg-gray-100 text-gray-800 py-2 rounded z-20 mt-2">
                {[
                  "Cloud Penetration Testing",
                  "Web Penetration Testing",
                  "API Penetration Testing",
                  "Mobile Penetration Testing",
                  "Network Penetration Testing",
                  "DevSecOps",
                  "AI-ML Penetration Testing",
                  "SAST",
                  "DAST",
                ].map((service, index) => (
                  <li key={index} className="px-4 py-2">
                    <Link
                      href={`/services/${service
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      onClick={toggle}
                    >
                      <span className="hover:text-[#19FFDB]">{service}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li className="mb-4 relative">
            <button
              className="text-gray-800 hover:text-gray-900"
              onClick={() => {
                setShowResourcesDropdown(!showResourcesDropdown);
                setShowServicesDropdown(false); // Close Services dropdown if Resources is clicked
              }}
            >
              Resources
            </button>
            {showResourcesDropdown && (
              <ul className="absolute left-0 w-full bg-gray-100 text-gray-800 py-2 rounded z-20 mt-2">
                <li className="px-4 py-2">
                  <Link href="/resources/casestudies" onClick={toggle}>
                    <span className="hover:text-[#19FFDB]">Case Studies</span>
                  </Link>
                </li>
                <li className="px-4 py-2">
                  <Link href="/resources/report" onClick={toggle}>
                    <span className="hover:text-[#19FFDB]">Sample Reports</span>
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li className="mb-4">
            <Link href="/training" onClick={toggle}>
              <span className="text-gray-800 hover:text-gray-900">Training</span>
            </Link>
          </li>
          {/*}
          <li className="mb-4 relative">
            <button
              className="text-gray-800 hover:text-gray-900"
              onClick={() => {
                setShowTrainingDropdown(!showTrainingDropdown);
                setShowServicesDropdown(false); // Close Services dropdown if Resources is clicked
              }}
            >
              Training
            </button>
            {showTrainingDropdown && (
              <ul className="absolute left-0 w-full bg-gray-100 text-gray-800 py-2 rounded z-20 mt-2">
                <li className="px-4 py-2">
                  <Link href="/training/corporate" onClick={toggle}>
                    <span className="hover:text-[#19FFDB]">For Corporate Training</span>
                  </Link>
                </li>
                <li className="px-4 py-2">
                  <Link href="/training/students" onClick={toggle}>
                    <span className="hover:text-[#19FFDB]">For Students Training</span>
                  </Link>
                </li>
              </ul>
            )}
          </li>
          */}
          <li className="mb-4">
            <Link href="/blog" onClick={toggle}>
              <span className="text-gray-800 hover:text-gray-900">Blog</span>
            </Link>
          </li>
          <li>
            <Link href="/contactus" onClick={toggle}>
              <span className="text-gray-800 hover:text-gray-900">Contact Us</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
