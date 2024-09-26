'use client'

import React from "react";
import Image from "next/image";
import Link from "next/link";
import corporateTrainingImage from "../../../../../public/images/corporateTrainingImage.png"; // Replace with a relevant image
import studentTrainingImage from "../../../../../public/images/studentTrainingImage.png"; // Replace with a relevant image

export const metadata = {
  title: "Cyserch | Cybersecurity Training & Courses for Businesses and Students",
  description:
    "Explore Cyserch's expert cybersecurity training and courses for students and businesses. Develop real-world skills or empower your team with corporate training programs.",
};

const TrainingPage = () => {
  return (
    <div className="training-page container mx-auto py-12 px-4">
      <h2 className="text-center text-teal-400 text-[2.5rem] font-bold mb-8">
        Choose Your Training Path
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Corporate Training Section */}
        <div className="corporate-training bg-gray-100 p-6 rounded-lg shadow-lg">
          <Image
            src={corporateTrainingImage}
            alt="Corporate Training"
            className="rounded-lg"
            layout="responsive"
            width={500}
            height={300}
          />
          <h3 className="text-gray-900 text-[1.8rem] font-semibold mt-6">
            Corporate Cybersecurity Training
          </h3>
          <p className="text-gray-700 text-[1.2rem] mt-4">
            Empower your team with our tailored cybersecurity training programs designed to meet your organizations specific needs. Equip your employees with the skills to identify threats, respond to incidents, and stay compliant with industry regulations.
          </p>
          <ul className="text-gray-700 text-[1.1rem] mt-4 list-disc pl-5">
            <li>Customizable training solutions for diverse business needs</li>
            <li>Led by industry experts with hands-on experience</li>
            <li>Options for on-site or virtual training</li>
          </ul>
          <Link
            href="/training/corporate"
            className="mt-6 inline-block bg-teal-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-teal-600 transition duration-300"
          >
            Explore Corporate Training
          </Link>
        </div>

        {/* Student Training Section */}
        <div className="student-training bg-gray-100 p-6 rounded-lg shadow-lg">
          <Image
            src={studentTrainingImage}
            alt="Student Training"
            className="rounded-lg"
            layout="responsive"
            width={500}
            height={300}
          />
          <br/> <br/>
          <h3 className="text-gray-900 text-[1.8rem] font-semibold mt-6">
            Student Cybersecurity Training
          </h3>
          <p className="text-gray-700 text-[1.2rem] mt-4">
            Dive into the dynamic world of cybersecurity with our specialized training programs for students. Gain invaluable practical skills and industry-recognized certifications that will set you apart in the job market and pave the way for a successful and rewarding career in cybersecurity.
          </p>
          <ul className="text-gray-700 text-[1.1rem] mt-4 list-disc pl-5">
            <li>Hands-on, practical training with real-world applications</li>
            <li>Flexible scheduling options to fit student lifestyles</li>
            <li>Industry-recognized certifications to enhance your resume</li>
          </ul>
          <Link
            href="/training/students"
            className="mt-6 inline-block bg-teal-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-teal-600 transition duration-300"
          >
            Explore Student Training
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TrainingPage;
