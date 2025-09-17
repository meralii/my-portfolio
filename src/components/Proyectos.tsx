import syncTeamLogo from "../assets/imagenes/syncTeam.png";
import syncTeamImg1 from "../assets/imagenes/syncTeam1.png";
import syncTeamImg2 from "../assets/imagenes/syncTeam2.png";

import tailsUpLogo from "../assets/imagenes/tailsUp.png";
import tailsUpImg1 from "../assets/imagenes/tailsUp1.png";
import tailsUpImg2 from "../assets/imagenes/tailsUp2.png";

const Proyectos = () => {
  return (
    <section id="proyectos" className="w-full py-10 px-4">
      {/* titulo */}
      <div className="w-full bg-white py-6 border-y-2 border-gray-200 shadow-sm text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Proyectos</h2>
      </div>

      {/* cuadro translucido */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 mt-8 bg-white/50 backdrop-blur-sm rounded-lg shadow-md space-y-16 sm:space-y-20 lg:space-y-24">
        
        {/* prroyecto SyncTeam */}
        <div className="space-y-6 sm:space-y-8">
          <div className="flex justify-center">
            <img
              src={syncTeamLogo}
              alt="SyncTeam"
              className="h-12 sm:h-16 md:h-20 lg:h-24 object-contain"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <img
              src={syncTeamImg1}
              alt="SyncTeam1"
              className="rounded-xl shadow-md w-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
            />
            <img
              src={syncTeamImg2}
              alt="SyncTeam2"
              className="rounded-xl shadow-md w-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>
        </div>

        {/* proyecto TailsUp */}
        <div className="space-y-6 sm:space-y-8">
          <div className="flex justify-center">
            <img
              src={tailsUpLogo}
              alt="Tails Up"
              className="h-8 sm:h-12 md:h-14 lg:h-16 object-contain"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <img
              src={tailsUpImg1}
              alt="TailsUp1"
              className="rounded-xl shadow-md w-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
            />
            <img
              src={tailsUpImg2}
              alt="TailsUp2"
              className="rounded-xl shadow-md w-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Proyectos;