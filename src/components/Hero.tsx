export default function Hero() {
    return (
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: "url('/wallpaper.png')" }}>
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 px-4">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 text-white">
            The Best Elo Boosting Experience
          </h1>
          <p className="text-lg md:text-xl text-glow">
            Get your Desired Rank now!
          </p>
        </div>
      </section>
    );
  }