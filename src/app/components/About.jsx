import React from 'react'
import Link from 'next/link'
import { MonitorSmartphone, Server, FileText, Database } from 'lucide-react'

const About = () => {
  return (
   <section id="about" className=" bg-slate-800 text-white py-16 px-4 md:px-8">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-4">What I Do</h2>
    <p className="text-gray-300 mb-12">
      I am a detail-oriented Full-Stack Web Developer with a strong foundation in building dynamic, scalable, and user-centric applications. Adept at developing seamless front-end interfaces and robust back-end architectures using modern technologies like React, Next.js, Node.js, and databases like PostgreSQL and MongoDB. Experienced in managing end-to-end development life-cycles—from database design and API integration to UI/UX implementation and deployment. Passionate about writing clean, maintainable code to deliver outstanding digital experiences that meet both client and business objectives.

    </p>



    <div className="mt-10">
      <Link href="/about" className="inline-block bg-transparent border border-[#38BDF8] text-[#38BDF8] font-semibold px-8 py-2 rounded-lg hover:bg-[#38BDF8] hover:text-white transition-all duration-300">
        See More
      </Link>
    </div>

  </div>
</section>
  )
}

export default About