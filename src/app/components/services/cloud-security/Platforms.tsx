'use client'

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const AWSCloudPlatform = () => {
  return (
    <>
      <div className="mt-8 grid grid-cols-1 gap-12">
        <h1 className="text-5xl text-white font-bold text-center mb-8">
          Explore Leading Cloud Platforms,
        </h1>
        {/* AWS, GCP, Azure Section with Hover Effect */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {/* AWS Cloud Platform */}
          <div className="relative group bg-white p-4 rounded-md shadow-md">
            {/* Cloud Platform Image */}
            <img
              src="/icons/AWS.png" // Replace with your AWS image path
              alt="AWS Cloud Platform"
              className="w-[200px] h-[200px] mx-auto  object-cover rounded-md transition-transform transform group-hover:scale-105"
            />
            {/* Hidden Info on Hover */}
            <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center p-6 rounded-md">
              <h2 className="text-white text-xl font-semibold mb-4">
                Why AWS Cloud Platform?
              </h2>
              <p className="text-white text-base font-light text-center">
                AWS is a leader in cloud computing, offering scalability, security, and innovation for all types of businesses. For more information, read our post on 
                <a href="/blog/AWS-Penetration-Testing:-Securing-Your-Cloud-Infrastructure" target="_blank" className="text-blue-500 hover:underline"> AWS Penetration Testing</a>.
              </p>
            </div>
          </div>

          {/* Azure Cloud Platform */}
          <div className="relative group bg-white p-4 rounded-md shadow-md">
            {/* Cloud Platform Image */}
            <img
              src="/icons/Azure.svg" // Replace with your Azure image path
              alt="Azure Cloud Platform"
              className="w-[200px] h-[200px] mx-auto  object-cover rounded-md transition-transform transform group-hover:scale-105"
            />
            {/* Hidden Info on Hover */}
            <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center p-6 rounded-md">
              <h2 className="text-white text-xl font-semibold mb-4">
                Why Microsoft Azure?
              </h2>
              <p className="text-white text-base font-light text-center">
                Azure offers hybrid cloud solutions and enterprise-grade security. Learn more in our 
                <a href="/blog/Cloud-Security:-Best-Practices-and-Solutions-for-2024" target="_blank" className="text-blue-500 hover:underline"> Azure Penetration Testing</a> post.
              </p>
            </div>
          </div>

          {/* GCP Cloud Platform */}
          <div className="relative group bg-white p-4 rounded-md shadow-md">
            {/* Cloud Platform Image */}
            <img
              src="/icons/GCP.png" // Replace with your GCP image path
              alt="GCP Cloud Platform"
              className="w-[200px] h-[200px] mx-auto  object-cover rounded-md transition-transform transform group-hover:scale-105"
            />
            {/* Hidden Info on Hover */}
            <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center p-6 rounded-md">
              <h2 className="text-white text-xl font-semibold mb-4">
                Why Google Cloud Platform (GCP)?
              </h2>
              <p className="text-white text-base font-light text-center">
                GCP provides powerful tools like AI/ML and data analytics to drive innovation. For more details, read our post on 
                <a href="/blog/Cloud-Security:-Best-Practices-and-Solutions-for-2024" target="_blank" className="text-blue-500 hover:underline"> GCP Penetration Testing</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AWSCloudPlatform;
