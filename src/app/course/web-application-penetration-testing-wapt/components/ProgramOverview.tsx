export default function ProgramOverview() {
  return (
    <div className="px-4 sm:px-[7rem] py-[3rem]">
      <h2 className="text-white text-[1.7rem] font-semibold">
        Course Overview
      </h2>
      <p className="text-[#A39D9D] text-[1.1rem] py-[1rem]">
        
Unlock a comprehensive cybersecurity education, encompassing industry certification, cutting-edge knowledge, hands-on tool usage, project-based learning, and AI integration
      </p>

      <h2 className="text-white text-[1.7rem] mt-10 font-semibold">
        Benefits
      </h2>
      <div className="py-[0.4rem] gap-0 sm:gap-14 flex flex-col sm:flex-row fadeInUp">
        <ul className="h-auto w-full sm:w-[30rem]  sm:mb-0">
          <li className="card-discription">
          ✓ Earn industry recognition with our certification
          </li>
          <li className="card-discription">
          ✓ Stay ahead with the latest cyberattack insights.

          </li>
          <li className="card-discription">
          ✓ Utilize industry-standard tools for practical learning
          </li>
        </ul>

        <ul className="h-auto w-full sm:w-[30rem] sm:mb-0">
          <li className="card-discription">
          ✓ Engage in project-based learning for real-world skills.
          </li>
          <li className="card-discription">
          ✓ Build skills to become job-ready and advance your career
          </li>
        </ul>

        <ul className="h-auto w-full sm:w-[30rem]">
          <li className="card-discription">
          ✓ Explore cybersecurity through AI integration
          </li>
          <li className="card-discription">
          ✓ JobAssist ensures your visibility to premier hiring companies.
          </li>
        </ul>
      </div>
    </div>
  );
}