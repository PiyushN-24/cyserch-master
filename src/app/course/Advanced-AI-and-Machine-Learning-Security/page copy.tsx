import React from "react";
import Image from "next/image";
import Card1 from "../../../../public/images/card1.png";

export default function CoursePage() {
  return (
    <div className="px-8 sm:px-16 md:px-24 lg:px-32 xl:px-48 py-4">
      <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
        Course Title 1
      </h2>
      <div className="mb-4 w-full">
        <Image
          src={Card1}
          alt="Random Image"
          className="rounded-lg w-full h-64 sm:h-80 md:h-96 lg:h-128 object-cover"
        />
        <p className="mb-4 text-[#A39D9D] text-center text-sm sm:text-base md:text-lg font-light mt-2">
          image name
        </p>
      </div>
      <p className="mb-4 text-white text-sm sm:text-base md:text-lg font-light mt-2">
        A Certified Ethical Hacker is a specialist typically working in a red
        team environment, focused on attacking computer systems and gaining
        access to networks, applications, databases, and other critical data on
        secured systems. A C|EH® understands attack strategies, the use of
        creative attack vectors, and mimics the skills and creativity of
        malicious hackers. Unlike malicious hackers and actors, Certified
        Ethical Hackers operate with permission from the system owners and take
        all precautions to ensure the outcomes remain confidential. Bug bounty
        researchers are expert ethical hackers who use their attack skills to
        uncover vulnerabilities in the systems.
      </p>

      <div className="mb-4 text-white text-sm sm:text-base md:text-lg font-light mt-2">
        <ul className="text-white text-[1.5rem] font-bold mt-5">
          Module 01: Introduction to Ethical Hacking
          <li className="text-white text-[1.2rem] mt-3">
            Overview of Ethical Hacking
          </li>
          <li className="text-white text-[1.2rem] mt-3">
            Information Security Controls
          </li>
          <li className="text-white text-[1.2rem] mt-3">
            Legal and Regulatory Framework
          </li>
          <li className="text-white text-[1.2rem] mt-3">
            Ethical Hacking Procedures
          </li>
          <li className="text-white text-[1.2rem] mt-3">
            Scope and Limitations of Ethical Hacking
          </li>
        </ul>
        <ul className="text-white text-[1.5rem] font-bold mt-5">
          Module 02: Foot Printing and Reconnaissance
          <li className="text-white text-[1.2rem] mt-3">
            Foot Printing Techniques
          </li>
          <li className="text-white text-[1.2rem] mt-3">
            Passive Reconnaissance
          </li>
          <li className="text-white text-[1.2rem] mt-3">
            Active Reconnaissance
          </li>
          <li className="text-white text-[1.2rem] mt-3">
            Social Engineering in Reconnaissance
          </li>
          <li className="text-white text-[1.2rem] mt-3">
            Tools for Foot Printing and Reconnaissance
          </li>
        </ul>
        <ul>
          Module 03: Scanning Networks Network Scanning Fundamentals Port
          Scanning Techniques Host Discovery Methods Vulnerability Scanning
          Countermeasures against Network Scanning
        </ul>
        Module 04: Enumeration Enumeration Concepts and Objectives Service
        Enumeration Techniques User Enumeration Techniques SNMP Enumeration
        Countermeasures against Enumeration Attacks Module 05: Vulnerability
        Analysis Vulnerability Assessment Process Types of Vulnerability
        Assessments Vulnerability Assessment Tools Network Vulnerability
        Analysis End System Vulnerability Analysis Module 06: System Hacking
        System Hacking Methodologies Steganography and Steganalysis Covering
        Tracks Privilege Escalation Techniques Rootkit Detection and Removal
        Module 07: Malware Threats Types of Malware Advanced Persistent Threats
        (APTs) Fileless Malware Malware Analysis Techniques Malware
        Countermeasures Module 08: Sniffing Packet-Sniffing Fundamentals Passive
        and Active Sniffing ARP Spoofing DNS Spoofing Sniffing Detection and
        Prevention Module 09: Social Engineering Social Engineering Psychology
        Types of Social Engineering Attacks Phishing Attacks Impersonation
        Attacks Social Engineering Mitigation Strategies Module 10:
        Denial-of-Service DoS and DDoS Attack Fundamentals DoS Attack Techniques
        DDoS Attack Techniques Botnets and Botnet-based DDoS Attacks DoS
        Protection Mechanisms
      </div>
    </div>
  );
}
