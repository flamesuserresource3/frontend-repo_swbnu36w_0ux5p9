import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="about" className="bg-neutral-950 text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-extrabold">Kalcer</h3>
            <p className="mt-2 text-white/70 max-w-md">
              Street-born apparel engineered for movement. We design bold staples with premium feel and everyday grit.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <a href="#" aria-label="Instagram" className="p-2 rounded-md hover:bg-white/10"><Instagram size={18} /></a>
              <a href="#" aria-label="Twitter" className="p-2 rounded-md hover:bg-white/10"><Twitter size={18} /></a>
              <a href="#" aria-label="Facebook" className="p-2 rounded-md hover:bg-white/10"><Facebook size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Help</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-white">Shipping</a></li>
              <li><a href="#" className="hover:text-white">Returns</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Press</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-white/10 text-sm text-white/60 flex flex-col sm:flex-row items-center justify-between">
          <p>© {new Date().getFullYear()} Kalcer. All rights reserved.</p>
          <div className="space-x-4 mt-3 sm:mt-0">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
