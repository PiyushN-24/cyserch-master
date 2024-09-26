import { FaCloud, FaShieldAlt, FaChartLine, FaDollarSign, FaTools, FaCheck } from "react-icons/fa";

export default function CloudSecurityBenefits() {
  return (
    <div className="p-6 rounded-lg shadow-lg text-white">
      <h2 className="text-white text-[2.4rem] font-semibold mt-3 mb-4 text-center">
        Benefits of Cloud Penetration Testing
      </h2>
      <p className="text-gray-100 text-[1.2rem] font-light mt-2 mb-6 text-center">
        Why do organizations need Cloud Penetration Testing?
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            icon: <FaShieldAlt className="text-red-500 w-10 h-10" />,
            title: "Advanced Security",
            description:
              "Benefit from robust encryption, continuous monitoring, and protection against modern cyber threats.",
          },
          {
            icon: <FaChartLine className="text-cyan-500 w-10 h-10" />,
            title: "Scalability",
            description:
              "Cloud security solutions can scale as your business grows, ensuring consistent protection without limitations on size or scope.",
          },
          {
            icon: <FaDollarSign className="text-green-400 w-10 h-10" />,
            title: "Cost-Effectiveness",
            description:
              "Reduce capital expenses by eliminating the need for costly on-premises infrastructure and software maintenance.",
          },
          {
            icon: <FaTools className="text-blue-400 w-10 h-10" />,
            title: "Flexibility",
            description:
              "Tailor security measures to suit the specific needs of your organization, adapting to any cloud environment and workload.",
          },
          {
            icon: <FaCheck className="text-yellow-500 w-10 h-10" />,
            title: "Compliance",
            description:
              "Ensure your operations meet critical regulatory standards, such as HIPAA, PCI DSS, and GDPR, with compliance-ready solutions.",
          },
          {
            icon: <FaCloud className="text-teal-400 w-10 h-10" />,
            title: "Cloud Integration",
            description:
              "Leverage seamless integration with cloud services to secure your data, applications, and infrastructure.",
          },
        ].map((benefit, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-gray-800 p-6 rounded-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div>{benefit.icon}</div>
            <h3 className="text-white text-xl font-semibold mt-4">{benefit.title}</h3>
            <p className="text-gray-100 text-lg font-light mt-2">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
