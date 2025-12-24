import { useState } from "react";
import ProductModal from "./ProductModal";

const coffeeList = [
  {
    name: "Espresso",
    price: "₹199",
    img: "https://images.unsplash.com/photo-1511920170033-f8396924c348"
  },
  {
    name: "Cappuccino",
    price: "₹249",
    img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93"
  },
  {
    name: "Latte",
    price: "₹229",
    img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
  },
  {
    name: "Cold Brew",
    price: "₹279",
    img: "https://images.unsplash.com/photo-1525385133512-2f3bdd039054"
  }
];

function Products() {
  const [selectedCoffee, setSelectedCoffee] = useState(null);

  return (
    <section 
    id="products"
    className="bg-[#0f0f0f] py-20 text-white">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Our <span className="text-amber-400">Popular Coffee</span>
        </h2>

        <p className="text-gray-400 text-center mt-3">
          Handcrafted coffee made from premium beans
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-12">
          {coffeeList.map((coffee, index) => (
            <div
              key={index}
              onClick={() => setSelectedCoffee(coffee)}
              className="bg-[#1a1a1a] rounded-xl overflow-hidden shadow-lg hover:scale-105 transition cursor-pointer"
            >
              <img
                src={coffee.img}
                alt={coffee.name}
                className="h-48 w-full object-cover"
              />

              <div className="p-5 text-center">
                <h3 className="text-xl font-semibold">
                  {coffee.name}
                </h3>
                <p className="text-amber-400 mt-2">
                  {coffee.price}
                </p>

                <button className="mt-4 bg-amber-500 text-black px-4 py-2 rounded-full font-medium">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* MODAL */}
        <ProductModal
          coffee={selectedCoffee}
          onClose={() => setSelectedCoffee(null)}
        />

      </div>
    </section>
  );
}

export default Products;
