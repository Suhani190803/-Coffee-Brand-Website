function About() {
  return (
    <section
      id="about"
      className="bg-[#0b0b0b] py-20 text-white"
    >
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left Image */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
            alt="Coffee beans"
            className="rounded-xl shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            About <span className="text-amber-400">Our Coffee</span>
          </h2>

          <p className="mt-5 text-gray-300 leading-relaxed">
            At Coffee., we believe that every cup tells a story.
            Our journey began with a passion for crafting rich,
            aromatic coffee using the finest hand-picked beans
            sourced from sustainable farms.
          </p>

          <p className="mt-4 text-gray-300 leading-relaxed">
            From roasting to brewing, we focus on quality,
            freshness, and flavor — delivering a perfect coffee
            experience in every sip.
          </p>

          <button className="mt-6 bg-amber-500 hover:bg-amber-600 text-black px-6 py-3 rounded-full font-semibold transition">
            Learn More
          </button>
        </div>

      </div>
    </section>
  );
}

export default About;
