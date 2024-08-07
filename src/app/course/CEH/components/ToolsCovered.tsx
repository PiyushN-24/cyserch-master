import React from "react";
import Image from "next/image";
import Kali from "../../../../../public/icons/kali-linux.png";
import PentestTools from "../../../../../public/icons/Pentest-Tools.png";
import BurpSuite from "../../../../../public/icons/Burp-Suite.png";
import Hping from "../../../../../public/icons/hping.svg";
import GoogleDork from "../../../../../public/icons/Google-Dork.png";
import Nmap from "../../../../../public/icons/nmap.png";
import Wireshark from "../../../../../public/icons/wireshark.png";
import Tcpdump from "../../../../../public/icons/tcpdump-logo.jpg";
import MXToolbox from "../../../../../public/icons/MX-Toolbox.png";

const tools = [
  { name: "Kali Linux", imageUrl: Kali },
  { name: "Pentest Tools", imageUrl: PentestTools },
  { name: "Burp Suite", imageUrl: BurpSuite },
  { name: "Hping", imageUrl: Hping },
  { name: "Google Dork", imageUrl: GoogleDork },
  { name: "Nmap", imageUrl: Nmap },
  { name: "Wireshark", imageUrl: Wireshark },
  { name: "Tcpdump", imageUrl: Tcpdump },
  { name: "MX Toolbox", imageUrl: MXToolbox },
];
export default function ToolsCovered() {
  return (
    <div className="bg-[#011C3C] py-[3rem] px-4 sm:px-[7rem]">
      <h2 className="text-[1.7rem] text-white font-semibold mb-8">Tools Covered</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {tools.map((tool) => (
          <div key={tool.name} className="flex flex-col items-center text-center">
            <div className="w-24 h-24 flex items-center justify-center">
              <Image
                src={tool.imageUrl}
                alt={tool.name}
                width={80} 
                height={80} 
                objectFit="contain"
              />
            </div>
            <span className="text-sm text-white">{tool.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}