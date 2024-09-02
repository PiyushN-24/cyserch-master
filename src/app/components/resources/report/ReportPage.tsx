import React from "react";
import ReportCard from "./ReportCard"; 
import { reportData } from "./ReportData"; 

const ReportPage = () => {
  return (
    <div className="report-page mt-8 mb-10">
      <div className="px-4 sm:px-6 md:px-8 lg:px-36 report-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:gap-10 sm:gap-6 md:gap-8">
        {reportData.map((report) => (
          <ReportCard key={report.id} report={report} />
        ))}
      </div>
    </div>
  );
};

export default ReportPage;
