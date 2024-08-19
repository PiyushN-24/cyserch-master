import React from "react";
import Image from "next/image";
import Link from "next/link";
import ContactUs from "@/app/components/home/contactus"; // Adjust the path as needed
import Card1 from "../../../../public/images/card1.png"; // Update the path and filename

export const metadata = {
  title: "Top 10 Cybersecurity Companies in Canada: Your Guide to Secure Solutions in 2024",
  description: "Explore the top 10 cybersecurity companies in Canada for 2024. Learn about their key services, strengths, and pricing to find the best fit for your cybersecurity needs.",
};

export default function CybersecurityCompaniesPage() {
  return (
    <div className="px-8 sm:px-16 md:px-24 lg:px-32 xl:px-48 py-4 text-white">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Top 10 Cybersecurity Companies in Canada: Your Guide to Secure Solutions in 2024
        </h1>
        <div className="flex justify-center mb-4">
          <Image
            src={Card1}
            width={600}
            height={400}
            alt="Top 10 Cybersecurity Companies in Canada 2024"
            className="rounded-lg object-cover"
          />
        </div>
        <p className="mb-6 text-base sm:text-lg md:text-xl font-light">
          In a world where cyber threats are advancing at a breakneck pace, the importance of robust cybersecurity solutions for businesses cannot be overstated. From small startups to large enterprises, Canadian businesses must prioritize protecting their digital assets. This guide will walk you through the top 10 cybersecurity companies in Canada for 2024, highlighting their strengths, key services, and what sets them apart.
        </p>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
          The Growing Importance of Cybersecurity in Canada
        </h2>
        <p className="mb-4 text-base sm:text-lg md:text-xl font-light">
          Cyber threats are no longer a distant concern—they are a present and escalating danger. From data breaches to ransomware attacks, Canadian businesses are under constant threat. According to a study by Cybersecurity Ventures, the global cost of cybercrime is predicted to reach a staggering $10.5 trillion annually by 2025. In Canada, the frequency and severity of cyber incidents, including ransomware attacks and data breaches, are on the rise.
        </p>
        <p className="mb-4 text-base sm:text-lg md:text-xl font-light">
          In this environment, selecting a cybersecurity partner with local expertise and a deep understanding of regional threats and compliance requirements becomes crucial. Canadian cybersecurity firms offer several advantages, including proximity, ease of communication, and a reputation for reliability.
        </p>
        
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
        What to Consider When Choosing a Cybersecurity Company ?
        </h2>
        <p className="mb-4 text-base sm:text-lg md:text-xl font-light">
        When selecting a cybersecurity partner, several critical factors should guide your decision:
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li><strong className="font-bold text-lg">Expertise and Experience:</strong> Options for companies with a proven track record and specialized knowledge.</li>
            <li><strong className="font-bold text-lg">Comprehensive Services:</strong> Ensure the firm offers a broad range of services, including threat detection, incident response, and compliance support.</li>
            <li><strong className="font-bold text-lg">Innovation:</strong> Companies that leverage the latest technologies and provide innovative solutions are often more effective.</li>
            <li><strong className="font-bold text-lg">Client Testimonials and Case Studies:</strong> Look for companies with a history of success and satisfied clients.</li>
            <li><strong className="font-bold text-lg">Customer Support:</strong> Reliable, 24/7 customer support is essential for addressing security issues promptly.</li>
          </ul>
        </p>
        
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
          The Top 10 Cybersecurity Companies in Canada
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">1. Cyserch Solutions</h3>
          <h4 className="text-md sm:text-lg font-semibold mb-2">Overview:</h4>
          <p className="text-base mb-4">
            Cyserch Solutions leads the pack with its innovative approach to cybersecurity, offering a full spectrum of services designed to protect businesses from evolving threats. Known for its expert team and cutting-edge technology, Cyserch is a trusted partner for enterprises, SMEs, and startups alike.
          </p>
          <h4 className="text-md sm:text-lg font-semibold mb-2">Key Services:</h4>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>Threat Detection and Response: Advanced systems for identifying and neutralizing threats before they impact your business.</li>
            <li>Cloud Security: Comprehensive solutions to safeguard your cloud infrastructure.</li>
            <li>Compliance Support: Assistance with meeting regulatory requirements and industry standards.</li>
          </ul>
          <p className="text-base mb-2">Notable Clients: Leading financial institutions, major tech companies, and government agencies.</p>
          <p className="text-base mb-2"><strong>Strengths:</strong> Innovative Technology: Utilizes the latest advancements in cybersecurity. Comprehensive Coverage: Offers end-to-end solutions tailored to various business needs.</p>
          <p className="text-base mb-2"><strong>Weaknesses:</strong> Higher Initial Costs: Premium services may require a higher investment, though the return on security is substantial.</p>
          <Link href="#" passHref>
            <span className="text-blue-400 hover:underline">Learn more about Cyserch Solutions</span>
          </Link>
          <br/><br/>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-gray-700 rounded-lg p-4">
              <h3 className="text-xl font-semibold mb-2">Cloud Security</h3>
              <p className="text-sm font-light mb-2">
                At Cyserch Security, we provide robust cloud security solutions to protect your digital assets in the cloud environment.
              </p>
              <a href="https://www.cyserch.com/services/cloud-security" className="text-blue-500 hover:underline">Learn more</a>
            </div>
            <div className="bg-gray-700 rounded-lg p-4">
              <h3 className="text-xl font-semibold mb-2">Web Security</h3>
              <p className="text-sm font-light mb-2">
                Our web security services ensure comprehensive protection for your web applications and platforms.
              </p>
              <a href="https://www.cyserch.com/services/web-security" className="text-blue-500 hover:underline">Learn more</a>
            </div>
            <div className="bg-gray-700 rounded-lg p-4">
              <h3 className="text-xl font-semibold mb-2">API Security</h3>
              <p className="text-sm font-light mb-2">
                Protect your APIs from potential threats with our advanced API security solutions.
              </p>
              <a href="https://www.cyserch.com/services/api-security" className="text-blue-500 hover:underline">Learn more</a>
            </div>
            <div className="bg-gray-700 rounded-lg p-4">
              <h3 className="text-xl font-semibold mb-2">Mobile Security</h3>
              <p className="text-sm font-light mb-2">
                Ensure the security of your mobile applications and devices with our tailored mobile security services.
              </p>
              <a href="https://www.cyserch.com/services/mobile-security" className="text-blue-500 hover:underline">Learn more</a>
            </div>
            <div className="bg-gray-700 rounded-lg p-4">
              <h3 className="text-xl font-semibold mb-2">Network Security</h3>
              <p className="text-sm font-light mb-2">
                Secure your network infrastructure against cyber threats with our comprehensive network security solutions.
              </p>
              <a href="https://www.cyserch.com/services/network-security" className="text-blue-500 hover:underline">Learn more</a>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">2. CyberGuard Solutions</h3>
          <h4 className="text-md sm:text-lg font-semibold mb-2">Overview:</h4>
          <p className="text-base mb-4">
            CyberGuard Solutions is a prominent player in the Canadian cybersecurity scene, renowned for its sophisticated threat intelligence and incident response services. They are particularly effective for financial institutions and healthcare providers.
          </p>
          <h4 className="text-md sm:text-lg font-semibold mb-2">Key Services:</h4>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>Threat Intelligence: Advanced analysis and actionable insights to preempt cyber threats.</li>
            <li>Incident Response: Rapid response to mitigate damage from security breaches.</li>
            <li>Managed Security Services: Continuous monitoring and protection.</li>
          </ul>
          <p className="text-base mb-2">Notable Clients: Major banks, healthcare providers.</p>
          <p className="text-base mb-2"><strong>Strengths:</strong> Comprehensive Threat Intelligence: Excellent at providing actionable insights. Effective Incident Response: Proven track record in managing security incidents.</p>
          <p className="text-base mb-2"><strong>Weaknesses:</strong> Premium Pricing: May be cost-prohibitive for smaller businesses.</p>
          <Link href="#" passHref>
            <span className="text-blue-400 hover:underline">Learn more about CyberGuard Solutions</span>
          </Link>
        </div>

        {/* Company 3: TechSecure Canada */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">3. TechSecure Canada</h3>
          <h4 className="text-md sm:text-lg font-semibold mb-2">Overview:</h4>
          <p className="text-base mb-4">
            TechSecure Canada specializes in advanced threat detection and is favored by technology firms and retail chains. Their innovative approach ensures robust network and endpoint security.
          </p>
          <h4 className="text-md sm:text-lg font-semibold mb-2">Key Services:</h4>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>Endpoint Protection: Secure individual devices against threats.</li>
            <li>Network Security: Safeguard your entire network infrastructure.</li>
            <li>Cloud Security: Protect your cloud-based assets.</li>
          </ul>
          <p className="text-base mb-2">Notable Clients: Technology firms, retail chains.</p>
          <p className="text-base mb-2"><strong>Strengths:</strong> High Detection Rates: Known for effective threat detection. User-Friendly Interface: Easy-to-use solutions.</p>
          <p className="text-base mb-2"><strong>Weaknesses:</strong> Occasional False Positives: Some users report occasional issues with false alerts.</p>
          <Link href="#" passHref>
            <span className="text-blue-400 hover:underline">More details here</span>
          </Link>
        </div>

        {/* Company 4: SafeNet Solutions */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">4. SafeNet Solutions</h3>
          <h4 className="text-md sm:text-lg font-semibold mb-2">Overview:</h4>
          <p className="text-base mb-4">
            SafeNet Solutions excels in cybersecurity consulting, offering customized strategies to enhance security and ensure regulatory compliance across various industries.
          </p>
          <h4 className="text-md sm:text-lg font-semibold mb-2">Key Services:</h4>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>Security Audits: Comprehensive assessments of your current security posture.</li>
            <li>Compliance Consulting: Help with meeting regulatory standards.</li>
            <li>Risk Management: Identify and mitigate potential risks.</li>
          </ul>
          <p className="text-base mb-2">Notable Clients: Government bodies, large enterprises.</p>
          <p className="text-base mb-2"><strong>Strengths:</strong> Expert Compliance Consulting: Strong focus on regulatory adherence. Effective Risk Management: Helps businesses understand and manage their security risks.</p>
          <p className="text-base mb-2"><strong>Weaknesses:</strong> Limited Managed Services: Primarily focused on consulting rather than ongoing managed services.</p>
          <Link href="#" passHref>
            <span className="text-blue-400 hover:underline">Explore options here</span>
          </Link>
        </div>

        {/* Company 5: SecureNet Technologies */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">5. SecureNet Technologies</h3>
          <h4 className="text-md sm:text-lg font-semibold mb-2">Overview:</h4>
          <p className="text-base mb-4">
            SecureNet Technologies offers advanced technology combined with expert consulting. Their solutions are tailored for sectors like healthcare and financial services.
          </p>
          <h4 className="text-md sm:text-lg font-semibold mb-2">Key Services:</h4>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>SIEM Solutions: Security Information and Event Management.</li>
            <li>Vulnerability Management: Identify and address security weaknesses.</li>
            <li>Security Automation: Streamline security processes through automation.</li>
          </ul>
          <p className="text-base mb-2">Notable Clients: Healthcare, financial services.</p>
          <p className="text-base mb-2"><strong>Strengths:</strong> Strong Automation: Effective in automating security tasks. Expert Vulnerability Management: Proactive in identifying and mitigating vulnerabilities.</p>
          <p className="text-base mb-2"><strong>Weaknesses:</strong> Integration Challenges: May face issues integrating with legacy systems.</p>
          <Link href="#" passHref>
            <span className="text-blue-400 hover:underline">Discover more here</span>
          </Link>
        </div>

        {/* Company 6: AI Security Innovations */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">6. AI Security Innovations</h3>
          <h4 className="text-md sm:text-lg font-semibold mb-2">Overview:</h4>
          <p className="text-base mb-4">
            AI Security Innovations stands out with its use of artificial intelligence to enhance threat detection and response. Ideal for tech startups and e-commerce platforms.
          </p>
          <h4 className="text-md sm:text-lg font-semibold mb-2">Key Services:</h4>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>AI-Powered Threat Detection: Utilizes AI to detect and respond to threats.</li>
            <li>Incident Response: Quick action to address security incidents.</li>
            <li>Data Encryption: Protect sensitive data through encryption.</li>
          </ul>
          <p className="text-base mb-2">Notable Clients: Tech startups, e-commerce platforms.</p>
          <p className="text-base mb-2"><strong>Strengths:</strong> Advanced AI Technology: High detection rates and proactive threat management. Innovative Solutions: Leading-edge technology for modern threats.</p>
          <p className="text-base mb-2"><strong>Weaknesses:</strong> Higher Initial Setup Costs: Higher upfront investment required.</p>
          <Link href="#" passHref>
            <span className="text-blue-400 hover:underline">See pricing here</span>
          </Link>
        </div>

        {/* Company 7: Guardian Cybersecurity */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">7. Guardian Cybersecurity</h3>
          <h4 className="text-md sm:text-lg font-semibold mb-2">Overview:</h4>
          <p className="text-base mb-4">
            Guardian Cybersecurity is known for its managed security services and proactive threat management, making it a reliable partner for telecom companies and educational institutions.
          </p>
          <h4 className="text-md sm:text-lg font-semibold mb-2">Key Services:</h4>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>Managed Firewall: Continuous firewall management.</li>
            <li>DDoS Protection: Safeguard against Distributed Denial of Service attacks.</li>
            <li>Security Monitoring: Ongoing monitoring of security events.</li>
          </ul>
          <p className="text-base mb-2">Notable Clients: Telecom companies, educational institutions.</p>
          <p className="text-base mb-2"><strong>Strengths:</strong> Comprehensive Monitoring: Extensive monitoring services. Proactive Threat Management: Effective in managing and mitigating threats.</p>
          <p className="text-base mb-2"><strong>Weaknesses:</strong> Limited Advanced Analytics: May lack in-depth analytical tools.</p>
          <Link href="#" passHref>
            <span className="text-blue-400 hover:underline">Learn more here</span>
          </Link>
        </div>

        {/* Company 8: NetworkDefend Solutions */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">8. NetworkDefend Solutions</h3>
          <h4 className="text-md sm:text-lg font-semibold mb-2">Overview:</h4>
          <p className="text-base mb-4">
            NetworkDefend Solutions focuses on network security, providing robust protection for manufacturing firms and logistics companies.
          </p>
          <h4 className="text-md sm:text-lg font-semibold mb-2">Key Services:</h4>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>Network Segmentation: Divide networks into segments to improve security.</li>
            <li>VPN Solutions: Secure remote access to networks.</li>
            <li>Security Architecture: Design and implement secure network structures.</li>
          </ul>
          <p className="text-base mb-2">Notable Clients: Manufacturing firms, logistics companies.</p>
          <p className="text-base mb-2"><strong>Strengths:</strong> Strong Network Security Focus: Specializes in network protection. Effective VPN Solutions: Ensures secure remote access.</p>
          <p className="text-base mb-2"><strong>Weaknesses:</strong> Limited Cloud Security Services: Not as focused on cloud solutions.</p>
          <Link href="#" passHref>
            <span className="text-blue-400 hover:underline">Explore more here</span>
          </Link>
        </div>

        {/* Company 9: CyberSafe Solutions */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">9. CyberSafe Solutions</h3>
          <h4 className="text-md sm:text-lg font-semibold mb-2">Overview:</h4>
          <p className="text-base mb-4">
            CyberSafe Solutions offers end-to-end cybersecurity with a focus on customer-centric services, catering primarily to small businesses and mid-sized enterprises.
          </p>
          <h4 className="text-md sm:text-lg font-semibold mb-2">Key Services:</h4>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>Endpoint Security: Protect individual devices.</li>
            <li>Cybersecurity Training: Educate employees on security best practices.</li>
            <li>Threat Hunting: Proactively search for potential threats.</li>
          </ul>
          <p className="text-base mb-2">Notable Clients: Small businesses, mid-sized enterprises.</p>
          <p className="text-base mb-2"><strong>Strengths:</strong> Excellent Customer Support: Known for strong support and training programs. Tailored Solutions: Services are well-suited for mid-sized businesses.</p>
          <p className="text-base mb-2"><strong>Weaknesses:</strong> Best Suited for Mid-Sized Businesses: May not scale well for larger enterprises.</p>
          <Link href="#" passHref>
            <span className="text-blue-400 hover:underline">Check their services here</span>
          </Link>
        </div>

        {/* Company 10: QuantumGuard Cybersecurity */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">10. QuantumGuard Cybersecurity</h3>
          <h4 className="text-md sm:text-lg font-semibold mb-2">Overview:</h4>
          <p className="text-base mb-4">
            QuantumGuard Cybersecurity is recognized for its innovative approach and strong research capabilities, focusing on threat intelligence and blockchain security.
          </p>
          <h4 className="text-md sm:text-lg font-semibold mb-2">Key Services:</h4>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>Threat Intelligence: Advanced analysis of potential threats.</li>
            <li>Blockchain Security: Specialized solutions for blockchain technologies.</li>
            <li>Security Consulting: Expert advice on improving security measures.</li>
          </ul>
          <p className="text-base mb-2">Notable Clients: Financial institutions, technology firms.</p>
          <p className="text-base mb-2"><strong>Strengths:</strong> Strong Research Capabilities: Backed by solid research and innovative solutions. Specialized in Blockchain: Expertise in emerging technologies.</p>
          <p className="text-base mb-2"><strong>Weaknesses:</strong> Higher Costs for Smaller Projects: May be more expensive for small-scale needs.</p>
          <Link href="#" passHref>
            <span className="text-blue-400 hover:underline">Learn more here</span>
          </Link>
        </div>
      </div>
      <br/>  
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
          How to Select the Right Cybersecurity Partner
        </h2>
        <p className="mb-4 text-base sm:text-lg md:text-xl font-light">
        Choosing the right cybersecurity partner is essential for protecting your business. Here’s what to consider:
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li><strong className="font-bold text-lg">Assess Your Needs:</strong> Identify whether you need threat detection, compliance support, or comprehensive security solutions.</li>
            <li><strong className="font-bold text-lg">Evaluate Expertise and Reputation:</strong> Look for companies with a proven track record and strong industry reputation.</li>
            <li><strong className="font-bold text-lg">Consider Support and Customer Service:</strong> Ensure the company offers robust, 24/7 support and proactive monitoring.</li>
            <li><strong className="font-bold text-lg">Budget and ROI:</strong> Balance your budget with the potential return on investment for robust security.</li>
          </ul>
        </p>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
          Case Studies: Successful Cybersecurity Implementations
        </h2>
        <p className="mb-4 text-base sm:text-lg md:text-xl font-light">
          <strong>Case Study 1: FinSecure Solutions</strong><br/>
          <strong>Challenge:</strong> A major financial institution faced increasing cyber threats and compliance pressures.<br/>
          <strong>Solution:</strong> They partnered with CyberGuard Solutions for advanced threat intelligence and incident response.<br/>
          <strong>Result:</strong> Reduced security incidents by 40% and achieved compliance with industry regulations, enhancing customer trust.
        </p>
        <p className="mb-4 text-base sm:text-lg md:text-xl font-light">
          <strong>Case Study 2: HealthGuard Security</strong><br/>
          <strong>Challenge:</strong> A healthcare provider needed to comply with stringent regulations while protecting sensitive patient data.<br/>
          <strong>Solution:</strong> They chose SafeNet Solutions for comprehensive security audits and compliance consulting.<br/>
          <strong>Result:</strong> Successfully achieved compliance with healthcare regulations, avoiding potential fines and protecting patient data.
        </p>
        <p className="mb-4 text-base sm:text-lg md:text-xl font-light">
          <strong>Case Study 3: TechDefend Innovations</strong><br/>
          <strong>Challenge:</strong> A tech startup struggled with advanced persistent threats (APTs) and needed a robust defense mechanism.<br/>
          <strong>Solution:</strong> They implemented AI Security Innovations for AI-powered threat detection and incident response.<br/>
          <strong>Result:</strong> Enhanced threat detection capabilities, reducing response time to incidents by 70%.
        </p>

        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
          Conclusion:
        </h2>
        <p className="mb-6 text-base sm:text-lg md:text-xl font-light">
          Selecting the right cybersecurity partner is a critical decision for safeguarding your business against evolving cyber threats. The top 10 companies listed here represent some of the best options available in Canada for 2024. Each offers unique strengths and services to fit various needs. For a personalized recommendation, consider reaching out to <Link href="https://www.cyserch.com" className="text-blue-400 underline">Cyserch Solutions</Link>. Our expertise can help you find the best cybersecurity solutions tailored to your specific requirements.
        </p>
  
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
          FAQs 
        </h2>
        <div className="mb-4 text-base sm:text-lg md:text-xl font-light">
          <p><strong>Q1. What are the essential services to look for in a cybersecurity company?</strong></p>
          <p>ANS.: Essential services include threat intelligence, incident response, network security, compliance consulting, and endpoint protection.</p>
          <p><strong>Q2. How do I assess the effectiveness of a cybersecurity company?</strong></p>
          <p>Ans.: Evaluate their track record, client feedback, and case studies.</p>
          <p><strong>Q3. What should be the budget for cybersecurity services?</strong></p>
          <p>Ans.: Cybersecurity budgets vary widely. Typically, budgets range from $300/month for small businesses to $2000/month for larger enterprises.</p>
          <p><strong>Q4 How important is the company’s customer support?</strong></p>
          <p>Ans.: Customer support is crucial for timely assistance and resolution of security issues. Ensure the company offers 24/7 support and proactive monitoring.</p>
          <p><strong>Q5. Can cybersecurity companies help with compliance requirements?</strong></p>
          <p>Ans.: Yes, many cybersecurity companies provide compliance consulting and solutions tailored to meet specific regulatory requirements.</p>
        </div>      
        <ContactUs />
      </div>
  );
}
