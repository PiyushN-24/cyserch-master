// components/TechStackIntegration.js

import React from 'react';

const techStackItems = [
  {
    name: 'Slack',
    description: 'Get notified about new vulnerabilities in Slack',
    link: 'https://slack.com',
  },
  {
    name: 'Jira',
    description: 'Sync tasks to your Jira Board',
    link: 'https://www.atlassian.com/software/jira',
  },
  {
    name: 'GitLab',
    description: 'Start scans from your CI/CD pipeline',
    link: 'https://about.gitlab.com',
  },
  {
    name: 'GitHub',
    description: 'Integrate with GitHub for seamless collaboration',
    link: 'https://github.com',
  },
];

const TechStackIntegration = () => {
  return (
    <section className="bg-gray-300 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl flex justify-center font-bold mb-2">Connect Cyserch with Your Existing Tech Stack and Collaborate Seamlessly</h2>
        <p className="mb-8 flex justify-center text-lg">
          Let Cyserch find security issues and push them to your project management tool for easier collaboration and tracking.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {techStackItems.map(({ name, description, link }) => (
            <a href={link} target="_blank" rel="noopener noreferrer" key={name} className="bg-white p-6 rounded-lg shadow-lg text-center hover:bg-blue-400 transition-colors duration-300">
              <h3 className="text-xl font-semibold mb-4">{name}</h3>
              <p className="text-black">{description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackIntegration;
