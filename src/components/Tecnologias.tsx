import { 
  FaReact, FaCss3Alt, FaPhp, FaVuejs, FaHtml5, 
  FaGitAlt, FaFigma, FaJs 
} from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiPostgresql, SiJira } from "react-icons/si";

export default function Tecnologias() {
  const skills = [
    { name: "Figma", icon: <FaFigma className="w-10 h-10 sm:w-12 sm:h-12 text-pink-500" /> },
    { name: "React", icon: <FaReact className="w-10 h-10 sm:w-12 sm:h-12 text-blue-500" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss className="w-10 h-10 sm:w-12 sm:h-12 text-cyan-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600" /> },
    { name: "Git", icon: <FaGitAlt className="w-10 h-10 sm:w-12 sm:h-12 text-orange-500" /> },
    { name: "MySQL", icon: <SiMysql className="w-10 h-10 sm:w-12 sm:h-12 text-blue-400" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="w-10 h-10 sm:w-12 sm:h-12 text-sky-700" /> },
    { name: "JavaScript", icon: <FaJs className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-400" /> },
    { name: "PHP", icon: <FaPhp className="w-10 h-10 sm:w-12 sm:h-12 text-indigo-600" /> },
    { name: "Vue", icon: <FaVuejs className="w-10 h-10 sm:w-12 sm:h-12 text-green-500" /> },
    { name: "HTML", icon: <FaHtml5 className="w-10 h-10 sm:w-12 sm:h-12 text-orange-600" /> },
    { name: "Jira", icon: <SiJira className="w-10 h-10 sm:w-12 sm:h-12 text-blue-500" /> },
  ];

  return (
    <section 
      id="tecnologias" 
      className="w-full flex flex-col items-center py-10 px-4 sm:px-6 lg:px-8"
    >
      {/* titulo */}
      <div className="w-screen -mx-4 sm:-mx-6 lg:-mx-8 bg-white py-4 border-y-2 border-gray-200 shadow-sm text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Tecnologías</h2>
        <p className="text-sm sm:text-base text-gray-700 mt-1 font-quicksand">
          Siempre estoy dispuesta a aprender más.
        </p>
      </div>

      {/* cuadro translucido */}
      <div className="max-w-6xl w-full bg-white/50 backdrop-blur-md shadow-lg rounded-xl p-4 sm:p-6 md:p-8 mt-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8 place-items-center">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center transition-transform transform hover:scale-110"
            >
              {skill.icon}
              <p className="mt-2 text-xs sm:text-sm md:text-base font-medium font-quicksand">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}