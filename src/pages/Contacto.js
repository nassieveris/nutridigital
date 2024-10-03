import React from "react";

const Contacto = () => {
  return(
    <>
      <section className="intro modulo">
        <div className="contenedor">
          <h2 className="sub-title text-center">Contáctanos</h2>
        </div>
      </section>
      <section className="col">
        <div className="contenedor">
          <img src="images/car/004.png" alt="Nutridigital" className="img text-center" />
          <article>
            <h3>NUTRIDIGITAL SAC</h3>
            <p>Av. Benavides 1234 Miraflores<br></br>
            (01) 444-5566</p>
            <p>hola@nutridigital.pe</p>
            <p>RUC: 201234567810</p>
          </article>
        </div>
      </section>
    </>
  )
}

export default Contacto;
