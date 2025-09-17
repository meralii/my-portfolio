import { FaEnvelope, FaPhone, FaInstagram, FaFacebook, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Contacto = () => {
  return (
    <section 
      id="contacto"
      className="w-full py-12 px-4 sm:px-6 lg:px-8"
    >
      {/* titulo */}
      <div className="w-screen -mx-4 sm:-mx-6 lg:-mx-8 bg-white py-6 border-y-2 border-gray-200 shadow-sm text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Contáctame
        </h2>
      </div>

      {/* cuadro translucido */}
      <div className="max-w-3xl mx-auto px-6 py-10 bg-white/50 backdrop-blur-sm rounded-lg shadow-md space-y-10">
        
        <div className="font-quicksand flex flex-col md:flex-row justify-center items-center gap-6 text-gray-900 text-base sm:text-lg">
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-xl sm:text-2xl" />
            <span className="break-words text-center md:text-left font-quicksand">
              kellymrr18@gmail.com
            </span>
          </div>
          <div className="flex items-center gap-3">
            <FaPhone className="text-xl sm:text-2xl font-quicksand" />
            <span>755 108 2854</span>
          </div>
        </div>

        <div className="flex justify-center flex-wrap gap-6 sm:gap-10 text-3xl sm:text-4xl">
          <a
            href="https://www.instagram.com/merali_rodriguez?igsh=MTdhNHBvbm44bmk1MQ%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-colors"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/share/1FSKH3KjNJ/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors"
          >
            <FaFacebook />
          </a>
          <a
            href="https://github.com/meralii"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-800 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://x.com/meralii04?s=21&t=36sVd3dwvtMEOaSQU9hqsQ"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors"
          >
            <FaXTwitter />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contacto;