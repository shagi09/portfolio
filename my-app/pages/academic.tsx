import React from "react"
import Image from "next/image"

const Academy = () => {
  return (
    <section className="py-16 px-6 bg-slate-900 min-h-screen text-white">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-4xl font-bold mb-6 text-orange-500 text-center">Academy</h2>
        {/* Bahir Dar University */}
        <div className="bg-slate-800 rounded-xl p-8 shadow-lg mb-8">
          <h3 className="text-2xl font-semibold text-orange-400 mb-2">Software Engineering Graduate</h3>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <span className="text-lg font-medium text-slate-200">Bahir Dar University</span>
            <span className="text-sm text-slate-400 mt-2 md:mt-0">2019 – 2024</span>
          </div>
          <p className="text-slate-300 mb-4">
            I graduated from Bahir Dar University with a Bachelor’s degree in Software Engineering. During my academic journey, I gained a strong foundation in computer science, programming, and software development methodologies. My coursework and projects helped me develop practical skills in building scalable web applications, problem solving, and teamwork.
          </p>
          <ul className="list-disc list-inside text-slate-300 space-y-2 pl-2">
            <li>
              <span className="font-semibold text-orange-300">Core Subjects:</span> Algorithms, Data Structures, Web Development, Database Systems, Software Architecture.
            </li>
            <li>
              <span className="font-semibold text-orange-300">Projects:</span> Developed web and mobile applications as part of my degree.
            </li>
            <li>
              <span className="font-semibold text-orange-300">Teamwork:</span> Collaborated with peers on group assignments and capstone projects.
            </li>
            <li>
              <span className="font-semibold text-orange-300">Achievements:</span> Graduated with distinction and received recognition for outstanding project work.
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center mb-12">
          <Image
            src="/tempo.jpg"
            alt="Degree Certificate"
            width={400}
            height={300}
            className="rounded-lg shadow-lg mb-4 border-2 border-orange-500"
          />
          <span className="text-slate-400 text-sm">Bachelor’s Degree in Software Engineering</span>
        </div>
      </div>
    </section>
  )
}
export default Academy