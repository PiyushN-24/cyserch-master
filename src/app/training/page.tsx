import React from "react";
import Hero from "../components/training/page/hero";
import Clients from "../components/training/page/clients";
import StudentStatictics from "../components/training/page/studentStatictic";
import TrainingCards from "../components/training/page/cards";
import WhyChooseUs from "../components/training/page/whyUs";
import Course from "../components/training/page/couse";
import TrainingPage from "../components/training/page/TrainingPage";
import StudentTestimonials from "../components/training/page/StudentTestimonials";
import ContactUs from "../components/home/contactus";

export const metadata = {
  title: "Cyserch | Cybersecurity Training & Courses for Businesses",
  description: "Empower your team with Cyserch's expert cybersecurity training and courses. Learn how to identify threats, prevent attacks, and ensure compliance with our corporate training programs."
  };

const training = () => {
  return (
    <div>
      <Hero />
      <TrainingPage />
      <Clients /> 
      {/*     
      <StudentStatictics />
      <WhyChooseUs />
      <TrainingCards />
      <Course />
      <StudentTestimonials />
      <ContactUs />
      */}
    </div>
  );
};

export default training;
