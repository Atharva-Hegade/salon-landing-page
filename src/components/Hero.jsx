import { Link } from 'react-scroll';

const Hero = () => {
  return (
    // MODIFIED: Added flex properties for centering and h-screen for full height.
    <section className="relative bg-gradient-to-br from-pink-100 to-white px-4 text-center overflow-hidden h-screen flex flex-col items-center justify-center">
      
      {/* Curved Navbar */}
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-white shadow-lg border rounded-full px-4 py-2 flex space-x-2 items-center z-10 md:px-6 md:py-3 md:space-x-6">
          <Link to="services" smooth={true} duration={500} className="cursor-pointer text-gray-700 hover:text-pink-500 font-medium text-sm md:text-base">
            Services
          </Link>
          <Link to="gallery" smooth={true} duration={600} className="cursor-pointer text-gray-700 hover:text-pink-500 font-medium text-sm md:text-base">
            Gallery
          </Link>
          <Link to="testimonials" smooth={true} duration={800} className="cursor-pointer text-gray-700 hover:text-pink-500 font-medium text-sm md:text-base">
            Reviews
          </Link>
          <Link to="contact" smooth={true} duration={1000} className="cursor-pointer text-gray-700 hover:text-pink-500 font-medium text-sm md:text-base">
            Contact
          </Link>
          <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer">
          <button className="bg-pink-500 text-white px-4 py-0.5 rounded-full hover:bg-pink-600 text-sm md:px-4 md:py-1 md:text-base whitespace-nowrap">
            Book Now
          </button>
        </a>
    </div>

      {/* Main Hero Content */}
      {/* REMOVED: pt-28 class from this div */}
      <div>
        <h1 className="text-5xl md:text-8xl font-bold mb-4 text-pink-700">Golden Touch Beauty Care</h1>
        <Link to="services" smooth={true} duration={500}>
          <button className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition">
            Explore Services
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;