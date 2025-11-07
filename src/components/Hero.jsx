import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] overflow-hidden bg-gradient-to-b from-neutral-950 via-neutral-900 to-black text-white">
      {/* Background 3D scene */}
      <div className="absolute inset-0 opacity-40 z-0">
        <Spline scene="https://prod.spline.design/0Cq6fKj9fdbvQO3k/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft light gradient overlay (non-blocking) */}
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_10%,rgba(255,255,255,0.25),rgba(0,0,0,0))] pointer-events-none z-0" />

      {/* Foreground content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl">
          <p className="uppercase tracking-[0.35em] text-xs text-white/70 mb-4">Streetwear Redefined</p>
          <h1 className="text-4xl sm:text-6xl font-black leading-[1.05] mb-6">
            Kalcer
            <span className="block text-transparent bg-clip-text bg-gradient-to-tr from-fuchsia-500 via-rose-400 to-amber-300">
              Built For The Streets
            </span>
          </h1>
          <p className="text-white/80 text-lg mb-10">
            Bold silhouettes. Heavy textures. Limited drops inspired by the rhythm of the city. Dress like you mean it.
          </p>
          <div className="flex items-center gap-3">
            <a href="#catalog" className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-white text-black font-semibold hover:bg-white/90">
              Shop Catalog
              <ArrowRight size={18} />
            </a>
            <a href="#about" className="px-5 py-3 rounded-md border border-white/20 hover:border-white/40">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
