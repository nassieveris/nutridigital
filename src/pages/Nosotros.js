import React from "react";
import Llamanos from "../modules/Llamanos";

const Nosotros = () => {
  return(
    <>
      <section className="pasto intro modulo">
        <div className="contenedor">
          <h2 className="sub-title text-center">¿Qué es lo que queremos?</h2>
          <p className="text-center">Ofrecer asesoría nutricional personalizada y accesible, mejorando tu salud y bienestar a través de consultas virtuales con expertos.</p>
          <figure className="video-responsive">
            <iframe
              width="100%"
              height="auto"
              src="https://www.youtube.com/embed/c9hNUIsGRYg?si=4R0Xs038F0oFf6Jv"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen>
            </iframe>
          </figure>
        </div>
      </section>
      <section className="verde nosotros modulo">
        <div className="contenedor">
          <h2 className="sub-title text-center">¿Porqué elegirnos?</h2>
          <article className="group">
            <div className="group-text">
              <p>En NutriDigital, combinamos la experiencia de nutricionistas certificados con la comodidad de las consultas virtuales. </p>
              <p>Nuestro enfoque personalizado garantiza que recibas recomendaciones adaptadas a tus necesidades y objetivos específicos. </p>
              <p>Además, nuestra plataforma fácil de usar te permite agendar citas y recibir seguimiento sin complicaciones, asegurando un camino continuo hacia una vida más saludable. ¡El bienestar está a un clic de distancia!</p>
            </div>
            <figure className="group-text">
              <img className="img" src="images/nosotros.jpg" alt="Nosotros" />
            </figure>
          </article>
        </div>
      </section>
      <Llamanos />
    </>
  )
}

export default Nosotros;
