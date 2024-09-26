'use client'

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Protection from "../../../../public/icons/Management.png";
import CyberSecurity from "../../../../public/icons/Cyber Security.png";
import Code from "../../../../public/icons/Code.png";
import SourceCode from "../../../../public/icons/Source Code.png";
import Website from "../../../../public/icons/Website.png";
import HIPS from "../../../../public/icons/HIPS.png";

export default function Industrys() {
  const [clientsProtection, setClientsProtection] = useState(0);
  const [pentestsDone, setPentestsDone] = useState(0);
  const [sastReview, setSastReview] = useState(0);
  const [dastReview, setDastReview] = useState(0);
  const [iamReview, setIamReview] = useState(0);
  const [manualSourceCodeReview, setManualSourceCodeReview] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false); // To track if the animation has been triggered
  const sectionRef = useRef<HTMLDivElement>(null);

  const animateCount = (setter: (value: number) => void, endValue: number, delay: number): void => {
    let current = 0;
    const step = Math.ceil(endValue / 100); // Number of increments
    const interval = setInterval(() => {
      current += step;
      if (current >= endValue) {
        current = endValue;
        clearInterval(interval);
      }
      setter(current);
    }, delay);
  };

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting && !hasAnimated) {
        setHasAnimated(true); // Ensure the animation runs only once
        animateCount(setClientsProtection, 50, 40); // Animate Clients Protection to 50+
        animateCount(setPentestsDone, 500, 30); // Animate Pentests Done to 500+
        animateCount(setSastReview, 300, 35); // Animate SAST Review to 300+
        animateCount(setDastReview, 400, 35); // Animate DAST Review to 400+
        animateCount(setIamReview, 200, 50); // Animate IAM Review to 200+
        animateCount(setManualSourceCodeReview, 100, 60); // Animate Manual Source Code Review to 100+
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.3, // Trigger when 30% of the section is visible
    });

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, [hasAnimated]);

  return (
    <div ref={sectionRef} className="text-center mt-10 Industrys">
      <h2 className="text-white text-[2.10rem] font-semibold fadeInUp2">
        Trusted Across More Than <span className="text-[#19FFDB]">10 </span>
        Industries Worldwide
      </h2>
      <div className="Industrys-boxs bg-[#011C3C] gap-20 flex container p-7 rounded-xl items-center justify-center mt-10 fadeInUp2">
        
        <div className="Industrys-card w-[10rem] flex flex-col justify-center items-center">
          <Image width={60} height={60} src={Protection} alt="industry1" />
          <span className="text-[white] text-[2rem] font-bold ">{clientsProtection}+</span>
          <span className="text-[#D9D9D9] text-[1rem] font-light">
            Clients Protection
          </span>
        </div>

        <div className="Industrys-card w-[10rem] flex flex-col justify-center items-center">
          <Image width={60} height={60} src={CyberSecurity} alt="industry2" />
          <span className="text-[white] text-[2rem] font-bold ">{pentestsDone}+</span>
          <span className="text-[#D9D9D9] text-[1rem] font-light">
            Pentests Done
          </span>
        </div>

        <div className="Industrys-card w-[10rem] flex flex-col justify-center items-center">
          <Image width={60} height={60} src={Code} alt="industry3" />
          <span className="text-[white] text-[2rem] font-bold ">{sastReview}+</span>
          <span className="text-[#D9D9D9] text-[1rem] font-light">
            SAST Review
          </span>
        </div>

        <div className="Industrys-card w-[10rem] flex flex-col justify-center items-center">
          <Image width={60} height={60} src={Website} alt="industry4" />
          <span className="text-[white] text-[2rem] font-bold ">{dastReview}+</span>
          <span className="text-[#D9D9D9] text-[1rem] font-light">
            DAST Review
          </span>
        </div>

        <div className="Industrys-card w-[10rem] flex flex-col justify-center items-center">
          <Image width={60} height={60} src={HIPS} alt="industry5" />
          <span className="text-[white] text-[2rem] font-bold ">{iamReview}+</span>
          <span className="text-[#D9D9D9] text-[1rem] font-light">
            IAM Review
          </span>
        </div>

        <div className="Industrys-card w-[10rem] flex flex-col justify-center items-center">
          <Image width={60} height={60} src={SourceCode} alt="industry6" />
          <span className="text-[white] text-[2rem] font-bold ">{manualSourceCodeReview}+</span>
          <span className="text-[#D9D9D9] text-[1rem] font-light">
            Manual Source Code Review
          </span>
        </div>

      </div>
    </div>
  );
}
