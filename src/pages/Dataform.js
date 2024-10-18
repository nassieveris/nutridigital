import React, { useEffect, useState } from "react";

const Dataform = () => {
  const [registros, setRegistros] = useState([]);

  // Al cargar el componente, recuperar los datos del localStorage
  useEffect(() => {
    const registrosGuardados = JSON.parse(localStorage.getItem('registros')) || [];
    setRegistros(registrosGuardados);
  }, []);

  // Función para eliminar un registro específico
  const eliminarRegistro = (index) => {
    const nuevosRegistros = registros.filter((_, i) => i !== index);
    setRegistros(nuevosRegistros);
    localStorage.setItem('registros', JSON.stringify(nuevosRegistros));
  };

  // Función para eliminar todos los registros
  const eliminarTodos = () => {
    setRegistros([]); // Vaciar la lista de registros
    localStorage.removeItem('registros'); // Eliminar el item del localStorage
  };

  return (
    <>
      <section className="intro medio rojo modulo">
        <div className="contenedor">
          <h2 className="sub-title text-center">Resultados</h2>
          <p className="text-center">Estos son los datos guardados en el formulario</p>
          <div className="registros">

          {registros.length === 0 ? (
            <p className="text-center">No hay registros guardados.</p>
          ) : (
            <>
              <table>
                <thead>
                  <tr>
                    <th>Soy</th>
                    <th>Nombre</th>
                    <th>Edad</th>
                    <th>Peso (kg)</th>
                    <th>Altura (cm)</th>
                    <th>Tipo</th>
                    <th>Email</th>
                    <th>Dirección</th>
                    <th>Día</th>
                    <th>Horario</th>
                    <th>Mensaje</th>
                    <th>Acciones</th> {/* Nueva columna para acciones */}
                  </tr>
                </thead>
                <tbody>
                  {registros.map((registro, index) => (
                    <tr key={index}>
                      <td>{registro.sexo}</td>
                      <td>{registro.nombre}</td>
                      <td>{registro.edad}</td>
                      <td>{registro.peso}</td>
                      <td>{registro.altura}</td>
                      <td>{registro.tipo}</td>
                      <td>{registro.mail}</td>
                      <td>{registro.direccion}</td>
                      <td>{registro.dia}</td>
                      <td>{registro.horario}</td>
                      <td>{registro.mensaje}</td>
                      <td>
                        {/* Botón para eliminar un registro */}
                        <button className="delete" onClick={() => eliminarRegistro(index)}>Eliminar Registro</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {/* Botón para eliminar todos los registros */}
              <div className="text-center">
                <button onClick={eliminarTodos} className="delete eliminar-todos-btn">Eliminar todos los Registros</button>
              </div>
            </>
          )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Dataform;

