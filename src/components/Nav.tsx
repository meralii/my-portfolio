import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo con Parisienne */}
        <a href="#sobre-mi" className="text-2xl font-parisienne text-gray-900">
          Meralii
        </a>

        {/* Links en desktop */}
        <ul className="font-quicksand hidden md:flex space-x-10 text-gray-800 font-medium">
          <li>
            <a href="#sobre-mi" className="hover:text-gray-600 font-quicksand">
              Sobre mi
            </a>
          </li>
          <li>
            <a href="#proyectos" className="hover:text-gray-600 font-quicksand">
              Proyectos
            </a>
          </li>
          <li>
            <a href="#contacto" className="hover:text-gray-600 font-quicksand">
              Contacto
            </a>
          </li>
        </ul>

        {/* Botón hamburguesa en móviles */}
        <button
          className="md:hidden text-gray-800 text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Menú desplegable móvil */}
      {isOpen && (
        <div className="md:hidden w-full bg-white shadow-md z-50 transition-all duration-300 font-quicksand">
          <ul className="flex flex-col space-y-4 p-6 text-gray-800 font-quicksand font-medium">
            <li>
              <a
                href="#Educacion"
                className="hover:text-gray-600 font-quicksand"
                onClick={() => setIsOpen(false)}
              >
                Sobre mi
              </a>
            </li>
            <li>
              <a
                href="#proyectos"
                className="hover:text-gray-600 font-quicksand"
                onClick={() => setIsOpen(false)}
              >
                Proyectos
              </a>
            </li>
            <li>
              <a
                href="#contacto"
                className="hover:text-gray-600 font-quicksand"
                onClick={() => setIsOpen(false)}
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

