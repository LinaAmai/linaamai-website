"use client";

import { useEffect, useState } from "react";

type Platform = {
  name: string;
  icon: string;
  link: string;
};

const platforms: Platform[] = [
  {
    name: "YouTube",
    icon: "/icons/platforms/youtube.svg",
    link: "https://www.youtube.com/@LinaAmaiOfficial",
  },
  {
  name: "YouTube Music",
  icon: "/icons/platforms/youtubemusic.svg",
  link: "https://music.youtube.com/channel/UCLPJEZ5cL6-50qpG-c32AXg",
},
  {
    name: "Spotify",
    icon: "/icons/platforms/spotify.svg",
    link: "https://open.spotify.com/intl-pt/artist/1rNJgUxiFTJ7XlwDA7jr8E",
  },
  {
    name: "Apple Music",
    icon: "/icons/platforms/applemusic.svg",
    link: "https://music.apple.com/us/artist/lina-amai/1868128457",
  },
  {
    name: "Amazon Music",
    icon: "/icons/platforms/amazonmusic.svg",
    link: "https://www.amazon.com/music/player/artists/B0GG6RNLY4/lina-amai",
  },
  {
    name: "Deezer",
    icon: "/icons/platforms/deezer.svg",
    link: "https://www.deezer.com/br/artist/366850202",
  },
  {
    name: "TIDAL",
    icon: "/icons/platforms/tidal.svg",
    link: "https://tidal.com/artist/72912365",
  },
  {
    name: "Qobuz",
    icon: "/icons/platforms/qobuz.svg",
    link: "https://www.qobuz.com/us-en/interpreter/lina-amai/30496499",
  },
  {
    name: "Anghami",
    icon: "/icons/platforms/anghami.svg",
    link: "https://play.anghami.com/artist/26900341",
  },
  {
    name: "TikTok",
    icon: "/icons/platforms/tiktok.svg",
    link: "https://www.tiktok.com/@lina_amai",
  },
  {
    name: "Instagram",
    icon: "/icons/platforms/instagram.svg",
    link: "https://www.instagram.com/lina.amai00/",
  },
  {
    name: "Substack",
    icon: "/icons/platforms/substack.svg",
    link: "https://linaamai.substack.com/",
  },
];

export default function PlatformDock() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
  function closeDock() {
    setIsOpen(false);
    setHoveredIndex(null);
  }

  window.addEventListener("close-presence-ui", closeDock);

  return () => {
    window.removeEventListener("close-presence-ui", closeDock);
  };
}, []);

  function getScale(index: number) {
    if (hoveredIndex === null) return 1;

    const distance = Math.abs(index - hoveredIndex);

    if (distance === 0) return 1.55;
    if (distance === 1) return 1.25;

    return 1;
  }

  function closeOnDesktop() {
    if (window.matchMedia("(hover: hover)").matches) {
      setIsOpen(false);
      setHoveredIndex(null);
    }
  }

  return (
    <>
      {/* Área invisível que revela o Dock no computador */}
      <div
        aria-hidden="true"
        onMouseEnter={() => setIsOpen(true)}
        className="absolute inset-x-0 bottom-0 z-40 hidden h-12 md:block"
      />

      {/* Pequeno indicador de toque no celular e tablet */}
      <button
        type="button"
        aria-label="Abrir plataformas da Lina"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
        className="absolute bottom-0 left-1/2 z-[60] flex h-8 w-28 -translate-x-1/2 items-center justify-center md:hidden"
      >
        <span className="h-px w-12 bg-white/35" />
      </button>

      {/* Logos emergindo da escuridão — sem bandeja */}
      <footer
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={closeOnDesktop}
        className={`absolute inset-x-0 bottom-0 z-50 flex justify-center px-4 pb-5 pt-12 transition-all duration-500 ease-out ${
          isOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-10 opacity-0"
        }`}
      >
        <nav aria-label="Plataformas oficiais da Lina">
          <ul className="flex flex-wrap items-end justify-center gap-4 sm:gap-5 md:flex-nowrap md:gap-6">
            {platforms.map((platform, index) => {
              const isHovered = hoveredIndex === index;
              const scale = getScale(index);

              return (
                <li
                  key={platform.link}
                  className="relative flex items-end justify-center"
                  style={{
                    transform: `scale(${scale}) translateY(${
                      isHovered ? "-6px" : "0"
                    })`,
                    transition:
                      "transform 260ms cubic-bezier(0.22, 1, 0.36, 1)",
                  }}
                >
                  <a
                    href={platform.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${platform.name} — abre em uma nova aba`}
                    title={platform.name}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onFocus={() => setHoveredIndex(index)}
                    onBlur={() => setHoveredIndex(null)}
                    onTouchStart={() => setHoveredIndex(index)}
                    className="group relative flex h-9 w-9 items-center justify-center drop-shadow-[0_2px_7px_rgba(0,0,0,0.9)]"
                  >
                    <img
                      src={platform.icon}
                      alt=""
                      aria-hidden="true"
                      className="h-7 w-7 object-contain brightness-0 invert opacity-90 transition-all duration-300 group-hover:opacity-100"
                    />
                  
                    <span
                      className={`pointer-events-none absolute bottom-full mb-4 whitespace-nowrap rounded-full bg-black/55 px-3 py-1.5 text-[9px] uppercase tracking-[0.22em] text-white backdrop-blur-md transition-all duration-300 ${
                        isHovered
                          ? "translate-y-0 opacity-100"
                          : "translate-y-2 opacity-0"
                      }`}
                    >
                      {platform.name}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </footer>
    </>
  );
}