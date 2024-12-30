import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0d1127] text-gray-300">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left Side - Contact */}
        <div className="bg-[#123F4E] py-6 px-6 md:px-12">
          <h2 className="text-lg font-semibold mb-2">CONTACT US</h2>
          <p>123 ABS Street, Uni 21, Bangladesh</p>
          <p>+88 123456789</p>
          <p>Mon - Fri: 08:00 - 22:00</p>
          <p>Sat - Sun: 10:00 - 23:00</p>
        </div>

        {/* Right Side - Follow Us */}
        <div className="bg-[#0d1127] py-6 px-6 md:px-12 text-center md:text-left">
          <h2 className="text-lg font-semibold mb-2">Follow US</h2>
          <p>Join us on social media</p>
          <div className="flex justify-center md:justify-start space-x-4 mt-2">
            <a
              href="#"
              className="text-gray-300 hover:text-gray-100 transition-colors"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-gray-100 transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-gray-100 transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-black text-center text-sm text-gray-400 py-4">
        Copyright © CulinaryCloud. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
