import { motion } from "framer-motion";

export default function Educacion() {
  const estudios = [
    {
      instituto: "Instituto tecnológico de Morelia",
      detalle: "Ingeniería en sistemas computacionales",
      periodo: "2023 - Actualmente",
    },
    {
      instituto: "Centro de lenguas extranjeras - ITM",
      detalle: "Inglés B2",
      periodo: "2024 - 2024",
    },
    {
      instituto: "Instituto EnglishPlus",
      detalle: "Inglés B2",
      periodo: "2021 - 2023",
    },
    {
      instituto: "Centro de lenguas extranjeras - ITM",
      detalle: "Francés A1",
      periodo: "2024 - 2025",
    },
    {
      instituto: "Chinguescuela",
      detalle: "Coreano A1",
      periodo: "2025 - 2025",
    },
  ];

  return (
    <section 
      id="educacion" 
      className="w-full flex flex-col items-center py-4 sm:py-6 md:py-8 px-4 sm:px-6 lg:px-8"
    >
      {/* titulo */}
      <div className="w-full -mx-4 sm:-mx-6 lg:-mx-8 bg-white py-3 sm:py-4 md:py-5 border-y-2 border-gray-200 shadow-sm">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
          Formación académica
        </h2>
      </div>

      {/* cuadro translucido */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl w-full bg-white/50 backdrop-blur-md shadow-lg rounded-xl p-4 sm:p-6 md:p-8 mt-6 md:mt-10 font-quicksand"
      >
        <div className="space-y-6">
          {estudios.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row md:justify-between md:items-center border-b border-gray-200 pb-4"
            >
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold">
                  {item.instituto}
                </h3>
                <p className="text-sm sm:text-base text-gray-700 font-quicksand">
                  {item.detalle}
                </p>
              </div>
              <span className="text-xs sm:text-sm md:text-base font-medium text-gray-800 mt-2 md:mt-0">
                {item.periodo}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}