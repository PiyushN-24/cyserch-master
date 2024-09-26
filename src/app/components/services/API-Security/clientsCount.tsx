'use client'

import { useState, useEffect, useRef } from "react";

export default function APIPenetrationTesting() {
  const [apisSecured, setApisSecured] = useState(0);
  const [vulnerabilities, setVulnerabilities] = useState(0);
  const [projects, setProjects] = useState(0);
  const [partnerships, setPartnerships] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false); // To track if the animation has been triggered
  const sectionRef = useRef<HTMLDivElement>(null);

  // Define the types for the parameters
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
        animateCount(setApisSecured, 200, 50); // Count up to 200+
        animateCount(setVulnerabilities, 400, 30); // Count up to 400+
        animateCount(setProjects, 100, 40); // Count up to 100+
        animateCount(setPartnerships, 30, 60); // Count up to 30+
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
    <div
      ref={sectionRef}
      className="text-center clintCount sm:mt-[0rem] md:mt-[0rem] mb-12"
    >
      <div className="Industrys-boxs bg-[#011C3C] gap-20 flex container p-7 px-[8rem] rounded-xl items-center justify-center mt-10 fadeInUp">
        <h2 className="text-white text-[2rem] font-semibold fadeInUp">
        Trusted by <span className="text-[#19FFDB]">1500+</span> Organizations for API Penetration Testing
        </h2>

        <div className="Industrys-card w-[10rem] flex flex-col justify-center items-center">
          <span className="text-[white] text-[2rem] font-bold">
          {apisSecured}+
          </span>
          <span className="text-[#D9D9D9] text-[1rem] font-light">
          APIs Secured
          </span>
        </div>

        <div className="Industrys-card w-[10rem] flex flex-col justify-center items-center">
          <span className="text-[white] text-[2rem] font-bold">
            {vulnerabilities}+
          </span>
          <span className="text-[#D9D9D9] text-[1rem] font-light">
          API Vulnerabilities Discovered
          </span>
        </div>

        <div className="Industrys-card w-[10rem] flex flex-col justify-center items-center">
          <span className="text-[white] text-[2rem] font-bold">{projects}+</span>
          <span className="text-[#D9D9D9] text-[1rem] font-light">
            Penetration Testing Projects Delivered
          </span>
        </div>

        <div className="Industrys-card w-[10rem] flex flex-col justify-center items-center">
          <span className="text-[white] text-[2rem] font-bold">
          {partnerships}+
          </span>
          <span className="text-[#D9D9D9] text-[1rem] font-light">
          API Security Technology Partnerships
          </span>
        </div>
      </div>
    </div>
  );
}
