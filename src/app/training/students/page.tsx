import React from "react";
import Hero from "../../components/training/students/hero";
//import Clients from "../../components/training/students/clients";
import StudentStatictics from "../../components/training/students/studentStatictic";
import TrainingCards from "../../components/training/students/cards";
import WhyChooseUs from "../../components/training/students/whyUs";
import Course from "../../components/training/students/couse";
import StudentTestimonials from "../../components/training/students/StudentTestimonials";
import ContactUs from "../../components/home/contactus";

export const metadata = {
  title: "Cyserch | Cybersecurity Training & Courses for Businesses",
  description: "Empower your team with Cyserch's expert cybersecurity training and courses. Learn how to identify threats, prevent attacks, and ensure compliance with our corporate training programs."
  };

const StudentTraining = () => {
  return (
    <div>
      <Hero />
      {/*<Clients />*/}
      <StudentStatictics />
      <WhyChooseUs />
      <TrainingCards />
      <Course />
      <StudentTestimonials />
      <ContactUs />
    </div>
  );
};

export default StudentTraining;
