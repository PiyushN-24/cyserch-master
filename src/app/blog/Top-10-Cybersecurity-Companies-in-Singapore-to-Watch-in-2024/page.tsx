
import React from "react";
import Image from "next/image";
import CyserchImage from "../../../../public/images/blog1-topimgge.png";
import Link from "next/link";
import ContactUs from "@/app/components/home/contactus";
import Sin1 from "../../../../public/images/Singapore.png";
import Sin2 from "../../../../public/images/Singapore_2.png";

export const metadata = {
  title: "Cyserch | Top 10 Cybersecurity Companies in Singapore to Watch in 2024",
  description: "Discover the top 10 cybersecurity companies in Singapore to watch in 2024. Learn about the leading firms protecting businesses from cyber threats with cutting-edge security solutions",
};

export default function CybersecurityCompaniesPage() {
  return (
    <>
      <div className="px-8 sm:px-16 md:px-24 lg:px-32 xl:px-48 py-4">
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Top 10 Cybersecurity Companies in Singapore in 2024
        </h1>

          {/* <div className="flex justify-center mb-4 w-full">
            <Image
              src={Card1}
              width={600}
              height={600}
              alt="Top 10 Cybersecurity Companies in Singapore in 2024"
              className="rounded-lg w-42 h-64 sm:h-80 md:h-96 lg:h-full object-cover"
            />
          </div> */}

        <p className="mb-4 text-white text-sm sm:text-base md:text-lg font-light mt-2">
          In todays digital age, cybersecurity has become paramount. As businesses in Singapore continue to digitize, the threat landscape has evolved, necessitating robust cybersecurity measures. Singapores commitment to becoming a global cybersecurity hub is evident, and the role of top cybersecurity companies is crucial in safeguarding enterprises from cyber threats.
        </p>

        <br />

        <h2 className="text-white text-2xl sm:text-3xl md:text-3xl font-bold mb-4">
          Overview of Singapore’s Cybersecurity Landscape
        </h2>

        <p className="mb-4 text-white text-sm sm:text-base md:text-lg font-light mt-2">
          Singapore is a leading financial and technological hub, making it a prime target for cybercriminals. The government has implemented stringent regulations and initiatives, such as the Cybersecurity Act, to enhance the nation’s cybersecurity posture. Businesses must align with these regulations to protect their assets and data. For more details on Singapores cybersecurity strategies, you can visit the <a href="https://www.csa.gov.sg" className="text-blue-500">CSA website</a>.
        </p>

        <br />

        <h2 className="text-white text-2xl sm:text-3xl md:text-3xl font-bold mb-4">
          Criteria for Selecting Top Cybersecurity Companies
        </h2>

        <ul className="list-disc list-inside space-y-2 mb-4 text-white text-sm sm:text-base md:text-lg font-light mt-2">
          <li>Market Presence and Reputation: How established the company is in the industry.</li>
          <li>Range of Services Offered: The variety of cybersecurity solutions provided.</li>
          <li>Innovation and Technology: Adoption of cutting-edge technologies.</li>
          <li>Customer Reviews and Testimonials: Feedback from clients.</li>
          <li>Industry Recognition and Awards: Accolades and certifications from reputable bodies.</li>
        </ul>

        <br />

        <h2 className="text-white text-2xl sm:text-3xl md:text-3xl font-bold mb-4">
          The Top 10 Cybersecurity Companies in Singapore in 2024
        </h2>

        <ol className="list-decimal text-2xl space-y-6 mb-6 text-white">
          <li>
            <h3 className="text-white text-2xl sm:text-3xl md:text-3xl font-bold mb-4">
              Cyserch Security
            </h3>
            <h3 className="text-xl sm:text-3xl md:text-4xl font-semibold mb-4">
              Services Offered
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-gray-800 rounded-lg p-4">
                <h3 className="text-xl font-semibold mb-2">Cloud Security</h3>
                <p className="text-sm font-light mb-2">
                  Comprehensive protection for cloud infrastructures to prevent unauthorized access and data breaches.
                </p>
                <a href="https://www.cyserch.com/services/cloud-security" className="text-blue-500 hover:underline">
                  Learn more
                </a>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h3 className="text-xl font-semibold mb-2">Web Security</h3>
                <p className="text-sm font-light mb-2">
                  Protect your web applications from common threats like SQL injection, cross-site scripting, and more.
                </p>
                <a href="https://www.cyserch.com/services/web-security" className="text-blue-500 hover:underline">
                  Learn more
                </a>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h3 className="text-xl font-semibold mb-2">API Security</h3>
                <p className="text-sm font-light mb-2">
                  Secure your APIs from malicious attacks and ensure safe communication between services.
                </p>
                <a href="https://www.cyserch.com/services/api-security" className="text-blue-500 hover:underline">
                  Learn more
                </a>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h3 className="text-xl font-semibold mb-2">Network Security</h3>
                <p className="text-sm font-light mb-2">
                  Protect your network infrastructure from intrusions and ensure secure data transmission.
                </p>
                <a href="https://www.cyserch.com/services/network-security" className="text-blue-500 hover:underline">
                  Learn more
                </a>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h3 className="text-xl font-semibold mb-2">Mobile Security</h3>
                <p className="text-sm font-light mb-2">
                  Ensure the security of mobile applications and protect against threats on mobile devices.
                </p>
                <a href="https://www.cyserch.com/services/mobile-security" className="text-blue-500 hover:underline">
                  Learn more
                </a>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h3 className="text-xl font-semibold mb-2">DevSecOps</h3>
                <p className="text-sm font-light mb-2">
                  Integrate security into your DevOps process to ensure continuous security throughout the development lifecycle.
                </p>
                <a href="https://www.cyserch.com/" className="text-blue-500 hover:underline">
                  Learn more
                </a>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h3 className="text-xl font-semibold mb-2">Cybersecurity Training</h3>
                <p className="text-sm font-light mb-2">
                  Provide comprehensive training programs to enhance your teams cybersecurity skills.
                </p>
                <a href="https://www.cyserch.com/training" className="text-blue-500 hover:underline">
                  Learn more
                </a>
              </div>
            </div>
            <ContactUs />
          </li>
          <li>
            <h3 className="text-white text-2xl sm:text-3xl md:text-3xl font-bold mb-4">
              Ensign InfoSecurity
            </h3>
            <h3 className="text-xl sm:text-3xl md:text-4xl font-semibold mb-4">
              Services Offered
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-gray-800 rounded-lg p-4">
                <h3 className="text-xl font-semibold mb-2">Threat Intelligence</h3>
                <p className="text-sm font-light mb-2">
                  Provide real-time threat intelligence to identify and mitigate potential threats.
                </p>
                <a href="https://www.ensigninfosecurity.com/services/threat-intelligence" className="text-blue-500 hover:underline">
                  Learn more
                </a>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h3 className="text-xl font-semibold mb-2">Incident Response</h3>
                <p className="text-sm font-light mb-2">
                  Offer rapid incident response services to contain and resolve security incidents.
                </p>
                <a href="https://www.ensigninfosecurity.com/services/incident-response" className="text-blue-500 hover:underline">
                  Learn more
                </a>
              </div>
              
          </div>
        </li>
        <li>
          <h3 className="text-white text-2xl sm:text-3xl md:text-3xl font-bold mb-4">
            ST Engineering
          </h3>
          <h3 className="text-xl sm:text-3xl md:text-4xl font-semibold mb-4">
            Services Offered
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-gray-800 rounded-lg p-4">
              <h3 className="text-xl font-semibold mb-2">Managed Security Services</h3>
              <p className="text-sm font-light mb-2">
                Provide comprehensive managed security services to protect your business from cyber threats.
              </p>
              <a href="https://www.stengg.com/cybersecurity/managed-security-services" className="text-blue-500 hover:underline">
                Learn more
              </a>
            </div>
            <div className="bg-gray-800 rounded-lg p-4">
              <h3 className="text-xl font-semibold mb-2">Cybersecurity Consulting</h3>
              <p className="text-sm font-light mb-2">
                Offer expert consulting services to help you develop and implement effective cybersecurity strategies.
              </p>
              <a href="https://www.stengg.com/cybersecurity/consulting" className="text-blue-500 hover:underline">
                Learn more
              </a>
            </div>
            <div className="bg-gray-800 rounded-lg p-4">
              <h3 className="text-xl font-semibold mb-2">Compliance Services</h3>
              <p className="text-sm font-light mb-2">
                Ensure compliance with local and international cybersecurity regulations.
              </p>
              <a href="https://www.stengg.com/cybersecurity/compliance-services" className="text-blue-500 hover:underline">
                Learn more
              </a>
            </div>
          </div>
        </li>
        <li>
          <h3 className="text-white text-2xl sm:text-3xl md:text-3xl font-bold mb-4">
            Horangi Cyber Security
          </h3>
          <h3 className="text-xl sm:text-3xl md:text-4xl font-semibold mb-4">
            Services Offered
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-gray-800 rounded-lg p-4">
              <h3 className="text-xl font-semibold mb-2">Penetration Testing</h3>
              <p className="text-sm font-light mb-2">
                Conduct thorough penetration testing to identify and address vulnerabilities.
              </p>
              <a href="https://www.horangi.com/services/penetration-testing" className="text-blue-500 hover:underline">
                Learn more
              </a>
            </div>
            <div className="bg-gray-800 rounded-lg p-4">
              <h3 className="text-xl font-semibold mb-2">Cybersecurity Training</h3>
              <p className="text-sm font-light mb-2">
                Provide training programs to enhance your team’s cybersecurity skills.
              </p>
              <a href="https://www.horangi.com/services/cybersecurity-training" className="text-blue-500 hover:underline">
                Learn more
              </a>
            </div>
          </div>
        </li>
        <li>
          <h3 className="text-white text-2xl sm:text-3xl md:text-3xl font-bold mb-4">
            Palo Alto Networks
          </h3>
          <h3 className="text-xl sm:text-3xl md:text-4xl font-semibold mb-4">
            Services Offered
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-gray-800 rounded-lg p-4">
              <h3 className="text-xl font-semibold mb-2">Firewall Solutions</h3>
              <p className="text-sm font-light mb-2">
                Offer advanced firewall solutions to protect your network from threats.
              </p>
              <a href="https://www.paloaltonetworks.com/network-security" className="text-blue-500 hover:underline">
                Learn more
              </a>
            </div>
            <div className="bg-gray-800 rounded-lg p-4">
              <h3 className="text-xl font-semibold mb-2">Endpoint Protection</h3>
              <p className="text-sm font-light mb-2">
                Ensure comprehensive endpoint protection to secure your devices.
              </p>
              <a href="https://www.paloaltonetworks.com/cybersecurity" className="text-blue-500 hover:underline">
                Learn more
              </a>
            </div>
          </div>
        </li>
        <li>
          <h3 className="text-white text-2xl sm:text-3xl md:text-3xl font-bold mb-4">
            Check Point Software Technologies
          </h3>
          <h3 className="text-xl sm:text-3xl md:text-4xl font-semibold mb-4">
            Services Offered
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-gray-800 rounded-lg p-4">
              <h3 className="text-xl font-semibold mb-2">Threat Prevention</h3>
              <p className="text-sm font-light mb-2">
                Provide advanced threat prevention solutions to detect and stop attacks.
              </p>
              <a href="https://www.checkpoint.com/threat-prevention" className="text-blue-500 hover:underline">
                Learn more
              </a>
            </div>
            <div className="bg-gray-800 rounded-lg p-4">
              <h3 className="text-xl font-semibold mb-2">Mobile Security</h3>
              <p className="text-sm font-light mb-2">
                Secure mobile devices with comprehensive mobile security solutions.
              </p>
              <a href="https://www.checkpoint.com/mobile-security" className="text-blue-500 hover:underline">
                Learn more
              </a>
            </div>
          </div>
        </li>
        <li>
          <h3 className="text-white text-2xl sm:text-3xl md:text-3xl font-bold mb-4">
            Trend Micro
          </h3>
          <h3 className="text-xl sm:text-3xl md:text-4xl font-semibold mb-4">
            Services Offered
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-gray-800 rounded-lg p-4">
              <h3 className="text-xl font-semibold mb-2">Cloud One</h3>
              <p className="text-sm font-light mb-2">
                Provide integrated cloud security services to protect your cloud environments.
              </p>
              <a href="https://www.trendmicro.com/cloud-one" className="text-blue-500 hover:underline">
                Learn more
              </a>
            </div>
            <div className="bg-gray-800 rounded-lg p-4">
              <h3 className="text-xl font-semibold mb-2">Network Defense</h3>
              <p className="text-sm font-light mb-2">
                Offer advanced network defense solutions to protect your network from threats.
              </p>
              <a href="https://www.trendmicro.com/network-defense" className="text-blue-500 hover:underline">
                Learn more
              </a>
            </div>
          </div>
        </li>
        <li>
          <h3 className="text-white text-2xl sm:text-3xl md:text-3xl font-bold mb-4">
            FireEye
          </h3>
          <h3 className="text-xl sm:text-3xl md:text-4xl font-semibold mb-4">
            Services Offered
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-gray-800 rounded-lg p-4">
              <h3 className="text-xl font-semibold mb-2">Managed Defense</h3>
              <p className="text-sm font-light mb-2">
                Provide managed defense services to detect and respond to threats.
              </p>
              <a href="https://www.fireeye.com/managed-defense" className="text-blue-500 hover:underline">
                Learn more
              </a>
            </div>
            <div className="bg-gray-800 rounded-lg p-4">
              <h3 className="text-xl font-semibold mb-2">Threat Intelligence</h3>
              <p className="text-sm font-light mb-2">
                Offer threat intelligence services to identify and mitigate potential threats.
              </p>
              <a href="https://www.fireeye.com/threat-intelligence" className="text-blue-500 hover:underline">
                Learn more
              </a>
            </div>
          </div>
        </li>
        <li>
          <h3 className="text-white text-2xl sm:text-3xl md:text-3xl font-bold mb-4">
            Symantec
          </h3>
          <h3 className="text-xl sm:text-3xl md:text-4xl font-semibold mb-4">
            Services Offered
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-gray-800 rounded-lg p-4">
              <h3 className="text-xl font-semibold mb-2">Endpoint Security</h3>
              <p className="text-sm font-light mb-2">
                Provide comprehensive endpoint security solutions to protect your devices.
              </p>
              <a href="https://www.symantec.com/endpoint-security" className="text-blue-500 hover:underline">
                Learn more
              </a>
            </div>
            <div className="bg-gray-800 rounded-lg p-4">
              <h3 className="text-xl font-semibold mb-2">Web Security</h3>
              <p className="text-sm font-light mb-2">
                Offer advanced web security solutions to protect your web applications.
              </p>
              <a href="https://www.symantec.com/web-security" className="text-blue-500 hover:underline">
                Learn more
              </a>
            </div>
          </div>
        </li>
        <li>
          <h3 className="text-white text-2xl sm:text-3xl md:text-3xl font-bold mb-4">
            IBM Security
          </h3>
          <h3 className="text-xl sm:text-3xl md:text-4xl font-semibold mb-4">
            Services Offered
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-gray-800 rounded-lg p-4">
              <h3 className="text-xl font-semibold mb-2">Security Intelligence</h3>
              <p className="text-sm font-light mb-2">
                Provide security intelligence solutions to detect and respond to threats.
              </p>
              <a href="https://www.ibm.com/security-intelligence" className="text-blue-500 hover:underline">
                Learn more
              </a>
            </div>
            <div className="bg-gray-800 rounded-lg p-4">
              <h3 className="text-xl font-semibold mb-2">Cloud Security</h3>
              <p className="text-sm font-light mb-2">
                Offer advanced cloud security solutions to protect your cloud environments.
              </p>
              <a href="https://www.ibm.com/cloud-security" className="text-blue-500 hover:underline">
                Learn more
              </a>
            </div>
          </div>
        </li>
      </ol>
    

    <br />
   
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Comparative Analysis of Top Companies
        </h2>
        <p className="mb-4 text-white text-sm sm:text-base md:text-lg font-light mt-2">
          To provide a clearer picture, lets compare these companies based on their market positioning,
          strengths, and pricing packages. The following charts highlight how Cyserch Security stands out
          among its peers.
        </p>
        <Image
              src={Sin1}
              width={600}
              height={400}
              alt="Top 10 CybserSecurity Companies in the Singapore in 2024"
              className="rounded-lg w-42 h-64 sm:h-80 md:h-96 lg:h-full object-cover"
            />
        <br />
        <h2 className="text-white text-2xl sm:text-3xl md:text-3xl font-bold mb-4">
          Chart Comparison
        </h2>
        <p className="text-white text-sm sm:text-base md:text-lg font-light mt-2">
          As illustrated in the chart, Cyserch Security scores the highest across all criteria—market
          presence, innovation, and customer satisfaction—demonstrating our unparalleled expertise and
          commitment to excellence.
        </p>
        <br />
        <h2 className="text-white text-2xl sm:text-3xl md:text-3xl font-bold mb-4">
          Pricing and Packages
        </h2>
        <Image
              src={Sin2}
              width={600}
              height={400}
              alt="Top 10 CybserSecurity Companies in the Singapore in 2024"
              className="rounded-lg w-42 h-64 sm:h-80 md:h-96 lg:h-full object-cover"
            />
        <p className="text-white text-sm sm:text-base md:text-lg font-light mt-2">
          When it comes to pricing and packages, Cyserch Security offers the most comprehensive and
          customizable solutions. Our basic, advanced, and enterprise packages are designed to meet
          the diverse needs of businesses, ensuring maximum protection at competitive rates.
          <a href="https://www.cyserch.com/" className="text-blue-500 hover:underline">
            Click here to learn more about our packages.
          </a>
        </p>
        <br />
        <h3 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
          Pricing and Packages Details:
        </h3>
        <ul className="text-white list-disc list-inside space-y-2 mb-6 text-sm sm:text-base md:text-lg font-light">
          <li>
            <strong>Cyserch Security:</strong>
            <ul className="list-disc list-inside pl-4">
              <li>Basic Package: Comprehensive protection for small businesses.</li>
              <li>Advanced Package: Enhanced security for medium-sized enterprises.</li>
              <li>Enterprise Package: Custom solutions for large organizations.</li>
              <li>
                <a href="https://www.cyserch.com/contactus" className="text-blue-500 hover:underline">
                  Contact Us
                </a>{" "}
                for detailed pricing information and to get a quote tailored to your needs.
              </li>
            </ul>
          </li>
          <li>
            <strong>Other Companies:</strong>
            <ul className="list-disc list-inside pl-4">
              <li>Ensign InfoSecurity: Custom pricing based on services required.</li>
              <li>ST Engineering: Package-based pricing with custom options.</li>
              <li>Quann: Tiered pricing based on service levels.</li>
              <li>Horangi: Subscription-based pricing for cloud security solutions.</li>
              <li>STT Connect: Flexible pricing models tailored to client needs.</li>
              <li>Wizlynx Group: Project-based pricing for assessments and testing.</li>
              <li>Acronis: Subscription-based pricing for data protection solutions.</li>
              <li>Attila Cybertech: Custom pricing for industrial security solutions.</li>
              <li>V-Key: Licensing and subscription models for mobile security.</li>
            </ul>
          </li>
        </ul>
        <br />
        <p className="text-white text-sm sm:text-base md:text-lg font-light mt-2">
          For detailed comparisons and pricing,{" "}
          <a href="https://www.cyserch.com/" className="text-blue-500 hover:underline">
            click here to learn more about our packages.
          </a>
        </p>
        <br />
        <h2 className="text-white text-2xl sm:text-3xl md:text-3xl font-bold mb-4">
          Future Trends and Predictions for Cybersecurity in Singapore
        </h2>
        <ul className="text-white list-disc list-inside space-y-2 mb-6 text-sm sm:text-base md:text-lg font-light">
          <li>
            Emerging Technologies: AI and machine learning will play a crucial role in threat
            detection and response.{" "}
            <a href="https://www.techtarget.com" className="text-blue-500 hover:underline">
              Learn more about these technologies on TechTarget.
            </a>
          </li>
          <li>
            Increased Regulatory Focus: Compliance with local and international regulations will
            be paramount.
          </li>
          <li>
            Collaboration: Greater collaboration between private and public sectors to combat
            cyber threats.{" "}
            <a href="https://www.csa.gov.sg" className="text-blue-500 hover:underline">
              Discover more on the CSA website.
            </a>
          </li>
          <li>
            Focus on Cloud Security: With the rise of cloud adoption, cloud security will be a top
            priority.
          </li>
        </ul>
        <br />
        <h2 className="text-white text-2xl sm:text-3xl md:text-3xl font-bold mb-4">
          Conclusion
        </h2>
        <p className="text-white mb-4 text-sm sm:text-base md:text-lg font-light">
          Choosing the right cybersecurity partner is critical in safeguarding your business. The
          companies listed above have demonstrated excellence in providing top-notch cybersecurity
          solutions. As a business in Singapore, staying updated with the latest trends and technologies
          in cybersecurity is essential.
          <br />
          For tailored cybersecurity solutions, consider partnering with Cyserch Security. Our
          comprehensive services are designed to protect your business from emerging threats.
        </p>
        <br />
        <h2 className="text-white text-2xl sm:text-3xl md:text-3xl font-bold mb-4">
          Call to Action
        </h2>
        <p className="text-white mb-4 text-sm sm:text-base md:text-lg font-light">
          Share your experiences with these companies and let us know how they have helped secure
          your business. For personalized cybersecurity consultations, visit{" "}
          <a href="https://www.cyserch.com" className="text-blue-500 hover:underline">
            Cyserch Security
          </a>.
        </p>
        
        <br />
      
          <h2 className="text-white text-2xl sm:text-3xl md:text-3xl font-bold mb-4">
            FAQs
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-white text-xl font-semibold">
                What makes Cyserch Security stand out among other cybersecurity firms?
              </h3>
              <p className="text-white text-sm sm:text-base md:text-lg font-light">
                At Cyserch Security, we offer a comprehensive range of services, innovative solutions, and a customer-centric approach that sets us apart. Our commitment to excellence and industry-leading expertise ensure that our clients receive the best possible protection against cyber threats.
              </p>
            </div>
            <div>
              <h3 className="text-white text-xl font-semibold">
                How do I choose the right cybersecurity firm for my business?
              </h3>
              <p className="text-white text-sm sm:text-base md:text-lg font-light">
                When selecting a cybersecurity firm, consider factors such as the range of services offered, the firms reputation, customer reviews, and their expertise in your industry. Its important to choose a partner that understands your specific needs and can provide tailored solutions.
              </p>
            </div>
            <div>
              <h3 className="text-white text-xl font-semibold">
                What are the key features of top cybersecurity companies?
              </h3>
              <p className="text-white text-sm sm:text-base md:text-lg font-light">
                Top cybersecurity companies offer comprehensive service offerings, innovative technology, a customer-focused approach, industry expertise, and a proactive stance on threat identification and mitigation.
              </p>
            </div>
            <div>
              <h3 className="text-white text-xl font-semibold">
                How does Cyserch Security approach cybersecurity for small businesses?
              </h3>
              <p className="text-white text-sm sm:text-base md:text-lg font-light">
                We understand the unique challenges faced by small businesses and offer tailored solutions to meet their needs. Our services include risk assessments, threat detection, and managed security services to ensure that small businesses are well-protected against cyber threats.
              </p>
            </div>
            <div>
              <h3 className="text-white text-xl font-semibold">
                Can Cyserch Security help with compliance and regulatory requirements?
              </h3>
              <p className="text-white text-sm sm:text-base md:text-lg font-light">
                Yes, we offer compliance consulting services to help businesses navigate complex regulatory requirements and ensure that their cybersecurity practices meet industry standards.
              </p>
            </div>
          </div>
          </div>
        
        <ContactUs />
  </>
);
}
