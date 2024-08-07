import React from "react";
import Image from "next/image";

const PlacementStats = () => {
  return (
    <div className="flex bg-[#011C3C] flex-col items-center py-10">
      <div className="text-center mb-10">
        <h2 className="text-2xl text-white font-bold mb-4">
          Our Placement Stats
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#011C3C] text-white shadow-lg rounded-lg p-6 transform transition-transform hover:scale-105">
            <h3 className="text-xl font-semibold">Maximum Salary Hike</h3>
            <p className="text-4xl font-bold text-[#19ffdb]">150%</p>
          </div>
          <div className="bg-[#011C3C] text-white shadow-lg rounded-lg p-6 transform transition-transform hover:scale-105">
            <h3 className="text-xl font-semibold">Average Salary Hike</h3>
            <p className="text-4xl font-bold text-[#19ffdb]">70%</p>
          </div>
          <div className="bg-[#011C3C] text-white shadow-lg rounded-lg p-6 transform transition-transform hover:scale-105">
            <h3 className="text-xl font-semibold">Hiring Partners</h3>
            <p className="text-4xl font-bold text-[#19ffdb]">2900+</p>
          </div>
        </div>
      </div>
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white mb-4">
          Our Alumni In Top Companies
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {[
            "amazon",
            "microsoft",
            "google",
            "ibm",
            "linkedin",
            "deloitte",
          ].map((company) => (
            <div
              key={company}
              className="flex h-20 w-full items-center justify-center bg-[#011C3C] text-white shadow-lg rounded-lg p-4 transform transition-transform hover:scale-105"
            >
              <Image
                src={`/icons/${company}.svg`}
                width={80}
                height={80}
                alt={company}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlacementStats;
