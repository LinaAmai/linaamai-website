"use client";

import Link from "next/link";
import { useState } from "react";
import PlatformDock from "./PlatformDock";

type OpenPanel = "left" | "right" | null;

const leftItems = [
  { label: "Quem é Lina", href: "/quem-e-lina" },
  { label: "Músicas", href: "/musicas" },
  { label: "Universos", href: "/universos" },
  { label: "Galeria", href: "/galeria" },
  { label: "Revista", href: "/revista" },
  { label: "Colecionáveis", href: "/colecionaveis" },
  { label: "Linha do tempo", href: "/linha-do-tempo" },
  { label: "Imprensa", href: "/imprensa" },
    {
     label: "Galeria AI Brasil ↗",
     href: "https://galeria.aibrasil.ai/",
     external: true,
  },
];

const rightItems = [
  { label: "Comunidade", href: "/comunidade" },
  { label: "Fragmentos", href: "/fragmentos" },
  { label: "Agenda", href: "/agenda" },
  { label: "Conversar com Lina", href: "/conversar" },
  { label: "Fãs colaboradores", href: "/fas-colaboradores" },
  { label: "Guardiões", href: "/guardioes" },
  {
    label: "Apoiar ↗",
    href: "https://livepix.gg/linaamai",
    external: true,
  },
  { label: "Parceiros", href: "/parceiros" },
  { label: "Loja", href: "/loja" },
];

export default function PresenceNavigation() {
  const [openPanel, setOpenPanel] = useState<OpenPanel>(null);

function closeEverything() {
  setOpenPanel(null);
  window.dispatchEvent(new Event("close-presence-ui"));
}

  return (
    <>
      {/* Área central: tocar/clicar na Lina recolhe qualquer menu */}
      <button
        type="button"
        aria-label="Fechar navegação"
        onClick={closeEverything}
        className="absolute inset-0 z-10 cursor-default bg-transparent"
      />

      {/* Zona invisível da borda esquerda */}
      <div
        aria-hidden="true"
        onMouseEnter={() => setOpenPanel("left")}
        className="absolute inset-y-0 left-0 z-40 hidden w-7 md:block"
      />

      {/* Botão discreto para toque na esquerda */}
      <button
        type="button"
        aria-label="Abrir menu para conhecer Lina"
        aria-expanded={openPanel === "left"}
        onClick={() =>
          setOpenPanel(openPanel === "left" ? null : "left")
        }
        className="absolute left-0 top-1/2 z-50 flex h-24 w-7 -translate-y-1/2 items-center justify-center md:hidden"
      >
        <span className="h-10 w-px bg-white/35" />
      </button>

      {/* Painel esquerdo */}
      <aside
        onMouseLeave={() => {
          if (window.matchMedia("(hover: hover)").matches) {
            setOpenPanel(null);
          }
        }}
        className={`absolute inset-y-0 left-0 z-40 flex h-[100dvh] w-[88vw] max-w-[380px] flex-col justify-start overflow-y-auto bg-gradient-to-r from-black/75 via-black/45 to-transparent px-8 py-12 pr-20 backdrop-blur-md transition-transform duration-500 ease-out md:w-[380px] md:justify-center md:py-8 ${
          openPanel === "left"
            ? "translate-x-0"
            : "-translate-x-full"
        }`}
      >
        <p className="mb-8 text-[10px] uppercase tracking-[0.45em] text-white/45">
          Conheça Lina
        </p>

        <nav aria-label="Conheça Lina">
          <ul className="space-y-4">
            {leftItems.map((item) => (
              <li key={item.href}>
                {"external" in item && item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeEverything}
                    className="group flex items-center gap-3 text-lg font-light text-white/72 transition-colors duration-300 hover:text-white"
                  >
                    <span className="h-px w-0 bg-white/70 transition-all duration-300 group-hover:w-5" />
                    {item.label}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    onClick={closeEverything}
                    className="group flex items-center gap-3 text-lg font-light text-white/72 transition-colors duration-300 hover:text-white"
                  >
                    <span className="h-px w-0 bg-white/70 transition-all duration-300 group-hover:w-5" />
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Zona invisível da borda direita */}
      <div
        aria-hidden="true"
        onMouseEnter={() => setOpenPanel("right")}
        className="absolute inset-y-0 right-0 z-40 hidden w-7 md:block"
      />

      {/* Botão discreto para toque na direita */}
      <button
        type="button"
        aria-label="Abrir menu de participação"
        aria-expanded={openPanel === "right"}
        onClick={() =>
          setOpenPanel(openPanel === "right" ? null : "right")
        }
        className="absolute right-0 top-1/2 z-50 flex h-24 w-7 -translate-y-1/2 items-center justify-center md:hidden"
      >
        <span className="h-10 w-px bg-white/35" />
      </button>

      {/* Painel direito */}
      <aside
        onMouseLeave={() => {
          if (window.matchMedia("(hover: hover)").matches) {
            setOpenPanel(null);
          }
        }}
        className={`absolute inset-y-0 right-0 z-40 flex h-[100dvh] w-[88vw] max-w-[380px] flex-col justify-start overflow-y-auto bg-gradient-to-l from-black/75 via-black/45 to-transparent px-8 py-12 pl-20 backdrop-blur-md transition-transform duration-500 ease-out md:w-[380px] md:justify-center md:py-8 ${
          openPanel === "right"
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >
        <p className="mb-8 text-right text-[10px] uppercase tracking-[0.45em] text-white/45">
          Participe
        </p>

        <nav aria-label="Participe do universo da Lina">
          <ul className="space-y-4">
            {rightItems.map((item) => (
             <li key={item.href}>
              {"external" in item && item.external ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeEverything}
                  className="group flex items-center justify-end gap-3 text-right text-lg font-light text-white/72 transition-colors duration-300 hover:text-white"
                >
                  {item.label}
                  <span className="h-px w-0 bg-white/70 transition-all duration-300 group-hover:w-5" />
                </a>
              ) : (
                <Link
                  href={item.href}
                  onClick={closeEverything}
                  className="group flex items-center justify-end gap-3 text-right text-lg font-light text-white/72 transition-colors duration-300 hover:text-white"
                >
                  {item.label}
                  <span className="h-px w-0 bg-white/70 transition-all duration-300 group-hover:w-5" />
                </Link>
              )}
            </li>
          ))}
          </ul>
        </nav>
      </aside>

      <PlatformDock />
    </>
  );
}