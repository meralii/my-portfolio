import miFoto from '../assets/imagenes/mifoto.jpg';

const AboutMe = () => {
  return (
    <section 
      id="sobre-mi" 
      className="max-w-6xl mx-auto px-6 pt-20 md:pt-28 pb-10 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-40"
    >
      {/* cuadro de texto translucido */}
      <div className="bg-white/50 backdrop-blur-sm p-6 sm:p-8 md:p-10 rounded-md shadow-md max-w-lg">
        {/* titulo responsive */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-parisienne font-bold text-gray-900 mb-4 text-center md:text-left">
          Hey!
        </h2>

        {/* texto responsive */}
        <p className="text-sm sm:text-base md:text-lg text-gray-800 leading-relaxed text-justify font-quicksand">
          Soy Kelly Merali Rodríguez Reyna, desarrolladora de software apasionada 
          por el mundo del frontend. Me encanta diseñar interfaces atractivas, 
          funcionales y llevarlas a la realidad mediante código limpio y eficiente. 
          Actualmente curso el séptimo semestre de Ingeniería en Sistemas Computacionales, 
          lo que me ha permitido fortalecer mis conocimientos en el desarrollo web, 
          el diseño centrado en el usuario y la creación de experiencias digitales intuitivas.
        </p>
      </div>

      {/* foto circular */}
      <div className="flex-shrink-0 mt-6 md:mt-0">
        <img
          src={miFoto} 
          alt="Kelly Merali"
          className="w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 object-cover rounded-full shadow-lg"
        />
      </div>
    </section>
  );
};

export default AboutMe;