
import Hero from "./components/home/hero";
import Clients from "./components/home/Built";
import SecendCards from "./components/home/secendCards";
import WhyChooseUs from "./components/home/whyChooseUs";
import Industrys from "./components/home/Industrys";
import Services from "./components/home/Services";
import Certificate from "./components/home/certifications";
import Testimonial from "./components/home/ClinetTestimonials";
import Blog from "./components/home/blogs";
import CaseStudy from "./components/home/casestudies";
import ContactUs from "./components/home/contactus";
import Head from 'next/head';
//import CaseStudy from "./components/resources/casestudies/CaseStudyPage"
//import Hero1 from "./components/resources/casestudies/hero"
// import { metadata } from "./metadata";
// metadata.ts
export default function Home() {
  return (
    <>
        
      <div className="container mx-auto px-4">
        <Hero />
        <Clients />
        <SecendCards />
        <WhyChooseUs />
        <Certificate />
        <Industrys />
        <CaseStudy />
        <Services />
        <Testimonial />
        <ContactUs />
      </div>
    </>
  );
}