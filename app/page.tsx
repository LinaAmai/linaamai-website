export default function Home() {
  return (
    <main className="relative h-screen w-screen overflow-hidden bg-black">
      <video
        className="absolute inset-0 h-full w-full object-cover object-center"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/lina-presence.png"
        aria-label="Lina Amai presente"
      >
        <source src="/videos/lina-presence.mp4" type="video/mp4" />
      </video>

      <div className="pointer-events-none absolute inset-0 bg-black/5" />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/40 to-transparent" />

      <p className="absolute bottom-7 left-8 text-[10px] font-medium uppercase tracking-[0.5em] text-white/45">
        Lina Amai
      </p>
    </main>
  );
}