import React, { useState, useEffect } from "react";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    {
      id: 1,
      titulo: "Pide tu cita virtual con precios accesibles y mejora tu salud hoy mismo",
      parrafo: '¡Tu bienestar es nuestra prioridad!',
      src: 'images/car/001.png',
      alt: 'Imagen 01',
      clase: 'cta red',
      btnMayor: 'Empieza a cambiar tu vida',
      btnMenor: 'Desde 60 soles',
      ruta: '/consulta'
    },
    { id: 2,
      titulo: "Reduce esos kilos de más con nuestro plan nutricional",
      parrafo: 'Saca una cita que estamos disponibles',
      src: 'images/car/002.png',
      alt: 'Imagen 02',
      clase: 'cta verde',
      btnMayor: 'Único plan que funciona en el Perú',
      btnMenor: 'Comprobado. ¡Pide tu cita!',
      ruta: '/consulta'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <section className="pasto carousel">
      {items.map((item, index) => (
        <div key={item.id} className={`carousel-item ${index === activeIndex ? "active" : ""}`}>
          <div className="contenedor">
            <article>
              <h2>{item.titulo}</h2>
              <p>{item.parrafo}</p>
              <a href={item.ruta} className={item.clase}>
                <strong>{item.btnMayor}</strong>
                <span>{item.btnMenor}</span>
              </a>
            </article>
            <figure>
              <img className="img" src={item.src} alt={item.alt} />
            </figure>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Carousel;
