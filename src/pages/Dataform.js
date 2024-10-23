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

  // Función para obtener la fecha actual en formato YYYY-MM-DD
  const obtenerFechaActual = () => {
    const hoy = new Date();
    const año = hoy.getFullYear();
    const mes = String(hoy.getMonth() + 1).padStart(2, '0'); // Mes actual (añadir 1 porque comienza en 0)
    const día = String(hoy.getDate()).padStart(2, '0');
    return `${año}-${mes}-${día}`;
  };

  // Función para exportar registros a un archivo .txt
  const exportarRegistros = () => {
    // Generar el contenido del archivo .txt
    const contenido = registros.map(registro =>
      `Soy: ${registro.sexo}, Nombre: ${registro.nombre}, Edad: ${registro.edad},
      Peso: ${registro.peso}, Altura: ${registro.altura}, Tipo: ${registro.tipo},
      Email: ${registro.mail}, Dirección: ${registro.direccion}, Nutricionista: ${registro.nutricionista},
      Día: ${registro.dia}, Horario: ${registro.horario}, Mensaje: ${registro.mensaje}`
    ).join('\n');

    // Crear un archivo .txt con el nombre basado en la fecha actual
    const fecha = obtenerFechaActual();
    const nombreArchivo = `${fecha}_registros.txt`;

    // Crear un archivo .txt y descargarlo
    const blob = new Blob([contenido], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = nombreArchivo;
    link.click();
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
                    <th>Nutricionista</th>
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
                      <td>{registro.nutricionista}</td>
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
              {/* Botones adicionales */}
              <div className="text-center data-text">
                <button onClick={eliminarTodos} className="delete eliminar-todos-btn">Eliminar todos los Registros</button>
                <button onClick={exportarRegistros} className="export exportar-btn">Exportar/descargar Registros a un archivo .txt</button> {/* Nuevo botón para exportar */}
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
