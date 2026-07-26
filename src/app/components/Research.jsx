import { ExternalLink, BookOpen, FileText, Users, Tag, Calendar } from "lucide-react";

const publications = [
  {
    title: "VisionBot Smart Assistive Robotic Glasses for Visually Impaired People",
    journal: "Advances in Science, Technology and Research Journal",
    volume: "Vol. 20, Issue 8, 2026 • pp. 462–475",
    authors: [
      "Farhan Ibn Mustafa",
      "Abubokor Hanip",
      "Touhid Bhuiyan",
      "Masuma Akter Akhi",
      "Yeasmin Akter",
      "Md Hafizul Imran",
    ],
    doi: "https://doi.org/10.12913/22998624/219303",
    doiShort: "10.12913/22998624/219303",
    keywords: [
      "Smart Glasses",
      "Visually Impaired",
      "Obstacle Detection",
      "GPS Navigation",
      "Audio Feedback System",
      "System Architecture",
      "Assistive System",
    ],
    topics: ["Automation Engineering", "Computer Engineering", "Engineering and Technological Design"],
    abstract:
      "Sensory impairment, such as vision loss, affects balance, spatial awareness, and independent mobility. This paper describes an affordable wearable assistive device called VisionBot, which combines ultrasonic obstacle sensors, an ESP32 microcontroller, a DFPlayer Mini voice speaker, and GPS for outdoor use.",
    license: "CC-BY 4.0",
    year: "2026",
  },
];

const Research = () => {
  return (
    <section id="research" className="bg-slate-800/60 border-t border-slate-700/70 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">

        <h1 className="text-center text-white text-4xl font-bold mb-10">Research Publications</h1>


        <div className="flex flex-col gap-8">
          {publications.map((pub, i) => (
            <div
              key={i}
              className="relative bg-slate-800/50 border rounded-2xl p-8  group overflow-hidden border-cyan-500 rounded-2xl p-6 shadow-xl shadow-cyan-500/10 hover:shadow-cyan-500/20 transition-all duration-300"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#38BDF8] to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 "></div>

              <div className="flex flex-col lg:flex-row gap-6">
                {/* Left: Main Info */}
                <div className="flex-1">
                  {/* Title + DOI Button */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                    <h3 className="text-xl font-bold text-white leading-snug max-w-2xl">
                      {pub.title}
                    </h3>
                    <a
                      href={pub.doi}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 inline-flex items-center gap-2 bg-[#38BDF8]/10 border border-[#38BDF8]/50 hover:bg-[#38BDF8]/20 hover:border-[#38BDF8] text-[#38BDF8] px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 group/btn"
                    >
                      <ExternalLink size={15} className="group-hover/btn:scale-110 transition-transform" />
                      View Paper
                    </a>
                  </div>

                  {/* Journal & Volume */}
                  <p className="text-[#38BDF8] font-medium mb-1">{pub.journal}</p>
                  <p className="text-gray-400 text-sm mb-4">{pub.volume}</p>

                  {/* DOI */}
                  <div className="flex items-center gap-2 mb-5">
                    <span className="text-gray-500 text-sm font-medium">DOI:</span>
                    <a
                      href={pub.doi}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#38BDF8] text-sm hover:underline break-all"
                    >
                      {pub.doiShort}
                    </a>
                  </div>

                  {/* Abstract */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-5 border-l-2 border-slate-600 pl-4">
                    {pub.abstract}
                  </p>

                  {/* Authors */}
                  <div className="flex items-start gap-2 mb-5">
                    <Users size={15} className="text-gray-400 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-300 text-sm">
                      {pub.authors.join(" • ")}
                    </p>
                  </div>

                  {/* Keywords */}
                  <div className="flex items-start gap-2 mb-4">
                    <Tag size={15} className="text-gray-400 mt-1 flex-shrink-0" />
                    <div className="flex flex-wrap gap-2">
                      {pub.keywords.map((kw, idx) => (
                        <span
                          key={idx}
                          className="bg-slate-700 text-gray-300 border border-slate-600 text-xs px-2.5 py-1 rounded-full"
                        >
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: Meta Info */}
                <div className="lg:w-48 flex lg:flex-col gap-4 flex-wrap">
                  <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-4 text-center">
                    <Calendar size={18} className="text-[#38BDF8] mx-auto mb-1" />
                    <p className="text-xs text-gray-400 mb-1">Published</p>
                    <p className="text-white font-bold">{pub.year}</p>
                  </div>

                  <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-4 text-center">
                    <FileText size={18} className="text-[#38BDF8] mx-auto mb-1" />
                    <p className="text-xs text-gray-400 mb-1">License</p>
                    <p className="text-white font-bold text-sm">{pub.license}</p>
                  </div>

                  <a
                    href={pub.doi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-br from-[#38BDF8]/20 to-blue-600/20 border border-[#38BDF8]/40 rounded-xl p-4 text-center hover:from-[#38BDF8]/30 hover:to-blue-600/30 hover:border-[#38BDF8] transition-all duration-200 group/link"
                  >
                    <ExternalLink size={18} className="text-[#38BDF8] mx-auto mb-1 group-hover/link:scale-110 transition-transform" />
                    <p className="text-xs text-gray-400 mb-1">Read Full</p>
                    <p className="text-[#38BDF8] font-bold text-sm">Article</p>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
