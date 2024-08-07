import React from "react";
import Hero from "./components/hero";
import SecondSection from "./components/second_section";
import WhyJoinUs from "./components/why_join_us";
import OurAlumni from "./components/OurAlumni";
import ProgramOverviw from "./components/ProgramOverview";
import Certificate from "./components/Certificate";
import LearningPath from "./components/LearningPath";
import ToolsCovered from "./components/ToolsCovered";
import PlacementStats from "./components/PlacementStats";
import StudentTestimonials from "./components/StudentsTestimonials";
import ContactUs from "@/app/components/home/contactus";


export default function CoursePage() {
  return (
    <>
      <Hero />
      <SecondSection />
      <WhyJoinUs />
      <PlacementStats />
      {/* <OurAlumni /> */}
      <ProgramOverviw />
      <Certificate />
      <LearningPath />
      <ToolsCovered />

      <StudentTestimonials />
      <ContactUs />
    </>
  );
}
