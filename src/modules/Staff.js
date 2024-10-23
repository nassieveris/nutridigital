import React, { useState } from "react";

export const opcion = [
  {
    titulo: 'Lic. Gia Alegría',
    cuerpo: 'Nutricionista especializada en consultas virtuales, comprometida con la salud y el bienestar.',
    completo: 'Nutricionista especializada en consultas virtuales, comprometida con la salud y el bienestar, la Lic. Gia Alegría es una destacada profesional egresada de la Universidad Nacional Mayor de San Marcos. Con una sólida formación académica y una pasión por la nutrición, Gia ha dedicado su carrera a promover hábitos alimenticios saludables y personalizados para cada uno de sus pacientes. A lo largo de su trayectoria, ha implementado programas de nutrición innovadores y efectivos, adaptados a las necesidades individuales de sus clientes. Su enfoque integral y su capacidad para conectar con las personas han hecho de Gia una referente en el campo de la nutrición virtual, ayudando a muchos a alcanzar sus objetivos de salud y bienestar.',
    src: 'images/modulos/doc-1.jpg'
  },
  {
    titulo: 'Dr. Gonzalo Bueno',
    cuerpo: 'Nutricionista especializado en dietas personalizadas y salud integral.',
    completo: 'Nutricionista especializado en dietas personalizadas y salud integral, el Dr. Gonzalo Bueno es un destacado profesional egresado de la Universidad Peruana de Ciencias Aplicadas (UPC). Con una sólida formación académica y una dedicación inquebrantable a la salud de sus pacientes, Gonzalo ha desarrollado un enfoque integral que combina la ciencia de la nutrición con un profundo entendimiento de las necesidades individuales. A lo largo de su carrera, ha ayudado a numerosos pacientes a alcanzar sus objetivos de salud mediante planes de alimentación personalizados y estrategias de bienestar holísticas. Su compromiso con la educación continua y su habilidad para conectar con sus pacientes lo han convertido en un referente en el campo de la nutrición y la salud integral.',
    src: 'images/modulos/doc-2.jpg'
  },
  {
    titulo: 'Nut. Bruno Balboa',
    cuerpo: 'Nutricionista especializado en dietas personalizadas y asesoría nutricional integral.',
    completo:  'Nutricionista especializado en dietas personalizadas y asesoría nutricional integral, es un destacado profesional egresado de la Universidad de São Paulo. Con una sólida formación académica y una pasión por la nutrición, Bruno ha dedicado su carrera a mejorar la salud y el bienestar de sus pacientes a través de planes de alimentación personalizados y asesoría integral. A lo largo de su trayectoria, ha implementado estrategias nutricionales efectivas y adaptadas a las necesidades individuales de cada paciente. Su enfoque holístico y su capacidad para conectar con las personas han hecho de Bruno un referente en el campo de la nutrición, ayudando a muchos a alcanzar sus objetivos de salud y bienestar.',
    src: 'images/modulos/doc-3.jpg'
  },
  {
    titulo: 'Lic. Gabriela Gavilán',
    cuerpo: 'Nutricionista experta en fisiología de frutos y sostenibilidad alimentaria.',
    completo: 'Nutricionista experta en fisiología de frutos y sostenibilidad alimentaria, es una destacada profesional egresada de la Universidad Femenina del Sagrado Corazón (UNIFE). Con una sólida formación académica y una pasión por la nutrición sostenible, Gabriela ha dedicado su carrera a investigar y promover prácticas alimentarias que beneficien tanto a la salud humana como al medio ambiente. A lo largo de su trayectoria, ha desarrollado programas innovadores que integran el conocimiento de la fisiología de los frutos con estrategias de sostenibilidad alimentaria. Su enfoque integral y su compromiso con la educación y la concienciación han hecho de Gabriela una referente en su campo, ayudando a muchos a adoptar hábitos alimenticios más saludables y sostenibles.',
    src: 'images/modulos/doc-4.jpg'
  }
]

const itemStaff = (opcion, index, openModal) => {
  return (
    <li className="group-item" key={index}>
      <img src={opcion.src} alt={opcion.titulo} />
      <article>
        <h4>{opcion.titulo}</h4>
        <p>{opcion.cuerpo}</p>
        <button className="btn" onClick={() => openModal(opcion)}>Conocer más</button>
      </article>
    </li>
  )
}

const Staff = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedStaff, setSelectedStaff] = useState(null);

  const openModal = (staff) => {
    setSelectedStaff(staff);
    setModalVisible(true);
  }

  const closeModal = () => {
    setSelectedStaff(null);
    setModalVisible(false);
  }

  return (
    <section className="staff modulo">
      <div className="contenedor">
        <h3 className="sub-title text-center">Nuestro Staff</h3>
        <ul className="group">
          {opcion.map((item, index) => itemStaff(item, index, openModal))}
        </ul>
      </div>
      {modalVisible && selectedStaff && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h4>{selectedStaff.titulo}</h4>
            <article>
              <figure><img className="img" src={selectedStaff.src} alt={selectedStaff.titulo} /></figure>
              <p>{selectedStaff.completo}</p>
            </article>
          </div>
        </div>
      )}
    </section>
  )
}

export default Staff;
