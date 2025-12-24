function MenuOverlay({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
      <div className="bg-[#1a1a1a] text-white w-[90%] max-w-5xl rounded-xl p-8 relative overflow-y-auto max-h-[90vh]">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-white"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-2">
          Coffee<span className="text-amber-400"> </span> Menu
        </h2>
        <p className="text-center text-gray-400 mb-10">
          Freshly brewed coffee made from premium beans
        </p>

        {/* HOT COFFEE */}
        <h3 className="text-2xl font-semibold mb-4 text-amber-400">
          ☕ Hot Coffee
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {[
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
            }
          ].map((item, index) => (
            <div key={index} className="bg-black/40 rounded-lg overflow-hidden">
              <img
                src={item.img}
                alt={item.name}
                className="h-40 w-full object-cover"
              />
              <div className="p-4 text-center">
                <h4 className="text-xl font-semibold">{item.name}</h4>
                <p className="text-amber-400 mt-2">{item.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* COLD COFFEE */}
        <h3 className="text-2xl font-semibold mb-4 text-amber-400">
          🧊 Cold Coffee
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: "Cold Brew",
              price: "₹279",
              img: "https://images.unsplash.com/photo-1525385133512-2f3bdd039054"
            },
            {
              name: "Mocha Cold Coffee",
              price: "₹259",
              img: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f"
            },
            {
               name: "Iced Americano",
               price: "₹189",
               img: "https://images.unsplash.com/photo-1551024601-bec78aea704b"
            }

          ].map((item, index) => (
            <div key={index} className="bg-black/40 rounded-lg overflow-hidden">
              <img
                src={item.img}
                alt={item.name}
                className="h-40 w-full object-cover"
              />
              <div className="p-4 text-center">
                <h4 className="text-xl font-semibold">{item.name}</h4>
                <p className="text-amber-400 mt-2">{item.price}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default MenuOverlay;
