import React from "react";
import Hero from "../../components/training/corporate/hero";
import Clients from "../../components/training/corporate/clients";
import StudentStatictics from "../../components/training/corporate/studentStatictic";
import TrainingCards from "../../components/training/corporate/cards";
import WhyChooseUs from "../../components/training/corporate/whyUs";
import Course from "../../components/training/corporate/couse";
import StudentTestimonials from "../../components/training/corporate/StudentTestimonials";
import ContactUs from "../../components/home/contactus";

export const metadata = {
  title: "Cyserch | Cybersecurity Training & Courses for Businesses",
  description: "Empower your team with Cyserch's expert cybersecurity training and courses. Learn how to identify threats, prevent attacks, and ensure compliance with our corporate training programs."
  };

const corporatetraining = () => {
  return (
    <div>
      <Hero />
      <Clients />
      <StudentStatictics />
      <WhyChooseUs />
      <TrainingCards />
      <Course />
      <StudentTestimonials />
      <ContactUs />
    </div>
  );
};

export default corporatetraining;
