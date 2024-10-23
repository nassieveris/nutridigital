import React, { useState } from 'react';
import { opcion } from '../modules/Staff';
import { opcion as tipoOpcion } from '../modules/Llamanos';

const Consulta = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [formData, setFormData] = useState({
    sexo: '',
    nombre: '',
    edad: '',
    peso: '',
    altura: '',
    tipo: '',
    mail: '',
    direccion: '',
    dia: '',
    horario: '',
    mensaje: '',
    nutricionista: ''
  });

  const [errors, setErrors] = useState({
    sexo: '',
    nombre: '',
    edad: '',
    peso: '',
    altura: '',
    tipo: '',
    mail: '',
    direccion: '',
    dia: '',
    horario: '',
    mensaje: '',
    nutricionista: ''
  });

  const nombreRegex = /^[A-ZÁÉÍÓÚÑ][a-záéíóúñ\s]*$/;
  const edadRegex = /^\d{1,2}$/;
  const pesoRegex = /^\d{1,3}(\.\d{1,2})?$/; // Permite hasta 3 dígitos enteros y 2 decimales opcionales
  const alturaRegex = /^\d{1,3}$/; // Permite hasta 3 dígitos enteros
  const mailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const direccionRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ0-9\s.,#\-\/]+$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: '', // Limpiar el error cuando el usuario cambia el valor
    });
  };

  const validateField = (name, value) => {
    let error = '';
    switch (name) {
      case 'sexo':
        if (!value) error = 'Seleccione Sexo';
        break;
      case 'nombre':
        if (!nombreRegex.test(value)) {
          error = 'Nombre acepta hasta 30 caracteres, sólo letras y espacios.';
        }
        break;
      case 'edad':
        if (!edadRegex.test(value)) {
          error = 'Edad debe ser un número de hasta 2 dígitos.';
        }
        break;
      case 'peso':
        if (!pesoRegex.test(value)) {
          error = 'Peso debe ser un número válido (hasta 3 dígitos enteros y 2 decimales opcionales).';
        }
        break;
      case 'altura':
        if (!alturaRegex.test(value)) {
          error = 'Altura debe ser un número de hasta 3 dígitos.';
        }
        break;
      case 'tipo':
        if (!value) error = 'Debe seleccionar un servicio.';
        break;
      case 'mail':
        if (!mailRegex.test(value)) {
          error = 'Correo Electrónico no ingresado o no válido.';
        }
        break;
      case 'direccion':
        if (!direccionRegex.test(value)) {
          error = 'Dirección debe contener letras, números y espacios.';
        }
        break;
      case 'dia':
        if (!value) error = 'Debe seleccionar un día.';
        break;
      case 'horario':
        if (!value) error = 'Debe seleccionar un horario.';
        break;
      case 'mensaje':
        if (!value.trim()) {
          error = 'Debe ingresar un detalle de consulta.';
        }
        break;
      case 'nutricionista':
        if (!value) error = 'Debe seleccionar un nutricionista.';
        break;
      default:
        break;
    }
    return error;
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { sexo, nombre, edad, peso, altura, tipo, mail, direccion, dia, horario, mensaje, nutricionista } = formData;

    // Validar todos los campos antes de enviar
    const newErrors = {
      sexo: validateField('sexo', sexo),
      nombre: validateField('nombre', nombre),
      edad: validateField('edad', edad),
      peso: validateField('peso', peso),
      altura: validateField('altura', altura),
      tipo: validateField('tipo', tipo),
      mail: validateField('mail', mail),
      direccion: validateField('direccion', direccion),
      dia: validateField('dia', dia),
      horario: validateField('horario', horario),
      mensaje: validateField('mensaje', mensaje),
      nutricionista: validateField('nutricionista', nutricionista),
    };

    setErrors(newErrors);

    // Si hay algún error, no enviar el formulario
    const hasErrors = Object.values(newErrors).some((error) => error);
    if (hasErrors) return;

    // Recuperar datos previos de localStorage
    const registrosPrevios = JSON.parse(localStorage.getItem('registros')) || [];

    // Añadir los nuevos datos al array de registros
    const registrosActualizados = [...registrosPrevios, formData];

    // Guardar el array actualizado en localStorage
    localStorage.setItem('registros', JSON.stringify(registrosActualizados));

    // Mostrar mensaje de agradecimiento
    setShowMessage(true);
  };

  const handleReset = () => {
    setFormData({
      sexo: '',
      nombre: '',
      edad: '',
      peso: '',
      altura: '',
      tipo: '',
      mail: '',
      direccion: '',
      dia: '',
      horario: '',
      mensaje: '',
      nutricionista: ''
    });
    setErrors({});
    setShowMessage(false);
  };

  return (
    <>
      <section className="intro medio rojo modulo">
        <div className="contenedor">
          <h2 className="sub-title text-center">¡Agenda con nosotros!</h2>
          <p className="text-center">Nos comunicaremos vía WhatsApp para confirmarte el mejor horario disponible para ti.</p>
        </div>
      </section>
      <section className="formulario rojo">
        <form id="consultaForm" className={`form-layout ${showMessage ? '' : 'show'}`} onSubmit={handleSubmit}>
          <div className="form-item">
            <label>Soy:</label>
            <div className='form-radio'>
              <input
                type="radio"
                id="Hombre"
                name="sexo"
                value="Hombre"
                checked={formData.sexo === 'Hombre'}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <label htmlFor="Hombre">Hombre</label>
            </div>
            <div className='form-radio'>
              <input
                type="radio"
                id="Mujer"
                name="sexo"
                value="Mujer"
                checked={formData.sexo === 'Mujer'}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <label htmlFor="Mujer">Mujer</label>
            </div>
            {errors.sexo && <span className="error-message">{errors.sexo}</span>}
          </div>

          <div className="form-item">
            <label htmlFor="nombre">Nombre Completo:</label>
            <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} onBlur={handleBlur} />
            {errors.nombre && <span className="error-message">{errors.nombre}</span>}
          </div>

          <div className="form-item">
            <label htmlFor="edad">Edad:</label>
            <input type="number" id="edad" name="edad" value={formData.edad} onChange={handleChange} onBlur={handleBlur} />
            {errors.edad && <span className="error-message">{errors.edad}</span>}
          </div>

          <div className="form-item">
            <label htmlFor="peso">Peso (kg):</label>
            <input type="number" id="peso" name="peso" value={formData.peso} onChange={handleChange} onBlur={handleBlur} />
            {errors.peso && <span className="error-message">{errors.peso}</span>}
          </div>

          <div className="form-item">
            <label htmlFor="altura">Altura (cm):</label>
            <input type="number" id="altura" name="altura" value={formData.altura} onChange={handleChange} onBlur={handleBlur} />
            {errors.altura && <span className="error-message">{errors.altura}</span>}
          </div>

          <div className="form-item">
            <label htmlFor="tipo">Servicio a tomar:</label>
            <select id="tipo" name="tipo" value={formData.tipo} onChange={handleChange} onBlur={handleBlur}>
              <option value="">Seleccione</option>
              {tipoOpcion.map((tipo, index) => (
                <option key={index} value={tipo.titulo}>{tipo.titulo}</option>
              ))}
            </select>
            {errors.tipo && <span className="error-message">{errors.tipo}</span>}
          </div>

          <div className="form-item">
            <label htmlFor="nutricionista">Nutricionista:</label>
            <select id="nutricionista" name="nutricionista" value={formData.nutricionista} onChange={handleChange} onBlur={handleBlur}>
              <option value="">Seleccione</option>
              {opcion.map((nutricionista, index) => (
                <option key={index} value={nutricionista.titulo}>{nutricionista.titulo}</option>
              ))}
            </select>
            {errors.nutricionista && <span className="error-message">{errors.nutricionista}</span>}
          </div>

          <div className="form-item">
            <label htmlFor="mail">Email:</label>
            <input type="email" id="mail" name="mail" value={formData.mail} onChange={handleChange} onBlur={handleBlur} />
            {errors.mail && <span className="error-message">{errors.mail}</span>}
          </div>

          <div className="form-item">
            <label htmlFor="direccion">Dirección:</label>
            <input type="text" id="direccion" name="direccion" value={formData.direccion} onChange={handleChange} onBlur={handleBlur} />
            {errors.direccion && <span className="error-message">{errors.direccion}</span>}
          </div>

          <div className="form-item">
            <label htmlFor="dia">Día:</label>
            <input type="date" id="dia" name="dia" value={formData.dia} onChange={handleChange} onBlur={handleBlur} />
            {errors.dia && <span className="error-message">{errors.dia}</span>}
          </div>

          <div className="form-item">
            <label htmlFor="horario">Preferencia de Horario:</label>
            <select id="horario" name="horario" value={formData.horario} onChange={handleChange} onBlur={handleBlur}>
              <option value="">Seleccione</option>
              <option value="15:00">15:00</option>
              <option value="15:30">15:30</option>
              <option value="16:00">16:00</option>
              <option value="16:30">16:30</option>
              <option value="17:00">17:00</option>
              <option value="17:30">17:30</option>
              <option value="18:00">18:00</option>
              <option value="18:30">18:30</option>
              <option value="19:00">19:00</option>
              <option value="19:30">19:30</option>
              <option value="20:00">20:00</option>
              <option value="20:30">20:30</option>
              <option value="21:00">21:00</option>
            </select>
            {errors.horario && <span className="error-message">{errors.horario}</span>}
          </div>

          <div className="form-item">
            <label htmlFor="mensaje">Detalle de Consulta:</label>
            <textarea id="mensaje" name="mensaje" value={formData.mensaje} onChange={handleChange} onBlur={handleBlur} rows="5"></textarea>
            {errors.mensaje && <span className="error-message">{errors.mensaje}</span>}
          </div>

          <button className="form-button" type="submit">Solicitar Consulta</button>
        </form>

        {showMessage && (
          <section className="gracias show">
            <h2>¡Muchas Gracias!</h2>
            <p>Aquí puede ver los detalles de su consulta</p>
            {/* Mostrar los detalles del formulario */}
            <button className='btn big' type="button" onClick={handleReset}>Volver al formulario</button>
          </section>
        )}
      </section>
    </>
  );
};

export default Consulta;
