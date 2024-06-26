import React, { useState } from 'react';
import './App.css';
import Testimonio from './components/GatosInfo';

function App() {
  // Paso 2: Array de testimonios
  const testimonios = [
    {
      nombre: 'Astronox',
      pais: 'Via Lactea',
      imagen: '1',
      cargo: 'Conspirador galactico',
      empresa: 'Margen Galactico',
      testimonio: 'Astronox es un majestuoso gato blanco con ojos dorados que brillan como estrellas. Es el líder de los guardianes y tiene un porte noble y sereno. Su pelaje es tan puro que parece reflejar la luz de las estrellas, y lleva una capa celestial que cambia de color según las constelaciones que vigila. Astronox es conocido por su sabiduría y capacidad para ver a través del espacio y el tiempo, siempre anticipando posibles amenazas. Su habilidad especial es crear barreras de energía estelar que protegen la Vía Láctea de cualquier invasión.',
    },
    {
      nombre: 'Nebulín',
      pais: 'Via Lactea',
      imagen: '2',
      cargo: 'Conspirador galactico',
      empresa: 'Margen Galactico',
      testimonio: 'Nebulín es un gato negro con manchas iridiscentes que recuerdan a una nebulosa. Sus ojos son de un azul profundo que parece contener todo el universo. Es el más ágil y rápido de los guardianes, moviéndose con la gracia y rapidez de un cometa. Nebulín tiene el poder de manipular la materia oscura, permitiéndole aparecer y desaparecer a voluntad, así como crear portales interdimensionales. Su misión es patrullar los confines de la galaxia, asegurándose de que ningún intruso pase desapercibido.',
    },
    {
      nombre: 'Eclipse',
      pais: 'Via Lactea',
      imagen: '3',
      cargo: 'Conspirador galactico',
      empresa: 'Margen Galactico',
      testimonio: 'Eclipse es un imponente gato negro cuyo pelaje parece absorber la luz, creando un aura de misterio y poder a su alrededor. Sus ojos, de un intenso color púrpura, brillan como amuletos místicos en la oscuridad. Eclipse es el guardián más enigmático de la Vía Láctea, conocido por su capacidad para manipular las sombras y moverse sin ser detectado.',
    },
  ];

  const [indiceActual, setIndiceActual] = useState(0);

  const siguienteTestimonio = () => {
    setIndiceActual((prevIndice) => (prevIndice + 1) % testimonios.length);
  };

  const anteriorTestimonio = () => {
    setIndiceActual((prevIndice) => (prevIndice - 1 + testimonios.length) % testimonios.length);
  };

  // Paso 4: Renderizar el testimonio actual
  const testimonioActual = testimonios[indiceActual];

  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>PROTECTORES GALÁCTICOS</h1>
        <Testimonio
          nombre={testimonioActual.nombre}
          pais={testimonioActual.pais}
          imagen={testimonioActual.imagen}
          cargo={testimonioActual.cargo}
          empresa={testimonioActual.empresa}
          testimonio={testimonioActual.testimonio}
        />
        {/* Paso 5: Botones para cambiar de testimonio */}
        <div className='buttons-prev-next'>
          <button onClick={anteriorTestimonio}>Anterior</button>
          <button onClick={siguienteTestimonio}>Siguiente</button>
        </div>
      </div>
    </div>
  );
}

export default App;
