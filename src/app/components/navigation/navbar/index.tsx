import React, { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";

const Navbar = ({ toggle }: { toggle: () => void }) => {
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showResourcesDropdown, setShowResourcesDropdown] = useState(false);
  const [showTrainingDropdown, setShowTrainingDropdown] = useState(false);

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    setShowDropdown(false);
    setShowResourcesDropdown(false);
    setShowTrainingDropdown(false);
  };

  const handleMouseEnter = (setShowDropdown: React.Dispatch<React.SetStateAction<boolean>>) => {
    setShowDropdown(true);
  };

  const handleMouseLeave = (setShowDropdown: React.Dispatch<React.SetStateAction<boolean>>) => {
    setShowDropdown(false);
  };

  return (
    <>
      <div className="w-full h-20">
        <div className="container mx-auto px-8 h-full">
          <div className="flex justify-between justify-items-center items-center h-full">
            <Logo />
            <button
              type="button"
              className="inline-flex items-center md:hidden"
              onClick={toggle}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#fff"
                  d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
                />
              </svg>
            </button>
            <ul className="hidden md:flex gap-x-8 text-white text-[1.1rem]">
              <li>
                <Link href="/">
                  <p
                    className={
                      activeLink === "/" ? "text-[#19FFDB]" : "text-white"
                    }
                    onClick={() => handleLinkClick("/")}
                  >
                    Home
                  </p>
                </Link>
              </li>
              <li
                className="relative"
                onMouseEnter={() => handleMouseEnter(setShowDropdown)}
                onMouseLeave={() => handleMouseLeave(setShowDropdown)}
              >
                <p
                  className={`cursor-pointer ${
                    showDropdown ? "text-[#19FFD8]" : ""
                  }`}
                >
                  Services
                </p>
                {showDropdown && (
                  <ul className="absolute top-full w-[13rem] pl-4 left-0 opacity-95 bg-gray-800 text-white py-2 rounded">
                    <li className="mb-2">
                      <Link href="/services/cloud-penetration-testing">
                        <p
                          className="hover:text-[#19FFDB]"
                          onClick={() =>
                            handleLinkClick("/services/cloud-penetration-testing")
                          }
                        >
                          Cloud Penetration Testing
                        </p>
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link href="/services/web-penetration-testing">
                        <p
                          className="hover:text-[#19FFDB]"
                          onClick={() =>
                            handleLinkClick("/services/web-penetration-testing")
                          }
                        >
                          Web Penetration Testing
                        </p>
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link href="/services/api-penetration-testing">
                        <p
                          className="hover:text-[#19FFDB]"
                          onClick={() =>
                            handleLinkClick("/services/api-penetration-testing")
                          }
                        >
                          API Penetration Testing
                        </p>
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link href="/services/mobile-penetration-testing">
                        <p
                          className="hover:text-[#19FFDB]"
                          onClick={() =>
                            handleLinkClick("/services/mobile-penetration-testing")
                          }
                        >
                          Mobile Penetration Testing
                        </p>
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link href="/services/network-penetration-testing">
                        <p
                          className="hover:text-[#19FFDB]"
                          onClick={() =>
                            handleLinkClick("/services/network-penetration-testing")
                          }
                        >
                          Network Penetration Testing
                        </p>
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link href="/services/devsecops">
                        <p
                          className="hover:text-[#19FFDB]"
                          onClick={() =>
                            handleLinkClick("/services/devsecops")
                          }
                        >
                          DevSecOps
                        </p>
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link href="/services/ai-ml-penetration-testing">
                        <p
                          className="hover:text-[#19FFDB]"
                          onClick={() =>
                            handleLinkClick("/services/ai-ml-penetration-testing")
                          }
                        >
                          AI-ML Penetration Testing
                        </p>
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link href="/services/sast">
                        <p
                          className="hover:text-[#19FFDB]"
                          onClick={() =>
                            handleLinkClick("/services/sast")
                          }
                        >
                          SAST  
                        </p>
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link href="/services/dast">
                        <p
                          className="hover:text-[#19FFDB]"
                          onClick={() =>
                            handleLinkClick("/services/dast")
                          }
                        >
                          DAST
                        </p>
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li
                className="relative"
                onMouseEnter={() => handleMouseEnter(setShowResourcesDropdown)}
                onMouseLeave={() => handleMouseLeave(setShowResourcesDropdown)}
              >
                <p
                  className={`cursor-pointer ${
                    showResourcesDropdown ? "text-[#19FFD8]" : ""
                  }`}
                >
                  Resources
                </p>
                {showResourcesDropdown && (
                  <ul className="absolute top-full w-[13rem] pl-4 left-0 opacity-95 bg-gray-800 text-white py-2 rounded">
                    <li className="mb-2">
                      <Link href="/resources/casestudies">
                        <p
                          className="hover:text-[#19FFDB]"
                          onClick={() =>
                            handleLinkClick("/resources/casestudies")
                          }
                        >
                          Case Studies
                        </p>
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link href="/resources/report">
                        <p
                          className="hover:text-[#19FFDB]"
                          onClick={() =>
                            handleLinkClick("/resources/report")
                          }
                        >
                          Reports
                        </p>
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link href="/training">
                  <p
                    className={
                      activeLink === "/training" ? "text-[#19FFDB]" : "text-white"
                    }
                    onClick={() => handleLinkClick("/training")}
                  >
                    Training
                  </p>
                </Link>
              </li>
          {/*
              <li
                className="relative"
                onMouseEnter={() => handleMouseEnter(setShowTrainingDropdown)}
                onMouseLeave={() => handleMouseLeave(setShowTrainingDropdown)}
              >
                <p
                  className={`cursor-pointer ${
                    showTrainingDropdown ? "text-[#19FFD8]" : ""
                  }`}
                >
                  Training
                </p>
                {showTrainingDropdown && (
                  <ul className="absolute top-full w-[13rem] pl-4 left-0 opacity-95 bg-gray-800 text-white py-2 rounded">
                    <li className="mb-2">
                      <Link href="/training/corporate">
                        <p
                          className="hover:text-[#19FFDB]"
                          onClick={() =>
                            handleLinkClick("/training/corporate")
                          }
                        >
                          For Corporate Training
                        </p>
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link href="/training/students">
                        <p
                          className="hover:text-[#19FFDB]"
                          onClick={() =>
                            handleLinkClick("/training/students")
                          }
                        >
                          For Students Training
                        </p>
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            */}  
              <li>
                <Link href="/about">
                  <p
                    className={
                      activeLink === "/about" ? "text-[#19FFDB]" : "text-white"
                    }
                    onClick={() => handleLinkClick("/about")}
                  >
                    About Us
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <p
                    className={
                      activeLink === "/blog" ? "text-[#19FFDB]" : "text-white"
                    }
                    onClick={() => handleLinkClick("/blog")}
                  >
                    Blog
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/contactus">
                  <p
                    className={
                      activeLink === "/contactus" ? "text-[#19FFDB]" : "text-white"
                    }
                    onClick={() => handleLinkClick("/contactus")}
                  >
                    Contact Us
                  </p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
