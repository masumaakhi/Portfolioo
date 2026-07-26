import Link from "next/link";
import {
  GraduationCap,
  Briefcase,
  Award,
  MapPin,
  Calendar,
  Download,
  ArrowLeft,
  Star,
  MonitorSmartphone,
  Server,
  FileText,
  Database,
  ExternalLink,
} from "lucide-react";

export const metadata = {
  title: "About Me",
  description:
    "Learn more about Masuma Akter Akhi — Full-stack Web Developer from Bangladesh. B.Sc. in Software Engineering at Daffodil International University.",
};

const educationData = [
  {
    institution: "Daffodil International University",
    location: "Dhaka, Bangladesh",
    degree: "B.Sc. in Software Engineering (Major in Data Science)",
    duration: "2023 – 2027",
    result: "CGPA: 3.75 (Current)",
    icon: "🎓",
  },
  {
    institution: "I.E.S School and College",
    location: "Dhaka, Bangladesh",
    degree: "Higher Secondary Certificate (HSC)",
    duration: "2020",
    result: "GPA: 4.58",
    icon: "🏫",
  },
];

const experienceData = [
  {
    role: "Web Developer",
    company: "Bot Bari",
    duration: "Jan 2026 – Present",
    type: "Remote",
    location: "Mirpur, Dhaka, Bangladesh",
    points: [
      "Developing and maintaining responsive, user-friendly web applications using React.js and Next.js.",
      "Collaborating with the team to design, build, and deploy new features.",
      "Writing clean, scalable, and efficient code while adhering to best practices.",
      "Integrating RESTful APIs and optimizing application performance for better user experience.",
      "Troubleshooting, debugging, and resolving issues to ensure seamless functionality."
    ],
  },
];

const certificateData = [
  {
    title: "Frontend Developer (React)",
    issuer: "HackerRank",
    date: "October 31, 2024",
    id: "D5F46F2565DD",
    link: "https://www.hackerrank.com/certificates/D5F46F2565DD",
    color: "from-green-500 to-emerald-600",
    icon: "⚡",
  },
  {
    title: "AWS Academy Graduate - Machine Learning Foundations",
    issuer: "AWS Academy",
    date: "04/30/2026",
    id: "142IDFak",
    link: "https://www.credly.com/go/142IDFak",
    color: "from-orange-500 to-yellow-600",
    icon: "☁️",
  },
  {
    title: "Critical Thinking for Professional Success",
    issuer: "GoEdu",
    date: "April 22, 2025",
    id: "744f630fd98e40a5...",
    link: "https://goedu.ac/certificate/744f630fd98e40a59ec5852aae6ad2b1",
    color: "from-yellow-400 to-amber-500",
    icon: "🏅",
  },
];

const currentlyExploringData = [
  {
    title: "Artificial Intelligence (AI)",
    icon: "🤖",
    focus: "AI concepts, LLM, intelligent systems",
    progress: 65,
    skills: [
      "AI Fundamentals", "Intelligent Systems", "Prompt Engineering", 
      "Large Language Models (LLMs)", "AI APIs (OpenAI, Gemini)", 
      "AI Agents (Learning)", "Computer Vision (Basics)", "Natural Language Processing (Basics)"
    ]
  },
  {
    title: "Machine Learning (ML)",
    icon: "🧠",
    focus: "Traditional ML",
    progress: 60,
    skills: [
      "Scikit-learn", "Supervised Learning", "Unsupervised Learning",
      "Feature Engineering", "Model Evaluation", "Regression",
      "Classification", "Clustering", "Cross Validation", "Hyperparameter Tuning"
    ]
  },
  {
    title: "Deep Learning (DL)",
    icon: "🧬",
    focus: "Neural Networks",
    progress: 45,
    skills: [
      "Neural Networks", "PyTorch", "TensorFlow", "CNN", "RNN",
      "Transformers", "Transfer Learning", "Model Training", "Model Optimization"
    ]
  },
  {
    title: "Data Science",
    icon: "📊",
    focus: "Data Analysis & Visualization",
    progress: 70,
    skills: [
      "NumPy", "Pandas", "Data Analysis", "Data Cleaning",
      "Exploratory Data Analysis (EDA)", "Data Visualization",
      "Statistics", "Probability", "Feature Engineering"
    ]
  },
  {
    title: "Data Engineering",
    icon: "🏗️",
    focus: "Future Main Focus",
    progress: 30,
    skills: [
      "ETL Pipelines", "Apache Spark", "Apache Airflow", "Apache Kafka",
      "Data Warehousing", "Data Lakes", "SQL Optimization",
      "Batch Processing", "Stream Processing", "Data Pipeline Design"
    ]
  },
  {
    title: "Cloud & DevOps",
    icon: "☁️",
    focus: "Deployment & Infrastructure",
    progress: 50,
    skills: [
      "Docker", "Kubernetes", "AWS", "Google Cloud Platform (GCP)",
      "CI/CD", "GitHub Actions", "Linux", "Nginx",
      "Terraform (Basics)", "Monitoring (Prometheus, Grafana)"
    ]
  }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      {/* Back Button */}
      <div className="max-w-6xl mx-auto px-6 pt-24 pb-2">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors text-sm"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>
      </div>

      {/* HERO SECTION */}
      <section className="max-w-5xl mx-auto px-6 pt-4 pb-12">
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600 p-6 md:p-8">
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative">
            <p className="text-cyan-400 font-medium tracking-widest uppercase text-xs mb-2">
              Full-stack Web Developer
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">
              Hi, I&apos;m{" "}
              <span className="text-[#38BDF8]">
                Masuma Akter Akhi
              </span>
            </h1>
            <p className="text-gray-300 max-w-3xl leading-relaxed mb-4 text-sm md:text-base">
              I&apos;m a passionate Full-Stack Web Developer and Data Science enthusiast from Bangladesh, currently pursuing a B.Sc. in Software Engineering with a major in Data Science at Daffodil International University. I enjoy building scalable, high-performance web applications and data-driven systems using modern technologies. My interests include Data Engineering, Cloud Computing, Artificial Intelligence, and software architecture. I am always looking to contribute to impactful industry solutions.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-5 py-2 rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/40 text-sm"
              >
                <Download size={16} />
                Download Resume
              </a>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 border border-slate-500 hover:border-cyan-400 text-gray-300 hover:text-cyan-400 font-semibold px-5 py-2 rounded-xl transition-all duration-300 text-sm"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MY STORY */}
      <section className="w-full bg-slate-800/70 border-t border-slate-700/50 py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="text-cyan-400">✦</span> My Story
          </h2>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 border-l-2 border-cyan-500 pl-4 py-1">
              <h3 className="text-sm font-semibold text-white mb-2">How it started</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                My journey into web development began with a simple curiosity —
                how do websites actually work? That curiosity quickly turned into
                a passion as I discovered the power of turning ideas into
                interactive experiences through code.
              </p>
            </div>
            <div className="flex-1 border-l-2 border-purple-500 pl-4 py-1">
              <h3 className="text-sm font-semibold text-white mb-2">What drives me</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                I&apos;m driven by the challenge of solving real problems through
                elegant code. Whether it&apos;s crafting pixel-perfect UIs or
                building robust backend architectures, I strive to write clean,
                maintainable, and scalable code that makes a difference.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AREAS OF EXPERTISE */}
      <section className="w-full bg-slate-800/70 border-t border-slate-700/50 py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="text-cyan-400">✦</span> Areas of Expertise
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {/* Front-End Development */}
            <div className="flex flex-col items-start bg-slate-800 border border-slate-700 p-6 rounded-xl hover:border-cyan-500/40 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-3">
                <MonitorSmartphone className="text-cyan-400" size={28} />
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">Front-End Development</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Front-End Development refers to the process of building the user-facing part of a website or application using technologies like HTML, CSS, JavaScript, Typescript and frameworks like React and Next.js to create interactive and visually appealing interfaces.
              </p>
            </div>
            
            {/* Back-End Development */}
            <div className="flex flex-col items-start bg-slate-800 border border-slate-700 p-6 rounded-xl hover:border-cyan-500/40 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-3">
                <Database className="text-cyan-400" size={28} />
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">Back-End Development</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Back-End Development involves server-side logic, database management, and API integration. I build robust and scalable architectures using technologies like Node.js, Express, NestJS, and databases like PostgreSQL and MongoDB, MySQL to ensure secure and efficient data handling.
              </p>
            </div>

            {/* MERN Development */}
            <div className="flex flex-col items-start bg-slate-800 border border-slate-700 p-6 rounded-xl hover:border-cyan-500/40 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-3">
                <Server className="text-cyan-400" size={28} />
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">MERN Development</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                MERN Development involves building full-stack web applications using MongoDB, Express.js, React, and Node.js to handle both front-end interfaces and back-end logic seamlessly.
              </p>
            </div>

            {/* System Analysis and Documentation */}
            <div className="flex flex-col items-start bg-slate-800 border border-slate-700 p-6 rounded-xl hover:border-cyan-500/40 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-3">
                <FileText className="text-cyan-400" size={28} />
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">System Analysis and Documentation</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                System Analysis and Documentation involves understanding user requirements, analyzing system needs, and creating structured documents like SRS, use case diagrams, and process models to guide software development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CURRENTLY EXPLORING */}
      <section className="w-full py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="text-cyan-400">✦</span> Currently Exploring
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {currentlyExploringData.map((item, i) => (
              <div 
                key={i} 
                className="relative bg-slate-800/30 backdrop-blur-sm border border-slate-700/60 p-6 rounded-2xl hover:bg-slate-800/60 hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)] transition-all duration-500 group flex flex-col overflow-hidden"
              >
                {/* Top Glowing Border on Hover */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500/0 to-transparent group-hover:via-cyan-400 transition-all duration-500"></div>

                <div className="flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-slate-900/50 border border-slate-700/50 flex items-center justify-center text-2xl group-hover:border-cyan-500/40 group-hover:scale-110 transition-all duration-300 shadow-inner flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[17px] font-bold text-white leading-tight mb-1 truncate">{item.title}</h3>
                    {item.focus && <p className="text-cyan-400 font-medium text-[13px] mb-3 truncate">{item.focus}</p>}
                    
                    {/* Progress Bar */}
                    <div className="mt-5 mb-2 flex items-center gap-3 w-full">
                      <div className="relative flex-1 rounded-full h-2 overflow-hidden" style={{ background: '#1e293b' }}>
                        {/* Full-width gradient background */}
                        <div 
                          className="absolute inset-0 rounded-full"
                          style={{ background: 'linear-gradient(to right, #22d3ee, #3b82f6, #d946ef)' }}
                        ></div>
                        {/* Dark overlay from the right to mask unfilled portion */}
                        <div
                          className="absolute right-0 top-0 bottom-0 transition-all duration-1000 ease-out"
                          style={{ 
                            width: `${100 - item.progress}%`,
                            background: '#0f172a'
                          }}
                        ></div>
                      </div>
                      <span className="text-[13px] font-bold text-cyan-400">{item.progress}%</span>
                    </div>
                  </div>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2.5 pt-6">
                  {item.skills.map((skill, idx) => (
                    <span 
                      key={idx} 
                      className="bg-slate-700 text-[#F8FAFC] px-3 py-2 rounded-[24px] text-[11px] font-medium border border-[#38BDF8]/50 hover:border-[#38BDF8] hover:bg-slate-600 grow text-center transition-all duration-300 cursor-default shadow-sm hover:shadow-[#38BDF8]/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="w-full bg-slate-800/40 border-y border-slate-700/50 py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <GraduationCap className="text-cyan-400" size={24} /> Education
          </h2>
          <div className="flex flex-col gap-4 mt-2">
            {educationData.map((edu, i) => (
              <div
                key={i}
                className="bg-slate-800/40 border border-cyan-700 p-6 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-slate-800/80 hover:border-cyan-500/70 transition-all duration-300 group"
              >
                {/* Left Side */}
                <div className="flex items-start md:items-center gap-4">
                  <div className="text-2xl mt-1 md:mt-0 flex-shrink-0 bg-slate-800/50 p-3 rounded-xl border border-cyan-500/50 group-hover:border-cyan-500/30 transition-colors">
                    {edu.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base md:text-lg font-bold text-white mb-1">
                      {edu.institution}
                    </h3>
                    <p className="text-cyan-300 text-sm md:text-[15px] mb-2">
                      {edu.degree}
                    </p>
                    <div className="flex items-center gap-1.5 text-gray-400 text-sm">
                      <MapPin size={14} />
                      {edu.location}
                    </div>
                  </div>
                </div>

                {/* Right Side */}
                <div className="flex flex-col items-start md:items-end gap-2.5">
                  <div className="flex items-center gap-1.5 text-cyan-400 font-semibold text-sm">
                    <Calendar size={14} />
                    {edu.duration}
                  </div>
                  <span className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-medium rounded-full">
                    {edu.result}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="w-full bg-slate-800/70 border-t border-slate-700/50 py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Briefcase className="text-cyan-400" size={24} /> Experience
          </h2>
          <div className="space-y-4 mt-2">
            {experienceData.map((exp, i) => (
              <div
                key={i}
                className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-t-2 border-cyan-500 rounded-2xl p-6 shadow-xl shadow-cyan-500/10 hover:shadow-cyan-500/20 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                    <p className="text-cyan-400 font-semibold text-sm mb-4">{exp.company}</p>
                    <ul className="list-disc list-outside ml-4 text-gray-300 leading-relaxed text-sm mb-5 space-y-2 marker:text-cyan-500">
                      {exp.points?.map((point, idx) => (
                        <li key={idx} className="pl-1">{point}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      <span className="flex items-center gap-1 text-xs text-gray-400 bg-slate-800/50 px-2 py-1 rounded border border-slate-700">
                        <MapPin size={12} /> {exp.location}
                      </span>
                      <span className="inline-block bg-green-500/10 border border-green-500/30 text-green-400 text-xs px-2 py-1 rounded">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center gap-1.5 text-cyan-400 font-semibold text-sm bg-cyan-500/10 px-3 py-1.5 rounded-full border border-cyan-500/20">
                      <Calendar size={14} />
                      <span>{exp.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATES */}
      <section className="w-full bg-slate-800/20 border-t border-slate-700/50 py-12 md:py-16 pb-20 md:pb-24">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Award className="text-cyan-400" size={24} /> Achievements &amp; Certificates
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            {certificateData.map((cert, i) => (
              <div
                key={i}
                className="relative bg-slate-800/40 border border-slate-700 p-6 rounded-2xl hover:bg-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 group"
              >
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-5 right-5 text-gray-400 hover:text-cyan-400 transition-colors"
                    title="Verify Certificate"
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
                
                <div className="flex gap-4">
                  <div className="text-2xl mt-0.5 flex-shrink-0">
                    {cert.icon}
                  </div>
                  <div className="flex-1 pr-6">
                    <h3 className="text-[15px] font-bold text-white leading-tight mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-cyan-400 text-sm font-medium mb-3">
                      {cert.issuer}
                    </p>
                    <div className="space-y-1.5 text-gray-400 text-xs">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={13} /> {cert.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Star size={13} /> ID: {cert.id}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
