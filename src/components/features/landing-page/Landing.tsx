"use client";

import Image from "next/image";
import { FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";

const Landing = () => {
  const socialLinks = [
    { icon: FaInstagram, href: "https://instagram.com/qhacksx", label: "Instagram" },
    { icon: FaLinkedin, href: "https://linkedin.com/company/qhacks", label: "LinkedIn" },
    { icon: FaTiktok, href: "https://tiktok.com/@qhacksx", label: "TikTok" },
  ];

  return (
    <main id="home" className="relative z-10 h-screen w-full bg-black select-none">
      {/* Noise texture */}
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: `url('/static/noise.png')` }}
        aria-hidden="true"
      />

      <div className="relative flex h-full w-full items-center justify-center px-4 lg:w-[70%] lg:px-0">
        {/* Glow background - at the back (z-10) */}
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <Image
            src="/static/Ellipse.svg"
            alt="glowing ellipse"
            width={1200}
            height={1200}
            className="w-[85vw] max-w-[640px] object-contain opacity-90 lg:w-[65vw]"
            quality={75}
            priority
            sizes="(min-width: 1024px) 65vw, 85vw"
          />
        </div>

        {/* Crown - middle layer (z-20) */}
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <Image
            src="/static/crown.png"
            alt="QHacks crown"
            width={600}
            height={500}
            className="pointer-events-none w-[320px] -translate-y-3 opacity-70 mix-blend-screen sm:w-[420px] sm:-translate-y-4 md:w-[480px] lg:w-[520px]"
            priority
            quality={90}
            sizes="(min-width: 1024px) 520px, (min-width: 768px) 480px, (min-width: 640px) 420px, 320px"
          />
        </div>

        {/* QHacks 2026 text and actions - on top (z-30) */}
        <div className="pointer-events-none absolute inset-0 z-30 flex translate-y-8 flex-col items-center justify-center gap-5 text-center sm:translate-y-10">
          <div className="flex flex-col items-center gap-1">
            <h1
              className="text-[44px] leading-tight font-bold tracking-tight text-[#e7dfcf] sm:text-[56px] md:text-[68px] lg:text-[76px]"
              style={{ fontFamily: "'Space Grotesk', 'Inter', system-ui, sans-serif" }}
            >
              QHacks
            </h1>
            <p
              className="text-[30px] leading-tight font-semibold tracking-tight text-[#c3a046] sm:text-[40px] md:text-[50px] lg:text-[58px]"
              style={{ fontFamily: "'Space Grotesk', 'Inter', system-ui, sans-serif" }}
            >
              2026
            </p>
          </div>

          <div className="pointer-events-auto flex items-center gap-3 sm:gap-4 lg:gap-5">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-white/70 transition-colors duration-200 hover:text-white active:scale-95"
                >
                  <Icon className="h-6 w-6" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* RIGHT SIDE – Projector */}
      <div className="hidden h-full w-[30%] items-end justify-end lg:flex">
        <div className="absolute top-0 right-0 h-full w-auto">
          <Image
            src="/static/projector.svg"
            alt="projector"
            width={2000}
            height={13}
            className="pointer-events-none h-full w-auto object-contain opacity-80 mix-blend-lighten brightness-[0.85] drop-shadow-2xl select-none"
            quality={82}
            sizes="(min-width: 1024px) 30vw, 60vw"
          />
        </div>
      </div>
    </main>
  );
};

export default Landing;
