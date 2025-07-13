import React from "react"
import Image from "next/image"

const Experience = () => {
  return (
    <section className="py-16 px-6 bg-slate-900 min-h-screen text-white">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-4xl font-bold mb-6 text-orange-500">Experience</h2>
        <p className="text-lg text-slate-300 mb-8">
<h2 className="text-orange-500" >Full-Stack Developer</h2> <br />
EagleLion Company <br />
july,2024 – Aug, 2025 <br />

As a Full Stack Developer at EagleLion Company, I worked on developing a budget tracker website to help users manage their finances. My main responsibilities included: <br />

Frontend Development: Built user-friendly interfaces using React.js, HTML, and CSS to ensure a smooth experience for users.
Backend Development: Created server-side applications with Node.js and Express.js for secure data management.
Database Management: Set up a MongoDB database to store user information and transactions.
API Integration: Connected third-party APIs for payment processing and analytics features.
Team Collaboration: Worked with designers and project managers to meet user needs and project goals.
Testing and Deployment: Tested the application for bugs and deployed it to a cloud platform for users.
        </p>
        <div className="flex flex-col items-center">
          <Image
            src="/eagle.jpg"
            alt="Certification"
            width={400}
            height={300}
            className="rounded-lg shadow-lg mb-4"
          />
          <span className="text-slate-400 text-sm">Certified Frontend Developer</span>
        </div>
      </div>
    </section>
  )
}

export default Experience