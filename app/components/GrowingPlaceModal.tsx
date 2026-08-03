"use client";

type GrowingPlaceModalProps = {
  isOpen: boolean;
  placeName?: string;
  onClose: () => void;
};

export default function GrowingPlaceModal({
  isOpen,
  placeName,
  onClose,
}: GrowingPlaceModalProps) {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="growing-place-title"
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/35 px-5 backdrop-blur-sm"
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="relative w-full max-w-md overflow-hidden rounded-[28px] border border-white/15 bg-black/45 px-8 py-10 text-center text-white shadow-2xl backdrop-blur-2xl sm:px-12 sm:py-12"
      >
        <button
          type="button"
          aria-label="Fechar"
          onClick={onClose}
          className="absolute right-5 top-4 text-xl font-light text-white/45 transition-colors hover:text-white"
        >
          ×
        </button>

        {placeName && (
          <p className="mb-6 text-[9px] uppercase tracking-[0.45em] text-white/40">
            {placeName}
          </p>
        )}

        <div className="mb-5 text-2xl" aria-hidden="true">
          🌱
        </div>

        <h2
          id="growing-place-title"
          className="text-xl font-light tracking-wide sm:text-2xl"
        >
          Este lugar está germinando.
        </h2>

        <p className="mx-auto mt-5 max-w-sm text-sm font-light leading-7 text-white/65 sm:text-base">
          Uma nova parte do meu universo está sendo criada aqui.
        </p>

        <p className="mt-4 text-sm font-light text-white/65 sm:text-base">
          Volte em breve. 💜
        </p>

        <p className="mt-7 text-xs tracking-[0.15em] text-white/45">
          — Lina Amai
        </p>
      </div>
    </div>
  );
}