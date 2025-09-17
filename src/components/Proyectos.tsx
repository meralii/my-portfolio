import { motion } from "framer-motion";

import syncTeamLogo from "../assets/imagenes/syncTeam.png";
import syncTeamImg1 from "../assets/imagenes/syncTeam1.png";
import syncTeamImg2 from "../assets/imagenes/syncTeam2.png";

import tailsUpLogo from "../assets/imagenes/tailsUp.png";
import tailsUpImg1 from "../assets/imagenes/tailsUp1.png";
import tailsUpImg2 from "../assets/imagenes/tailsUp2.png";

export default function Proyectos() {
  const proyectos = [
    {
      nombre: "SyncTeam",
      logo: syncTeamLogo,
      imagenes: [syncTeamImg1, syncTeamImg2],
    },
    {
      nombre: "Tails Up",
      logo: tailsUpLogo,
      imagenes: [tailsUpImg1, tailsUpImg2],
    },
  ];

  return (
    <section id="proyectos" className="w-full flex flex-col items-center py-6 sm:py-8 md:py-10 px-4 sm:px-6 lg:px-8">
      {/* título */}
      <div className="w-screen -mx-4 sm:-mx-6 lg:-mx-8 bg-white py-4 sm:py-6 md:py-7 border-y-2 border-gray-200 shadow-sm">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
          Proyectos
        </h2>
      </div>

      {/* cuadro translucido */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl w-full bg-white/50 backdrop-blur-md shadow-lg rounded-xl p-4 sm:p-6 md:p-8 mt-2 sm:mt-6 md:mt-10 font-quicksand space-y-12 sm:space-y-16 lg:space-y-20"
      >
        {proyectos.map((proyecto, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: index * 0.3 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8"
          >
            {/* logo */}
            <div className="flex justify-center">
              <img
                src={proyecto.logo}
                alt={proyecto.nombre}
                className="h-10 sm:h-14 md:h-16 lg:h-20 object-contain"
              />
            </div>

            {/* imágenes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {proyecto.imagenes.map((img, i) => (
                <motion.img
                  key={i}
                  src={img}
                  alt={`${proyecto.nombre} ${i + 1}`}
                  className="rounded-xl shadow-md w-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}