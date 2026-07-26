"use client";
import { useEffect, useState } from "react";
import dynamic from 'next/dynamic';

// Dynamic import for icons to reduce bundle size
const FaInstagram = dynamic(() => import("react-icons/fa").then(mod => ({ default: mod.FaInstagram })), { ssr: false });
const FaLinkedinIn = dynamic(() => import("react-icons/fa").then(mod => ({ default: mod.FaLinkedinIn })), { ssr: false });
const FaEnvelope = dynamic(() => import("react-icons/fa").then(mod => ({ default: mod.FaEnvelope })), { ssr: false });
const FaPhoneAlt = dynamic(() => import("react-icons/fa").then(mod => ({ default: mod.FaPhoneAlt })), { ssr: false });
const FaFacebook = dynamic(() => import("react-icons/fa").then(mod => ({ default: mod.FaFacebook })), { ssr: false });
const FaGithub = dynamic(() => import("react-icons/fa").then(mod => ({ default: mod.FaGithub })), { ssr: false });
const FaTwitter = dynamic(() => import("react-icons/fa").then(mod => ({ default: mod.FaTwitter })), { ssr: false });

const Footer = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <footer id="footer" className="bg-slate-800 text-white pt-6 pb-2">
      <div className="max-w-5xl mx-auto text-center px-6">
        
        {/* Social Icons */}
        {mounted && (
          <div className="social-icons flex justify-center gap-6 text-xl mb-6">
            <a href="https://www.linkedin.com/in/masuma-akter-akhi/" target="_blank" rel="noopener noreferrer" className="icons hover:text-[#38BDF8] transition-colors">
              <FaLinkedinIn />
            </a>
            <a href="https://www.facebook.com/masuma.akhii" target="_blank" rel="noopener noreferrer" className="icons hover:text-[#38BDF8] transition-colors">
              <FaFacebook />
            </a>
            <a href="https://github.com/masumaakhi" target="_blank" rel="noopener noreferrer" className="icons hover:text-[#38BDF8] transition-colors">
              <FaGithub />
            </a>
            <a href="https://x.com/Masumaakhi12" target="_blank" rel="noopener noreferrer" className="icons hover:text-[#38BDF8] transition-colors">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com/masuma.akhii/" target="_blank" rel="noopener noreferrer" className="icons hover:text-[#38BDF8] transition-colors">
              <FaInstagram />
            </a>
          </div>
        )}

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-sm md:text-base mb-8">
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-white" />
            <span>masumaakterakhi90@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-white" />
            <span>+8801571300265</span>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-slate-600/50 w-full mb-6" />

        {/* Credits */}
        <p className="text-sm text-gray-400 pb-4">
          © {new Date().getFullYear()} All rights reserved. Designed by <span className="text-white font-semibold">Masuma</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
