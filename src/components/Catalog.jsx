import { Star } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Core Logo Hoodie — Noir',
    price: 88,
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1543965170-4c01a586684e?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Utility Cargo Pants — Asphalt',
    price: 96,
    rating: 4.7,
    image:
      'https://images.unsplash.com/photo-1520975922117-44e6ab95b2d9?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Oversized Graphic Tee — Concrete',
    price: 42,
    rating: 4.6,
    image:
      'https://images.unsplash.com/photo-1592878904946-b3cd8ae243d5?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Puffer Jacket — Midnight',
    price: 129,
    rating: 4.9,
    image:
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1600&auto=format&fit=crop',
  },
];

function ProductCard({ product }) {
  return (
    <div className="group bg-neutral-900/60 border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition">
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-[1.03] transition duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
        <button className="absolute bottom-3 left-3 right-3 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-white text-black font-semibold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition">
          Add to Bag
        </button>
      </div>
      <div className="p-4">
        <h3 className="text-white font-semibold line-clamp-1">{product.name}</h3>
        <div className="mt-1 flex items-center justify-between text-sm text-white/80">
          <span>${product.price}</span>
          <span className="inline-flex items-center gap-1">
            <Star size={14} className="text-yellow-400 fill-yellow-400" />
            {product.rating}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Catalog() {
  return (
    <section id="catalog" className="relative bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold">Catalog</h2>
            <p className="text-white/70">A taste of the latest drop</p>
          </div>
          <a href="#" className="hidden sm:inline-flex px-4 py-2 rounded-md border border-white/20 hover:border-white/40">View All</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
