import React, { useEffect, useState } from "react";
import Menucito from "../modules/Menucito";

const Datatipos = () => {
  const [registros, setRegistros] = useState([]);

  // Al cargar el componente, recuperar los datos del localStorage
  useEffect(() => {
    const registrosGuardados = JSON.parse(localStorage.getItem('registros')) || [];
    setRegistros(registrosGuardados);
  }, []);

  // Función para agrupar registros por tipo de consulta
  const agruparPorTipo = (registros) => {
    return registros.reduce((acc, registro) => {
      const { tipo } = registro;
      if (tipo) { // Filtrar registros sin tipo
        if (!acc[tipo]) {
          acc[tipo] = [];
        }
        acc[tipo].push(registro);
      }
      return acc;
    }, {});
  };

  // Función para ordenar registros por día y hora
  const ordenarPorDiaYHora = (registros) => {
    return registros.sort((a, b) => {
      const fechaA = new Date(`${a.dia}T${a.horario}`);
      const fechaB = new Date(`${b.dia}T${b.horario}`);
      return fechaA - fechaB;
    });
  };

  // Función para exportar registros de un tipo a un archivo .txt
  const exportarRegistros = (tipo, registros) => {
    const contenido = registros.map(registro =>
      `Soy: ${registro.sexo}, Nombre: ${registro.nombre}, Edad: ${registro.edad}, Peso: ${registro.peso}, Altura: ${registro.altura}, Nutricionista: ${registro.nutricionista}, Día: ${registro.dia}, Horario: ${registro.horario}, Mensaje: ${registro.mensaje}`
    ).join('\n');

    const fechaActual = new Date();
    const nombreArchivo = `${tipo}_${fechaActual.toISOString().split('T')[0]}_${fechaActual.getHours()}${fechaActual.getMinutes()}.txt`;

    const element = document.createElement("a");
    const file = new Blob([contenido], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = nombreArchivo;
    document.body.appendChild(element);
    element.click();
  };

  // Agrupar y ordenar registros
  const registrosPorTipo = agruparPorTipo(registros);
  Object.keys(registrosPorTipo).forEach(tipo => {
    registrosPorTipo[tipo] = ordenarPorDiaYHora(registrosPorTipo[tipo]);
  });

  return (
    <>
      <Menucito />
      <section className="intro medio rojo modulo">
        <div className="contenedor">
          <h2 className="sub-title text-center">Registros por Tipo de Consulta</h2>
          <p className="text-center">Ordenados por Tipo de Consulta</p>
          <div className="registros">
            {Object.keys(registrosPorTipo).map((tipo, index) => (
              <div className="tipodocs" key={index}>
                <h3>{tipo}</h3>
                <button className="export" onClick={() => exportarRegistros(tipo, registrosPorTipo[tipo])}>Exportar Registros</button>
                <table>
                  <thead>
                    <tr>
                      <th>Soy</th>
                      <th>Nombre</th>
                      <th>Peso (kg)</th>
                      <th>Edad</th>
                      <th>Altura (cm)</th>
                      <th>Nutricionista</th>
                      <th>Día</th>
                      <th>Horario</th>
                      <th>Mensaje</th>
                    </tr>
                  </thead>
                  <tbody>
                    {registrosPorTipo[tipo].map((registro, idx) => (
                      <tr key={idx}>
                        <td>{registro.sexo}</td>
                        <td>{registro.nombre}</td>
                        <td>{registro.peso}</td>
                        <td>{registro.edad}</td>
                        <td>{registro.altura}</td>
                        <td>{registro.nutricionista}</td>
                        <td>{registro.dia}</td>
                        <td>{registro.horario}</td>
                        <td>{registro.mensaje}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Datatipos;
