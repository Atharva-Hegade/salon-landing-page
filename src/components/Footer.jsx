import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-pink-100 text-gray-800 py-10 px-4 text-center">
      <h2 className="text-2xl font-semibold mb-4">Visit Now</h2>

      <p className="mb-2">
        📍 Shop No. 10, Tower No. 8, Blue Ridge Township, Hinjewadi, Pune
      </p>
    
      <div className="flex justify-center gap-6 text-2xl mt-4">
        <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
          <FaFacebook />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
          <FaInstagram />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
          <FaWhatsapp />
        </a>
      </div>

      <p className="text-sm text-gray-600 mt-6">&copy; {new Date().getFullYear()} Golden Touch Beauty Care. All rights reserved.</p>
      <p className="text-sm text-gray-600 mt-0">Designed with ❤️ by Atharva Hegade</p>
    </footer>
  );
};

export default Footer;
