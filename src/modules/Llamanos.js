import React from "react";

export const opcion = [
  {titulo: 'Consulta Inicial', cuerpo: 'Evaluación personalizada de tu estado nutricional y objetivos de salud.', src: 'images/modulos/item-1.jpg'},
  {titulo: 'Plan Nutricional', cuerpo: 'Creación de un plan alimenticio adaptado a tus necesidades y preferencias.', src: 'images/modulos/item-2.jpg'},
  {titulo: 'Seguimiento Mensual', cuerpo: 'Revisión y ajuste del plan nutricional para asegurar el progreso continuo.', src: 'images/modulos/item-3.jpg'},
  {titulo: 'Asesoría Especializada', cuerpo: 'Consejos y estrategias para condiciones específicas como diabetes, hipertensión, y más.', src: 'images/modulos/item-4.jpg'}
]

const itemLlamanos = (opcion, index) => {
  return (
    <li className="group-item" key={index}>
      <img src={opcion.src} alt={opcion.titulo} />
      <article>
        <h4>{opcion.titulo}</h4>
        <p>{opcion.cuerpo}</p>
      </article>
    </li>
  )
}

const Llamanos = () => {
  return (
    <section className="llamanos modulo">
      <div className="contenedor">
        <h3 className="sub-title">Búscanos cuando quieras <br />nuestro consejo en:</h3>
        <ul className="group">
          {opcion.map((item, index) => itemLlamanos(item, index))}
        </ul>
      </div>
    </section>
  )
}

export default Llamanos;
