import React, { useState } from 'react';

const Consulta = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [formData, setFormData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const nombreInput = e.target.elements.nombre.value;
    const edadInput = e.target.elements.edad.value;
    const tipoInput = e.target.elements.tipo.value;
    const mailInput = e.target.elements.mail.value;
    const direccionInput = e.target.elements.direccion.value;
    const mensajeInput = e.target.elements.mensaje.value;
    const tipoMascotaInput = e.target.elements.tipo_mascota.value;

    const nombreRegex = /^[A-Za-z\s]{1,30}$/;
    const edadRegex = /^\d{1,2}$/;
    const mailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const direccionRegex = /^[A-Za-z\s]{1,69}$/;

    if (!tipoMascotaInput) {
      alert('Debe seleccionar un tipo de mascota.');
      return;
    }

    if (!nombreRegex.test(nombreInput)) {
      alert('Nombre de su Mascota debe tener entre 1 y 30 caracteres, y solo puede contener letras y espacios.');
      return;
    }

    if (!edadRegex.test(edadInput)) {
      alert('Edad debe ser un número de hasta 2 dígitos.');
      return;
    }

    if (!tipoInput) {
      alert('Debe seleccionar un tamaño.');
      return;
    }

    if (!mailRegex.test(mailInput)) {
      alert('Correo Electrónico no válido.');
      return;
    }

    if (!direccionRegex.test(direccionInput)) {
      alert('Dirección debe tener entre 1 y 69 caracteres, y solo puede contener letras y espacios.');
      return;
    }

    if (!mensajeInput.trim()) {
      alert('Debe ingresar un detalle de consulta.');
      return;
    }

    setFormData({
      nombre: nombreInput,
      edad: edadInput,
      tipo: tipoInput,
      mail: mailInput,
      direccion: direccionInput,
      mensaje: mensajeInput,
      tipoMascota: tipoMascotaInput
    });

    setShowMessage(true);
  };

  const handleReset = () => {
    document.getElementById('consultaForm').reset();
    setShowMessage(false);
  };

  return (
    <>
      <section className="intro medio rojo modulo">
        <div className="contenedor">
          <h2 className="sub-title text-center">¡Agenda con nosotros!</h2>
          <p className="text-center">Cuando hayas realizado tu solicitud. <br></br>Nos comunicaremos via Whatsapp para confirmarte el mejor horariodisponible para ti.<br></br><br></br></p>
        </div>
      </section>
      <section className="formulario rojo">
        <form id="consultaForm" className={`form-layout ${showMessage ? '' : 'show'}`} onSubmit={handleSubmit}>
          <div className="form-item">
            <label htmlFor="tipo_mascota">Soy:</label>
            <div className='form-radio'>
              <input type="radio" name="tipo_mascota" value="Hombre" id="Hombre" />
              <label htmlFor="Hombre">Hombre</label>
            </div>
            <div className='form-radio'>
              <input type="radio" name="tipo_mascota" value="Mujer" id="Mujer" />
              <label htmlFor="Mujer">Mujer</label>
            </div>
          </div>
          <div className="form-item">
            <label htmlFor="nombre">Nombre Completo:</label>
            <input type="text" id="nombre" name="nombre" />
          </div>
          <div className="form-item form-halfs">
            <label htmlFor="edad">Edad:</label>
            <input type="number" id="edad" />
          </div>
          <div className="form-item form-halfs">
            <label htmlFor="peso">Peso (kg):</label>
            <input type="number" id="pesoa" />
          </div>
          <div className="form-item form-halfs">
            <label htmlFor="alto">Altura (cm):</label>
            <input type="number" id="alto" />
          </div>
          <div className="form-item">
            <label htmlFor="tipo">Servicio a tomar:</label>
            <select id="tipo">
              <option value="">Seleccione</option>
              <option value="Primera Consulta">Primera Consulta</option>
              <option value="Plan Nutricional">Plan Nutricional</option>
              <option value="Seguimiento Nutricional">Seguimiento Nutricional</option>
              <option value="Asesoría Especializada">Asesoría Especializada</option>
            </select>
          </div>
          <div className="form-item">
            <label htmlFor="contactar">Contactar con:</label>
            <select id="contactar">
              <option value="">Seleccione</option>
              <option value="Gia Alegría">Gia Alegría</option>
              <option value="Gonzalo Bueno">Gonzalo Bueno</option>
              <option value="Bruno Balboa">Bruno Balboa</option>
              <option value="Gabriela Gavilan">Gabriela Gavilan</option>
            </select>
          </div>
          <div className="form-item form-half">
            <label htmlFor="mail">Email:</label>
            <input type="email" id="mail" />
          </div>
          <div className="form-item">
            <label htmlFor="direccion">Dirección:</label>
            <input type="text" id="direccion" />
          </div>
          <div className="form-item">
            <label htmlFor="preferencia">Preferencia de Horario:</label>
            <input type="text" id="preferencia" />
          </div>
          <div className="form-item">
            <label htmlFor="mensaje">Detalle de Consulta:</label>
            <textarea id="mensaje"></textarea>
          </div>
          <button className="form-button" type="submit">Solicitar Consulta</button>
        </form>
        {showMessage && (
          <section className="gracias show">
            <h2>¡Muchas Gracias!</h2>
            <p>Aquí puede ver los detalles de su consulta</p>
            <table>
              <tbody>
                <tr>
                  <td>Tipo de Mascota:</td>
                  <td>{formData.tipoMascota}</td>
                </tr>
                <tr>
                  <td>Nombre de su Mascota:</td>
                  <td>{formData.nombre}</td>
                </tr>
                <tr>
                  <td>Edad:</td>
                  <td>{formData.edad}</td>
                </tr>
                <tr>
                  <td>Tipo de Consulta:</td>
                  <td>{formData.tipo}</td>
                </tr>
                <tr>
                  <td>Email:</td>
                  <td>{formData.mail}</td>
                </tr>
                <tr>
                  <td>Dirección:</td>
                  <td>{formData.direccion}</td>
                </tr>
                <tr>
                  <td>Detalle de Consulta:</td>
                  <td>{formData.mensaje}</td>
                </tr>
              </tbody>
            </table>
            <button className='btn big' type="button" onClick={handleReset}>Volver al formulario</button>
          </section>
        )}
      </section>
    </>
  );
}

export default Consulta;
