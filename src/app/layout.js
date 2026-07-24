export const metadata = {
  metadataBase: new URL("https://masumaakhi.vercel.app"),
  title: {
    default: "Masuma Akter Akhi - Full-stack Web Developer",
    template: "%s | Masuma Akter Akhi"
  },
  description: "Full-stack Web Developer specializing in JavaScript, TypeScript, Next.js, React.js, Express.js, NestJS, PostgreSQL, MySQL, and MongoDB. Building scalable, performant, and user-centric web applications.",
  keywords: [
    "Full-stack Developer",
    "Web Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "React Developer",
    "Next.js Developer",
    "Express.js Developer",
    "NestJS Developer",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "MERN Stack Developer",
    "Portfolio",
    "Masuma Akter Akhi"
  ],
  authors: [{ name: "Masuma Akter Akhi" }],
  creator: "Masuma Akter Akhi",
  publisher: "Masuma Akter Akhi",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://masumaakhi.vercel.app',
    title: 'Masuma Akter Akhi - Full-stack Web Developer',
    description: 'Full-stack Web Developer specializing in JavaScript, TypeScript, Next.js, React.js, Express.js, NestJS, PostgreSQL, MySQL, and MongoDB.',
    siteName: 'Masuma Akter Akhi Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Masuma Akter Akhi - Full-stack Web Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Masuma Akter Akhi - Full-stack Web Developer',
    description: 'Full-stack Web Developer specializing in JavaScript, TypeScript, Next.js, React.js, Express.js, NestJS, PostgreSQL, MySQL, and MongoDB.',
    images: ['/og-image.jpg'],
    creator: '@Masumaakhi',
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#38BDF8' },
    ],
  },
  manifest: '/site.webmanifest',
  verification: {
    google: 'OJL-XPo9s0hWGePNe1GlC-bqd2TWA5D8IUtjGWl1rDQ',
  },
};

import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import PerformanceMonitor from "./components/PerformanceMonitor";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <PerformanceMonitor />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
