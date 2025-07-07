import { Link } from 'react-scroll';

const Hero = () => {
  return (
    // MODIFIED: Added flex properties for centering and h-screen for full height.
    <section className="relative bg-gradient-to-br from-pink-100 to-white px-4 text-center overflow-hidden h-screen flex flex-col items-center justify-center">
      
      {/* Curved Navbar */}
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-white shadow-lg border rounded-full px-6 py-3 flex space-x-6 items-center z-10">
        <Link to="services" smooth={true} duration={500} className="cursor-pointer text-gray-700 hover:text-pink-500 font-medium">
          Services
        </Link>
        <Link to="gallery" smooth={true} duration={600} className="cursor-pointer text-gray-700 hover:text-pink-500 font-medium">
          Gallery
        </Link>
        <Link to="testimonials" smooth={true} duration={800} className="cursor-pointer text-gray-700 hover:text-pink-500 font-medium">
          Reviews
        </Link>
        <Link to="contact" smooth={true} duration={1000} className="cursor-pointer text-gray-700 hover:text-pink-500 font-medium">
          Contact
        </Link>
        <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer">
          <button className="bg-pink-500 text-white px-4 py-1 rounded-full hover:bg-pink-600">
            Book on WhatsApp
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