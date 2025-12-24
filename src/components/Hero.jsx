 import { useState } from "react";
import MenuOverlay from "./MenuOverlay";
 
function Hero() {
    const [showMenu, setShowMenu] = useState(false);
  return (
    <section
      id="home"
      className="min-h-screen bg-cover bg-center flex items-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1511920170033-f8396924c348')"
      }}
    >
      {/* dark overlay */}
      <div className="w-full min-h-screen bg-black/60 flex items-center">
        <div className="max-w-6xl mx-auto px-6 text-white">
          
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Freshly Brewed <br />
            <span className="text-amber-400">Premium Coffee</span>
          </h1>

          <p className="mt-5 text-lg md:text-xl text-gray-200 max-w-xl">
            Discover the rich aroma and bold taste of handcrafted coffee,
            made from the finest beans.
          </p>

          <div className="mt-8 flex gap-4">
          <button className="bg-amber-500 hover:bg-amber-600 text-black px-6 py-3 rounded-full font-semibold transition">
           Order Now
           </button>

          <button
             onClick={() => setShowMenu(true)}
             className="bg-amber-500 hover:bg-amber-600 text-black px-6 py-3 rounded-full font-semibold transition"
             >
              View Menu
          </button>
          </div>

        </div>
        {/* MENU OVERLAY */}
        {showMenu && (
        <MenuOverlay onClose={() => setShowMenu(false)} />
        )}
      </div>
    </section>
  );
}

export default Hero;
