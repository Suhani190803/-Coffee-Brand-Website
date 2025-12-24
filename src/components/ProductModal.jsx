function ProductModal({ coffee, onClose }) {
  if (!coffee) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-[#1a1a1a] text-white rounded-xl max-w-md w-full p-6 relative">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl"
        >
          ✕
        </button>

        <img
          src={coffee.img}
          alt={coffee.name}
          className="w-full h-52 object-cover rounded-lg"
        />

        <h2 className="text-2xl font-bold mt-4">
          {coffee.name}
        </h2>

        <p className="text-amber-400 text-lg mt-1">
          {coffee.price}
        </p>

        <p className="text-gray-300 mt-3 text-sm">
          Rich, aromatic coffee brewed from premium beans to give you
          the perfect start to your day.
        </p>

        <button className="mt-6 w-full bg-amber-500 hover:bg-amber-600 text-black py-2 rounded-full font-semibold">
          Order Now
        </button>
      </div>
    </div>
  );
}

export default ProductModal;
