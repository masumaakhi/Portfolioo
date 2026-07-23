import React from 'react'
import { MonitorSmartphone, Server, FileText, Database } from 'lucide-react'

const About = () => {
  return (
   <section id="about" className=" bg-slate-800 text-white py-16 px-4 md:px-8">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-4">What I do</h2>
    <p className="text-gray-300 mb-12">
      Driven and detail-oriented Full-Stack Web Developer with a strong foundation in building dynamic, scalable, and user-centric applications. Adept at developing seamless front-end interfaces and robust back-end architectures using modern technologies like React, Next.js, Node.js, and databases like PostgreSQL and MongoDB. Experienced in managing end-to-end development life-cycles—from database design and API integration to UI/UX implementation and deployment. Passionate about writing clean, maintainable code to deliver outstanding digital experiences that meet both client and business objectives.

    </p>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
  {/** Front-End Development */}
  <div className="flex flex-col items-center bg-slate-700 p-6 rounded-lg shadow-md hover:bg-slate-600 hover:shadow-lg transition-shadow duration-300">
    <div className="flex items-center justify-center gap-4 mb-3">
      <MonitorSmartphone className="text-[#38BDF8]" size={32} />
      <h3 className="text-xl font-semibold">Front-End Development</h3>
    </div>
    <p className="text-gray-400 text-sm text-center">
      Front-End Development refers to the process of building the user-facing part of a website or application using technologies like HTML, CSS, JavaScript, Typescript and frameworks like React and Next.js to create interactive and visually appealing interfaces.
    </p>
  </div>
   
    <div className="flex flex-col items-center bg-slate-700 p-6 rounded-lg shadow-md hover:bg-slate-600 hover:shadow-lg transition-shadow duration-300">
    <div className="flex items-center justify-center gap-4 mb-3">
      <Database className="text-[#38BDF8]" size={32} />
      <h3 className="text-xl font-semibold">Back-End Development</h3>
    </div>
    <p className="text-gray-400 text-sm text-center">
      Back-End Development involves server-side logic, database management, and API integration. I build robust and scalable architectures using technologies like Node.js, Express, NestJS, and databases like PostgreSQL and MongoDB, MySQL to ensure secure and efficient data handling.
    </p>
  </div>

  {/** MERN Development */}
  <div className="flex flex-col items-center bg-slate-700 p-6 rounded-lg shadow-md hover:bg-slate-600 hover:shadow-lg transition-shadow duration-300">
    <div className="flex items-center justify-center gap-4 mb-3">
      <Server className="text-[#38BDF8]" size={32} />
      <h3 className="text-xl font-semibold">MERN Development</h3>
    </div>
    <p className="text-gray-400 text-sm text-center">
      MERN Development involves building full-stack web applications using MongoDB, Express.js, React, and Node.js to handle both front-end interfaces and back-end logic seamlessly.
    </p>
  </div>

  {/** System Analysis and Documentation */}
  <div className="flex flex-col items-center bg-slate-700 p-6 rounded-lg shadow-md hover:bg-slate-600 hover:shadow-lg transition-shadow duration-300">
    <div className="flex items-center justify-center gap-4 mb-3">
      <FileText className="text-[#38BDF8]" size={32} />
      <h3 className="text-xl font-semibold">System Analysis and Documentation</h3>
    </div>
    <p className="text-gray-400 text-sm text-center">
      System Analysis and Documentation involves understanding user requirements, analyzing system needs, and creating structured documents like SRS, use case diagrams, and process models to guide software development.
    </p>
  </div>
</div>

  </div>
</section>
  )
}

export default About