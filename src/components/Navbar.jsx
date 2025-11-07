import { useState } from 'react';
import { ShoppingBag, Search, Menu } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'Catalog', href: '#catalog' },
    { label: 'About', href: '#about' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-md bg-gradient-to-tr from-fuchsia-600 via-rose-600 to-amber-400 animate-pulse" />
          <span className="text-2xl font-extrabold tracking-tight text-white">
            Kalcer
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-white/80 hover:text-white transition"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button aria-label="Search" className="p-2 rounded-md hover:bg-white/10 text-white">
            <Search size={20} />
          </button>
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white text-black font-semibold hover:bg-white/90">
            <ShoppingBag size={18} />
            <span>Bag</span>
          </button>
        </div>

        <button
          className="md:hidden p-2 rounded-md text-white hover:bg-white/10"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <Menu />
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/10">
          <div className="px-4 py-3 space-y-2 bg-black/80">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block text-white/90 hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-3 pt-3">
              <button aria-label="Search" className="p-2 rounded-md hover:bg-white/10 text-white">
                <Search size={20} />
              </button>
              <button className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white text-black font-semibold hover:bg-white/90">
                <ShoppingBag size={18} />
                <span>Bag</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
