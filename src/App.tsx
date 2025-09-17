

import Navbar from "./components/Nav";
import AboutMe from "./components/AboutMe";
import Educacion from "./components/Educacion";
import Tecnologias from "./components/Tecnologias";
import Proyectos from "./components/Proyectos";
import Contacto from "./components/Contacto";


function App() {
  return (
    <>
      <Navbar />
      <div className='flex flex-col items-center justify-center gap-15'>
        <AboutMe />
        <Educacion />
        <Tecnologias />
        <Proyectos />
        <Contacto />
      </div>

    </>
  );
}

export default App;
