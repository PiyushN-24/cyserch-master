import React from "react";
import CaseStudyCard from "./CaseStudyCard";
import { caseStudyData } from "./CaseStudyData"; // Ensure the import matches the export

const CaseStudyPage = () => {
  return (
    <div className="case-study-page mt-8 mb-10">
      <div className="px-4 sm:px-6 md:px-8 lg:px-36 case-study-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:gap-10 sm:gap-6 md:gap-8">
        {caseStudyData.map((caseStudy) => (
          <CaseStudyCard
            key={caseStudy.id}
            caseStudy={caseStudy} // Pass the entire caseStudy object
          />
        ))}
      </div>
    </div>
  );
};

export default CaseStudyPage;
