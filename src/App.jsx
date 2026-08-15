 import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Contador from "./components/Contador/Contador";
import TarjetaPerfil from "./components/TarjetaPerfil";
import Saludo from "./components/Saludo";
import ListaTareas from "./components/ListaTareas";

function App() {
  const nombreSitio = "Mi Espacio Web";

  const usuario1 = {
  nombre: "Ada Lovelace",
  rol: "Pionera de la Programación",
  foto: "https://placehold.co/80",
};

  const links = [
    "Inicio",
    "Servicios",
    "Contacto"
  ];

  const tituloMain = "Tecnologías Web";

  const descripcion =
    "Un espacio para conocer diferentes temas del desarrollo web.";

  const temas = [
    "React",
    "JavaScript",
    "CSS"
  ];

  return (
    <>
      <Navbar
        titulo={nombreSitio}
        links={links}
      />

      <Saludo nombre="Valentina" />
      <Saludo nombre="Tomás" />

      <Main
        titulo={tituloMain}
        descripcion={descripcion}
        items={temas}
      />

      <div>
  <TarjetaPerfil
    nombre={usuario1.nombre}
    cargo={usuario1.rol}
    imagen={usuario1.foto}
  />

  <TarjetaPerfil
    nombre="Grace Hopper"
    cargo="Inventora del compilador"
    imagen="https://placehold.co/80"
  />
</div>

      <Contador />
      
      <ListaTareas />

      <Footer
        texto="Todos los derechos reservados."
        anio="2026"
      />
    </>
  );
}

export default App;