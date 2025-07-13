import React from "react"
import Image from "next/image"

const Experience = () => {
  return (
    <section className="py-16 px-6 bg-slate-900 min-h-screen text-white">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-4xl font-bold mb-6 text-orange-500 text-center">Experience</h2>
        {/* EagleLion Company */}
        <div className="bg-slate-800 rounded-xl p-8 shadow-lg mb-8">
          <h3 className="text-2xl font-semibold text-orange-400 mb-2">Full-Stack Developer</h3>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <span className="text-lg font-medium text-slate-200">EagleLion Systems Technology</span>
            <span className="text-sm text-slate-400 mt-2 md:mt-0">July 2024 – Aug 2025</span>
          </div>
          <ul className="list-disc list-inside text-slate-300 space-y-2 pl-2">
            <li>
              <span className="font-semibold text-orange-300">Website Development:</span> created a Budget Tracker website.
            </li>
            <li>
              <span className="font-semibold text-orange-300">Frontend Development:</span> Built user-friendly interfaces using <span className="font-semibold text-orange-200">React.js</span>, HTML, and CSS.
            </li>
            <li>
              <span className="font-semibold text-orange-300">Backend Development:</span> Created server-side applications with <span className="font-semibold text-orange-200">Node.js</span> and Express.js.
            </li>
            <li>
              <span className="font-semibold text-orange-300">Database Management:</span> Set up a <span className="font-semibold text-orange-200">MongoDB</span> database for user data.
            </li>
            <li>
              <span className="font-semibold text-orange-300">API Integration:</span> Connected third-party APIs for payment and analytics.
            </li>
            <li>
              <span className="font-semibold text-orange-300">Team Collaboration:</span> Worked with designers and project managers to meet goals.
            </li>
            <li>
              <span className="font-semibold text-orange-300">Testing & Deployment:</span> Tested and deployed the application to the cloud.
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center mb-12">
          <Image
            src="/eagle.jpg"
            alt="Certification"
            width={400}
            height={300}
            className="rounded-lg shadow-lg mb-4 border-2 border-orange-500"
          />
          <span className="text-slate-400 text-sm">Certified Full-Stack Developer</span>
        </div>
        {/* Second Company */}
        <div className="bg-slate-800 rounded-xl p-8 shadow-lg mb-8">
          <h3 className="text-2xl font-semibold text-orange-400 mb-2">Frontend Engineer</h3>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <span className="text-lg font-medium text-slate-200">Kuraz Tech </span>
            <span className="text-sm text-slate-400 mt-2 md:mt-0">Jan 2023 – June 2024</span>
          </div>
          <ul className="list-disc list-inside text-slate-300 space-y-2 pl-2">
            <li>
              <span className="font-semibold text-orange-300">UI/UX Design:</span> Designed modern, responsive interfaces with <span className="font-semibold text-orange-200">Figma</span> and Tailwind CSS.
            </li>
            <li>
              <span className="font-semibold text-orange-300">Performance Optimization:</span> Improved website speed and accessibility.
            </li>
            <li>
              <span className="font-semibold text-orange-300">Collaboration:</span> Worked closely with backend developers to integrate REST APIs.
            </li>
            <li>
              <span className="font-semibold text-orange-300">Testing:</span> Wrote unit and integration tests using <span className="font-semibold text-orange-200">Jest</span> and React Testing Library.
            </li>
            <li>
              <span className="font-semibold text-orange-300">Documentation:</span> Created technical documentation for new features.
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src="/kuraz.jpg"
            alt="kuraz Certification"
            width={400}
            height={300}
            className="rounded-lg shadow-lg mb-4 border-2 border-orange-500"
          />
          <span className="text-slate-400 text-sm">Certified React Specialist</span>
        </div>
      </div>
    </section>
  )
}

export default Experience