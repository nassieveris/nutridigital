import React, { useEffect, useState } from "react";
import Menucito from "../modules/Menucito";

const Datacitas = () => {
  const [registros, setRegistros] = useState([]);

  // Al cargar el componente, recuperar los datos del localStorage
  useEffect(() => {
    const registrosGuardados = JSON.parse(localStorage.getItem('registros')) || [];
    setRegistros(registrosGuardados);
  }, []);

  // Función para agrupar registros por doctor
  const agruparPorDoctor = (registros) => {
    return registros.reduce((acc, registro) => {
      const { nutricionista } = registro;
      if (nutricionista) { // Filtrar registros sin doctor
        if (!acc[nutricionista]) {
          acc[nutricionista] = [];
        }
        acc[nutricionista].push(registro);
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

  // Función para exportar registros de un doctor a un archivo .txt
  const exportarRegistros = (doctor, registros) => {
    const contenido = registros.map(registro =>
      `Soy: ${registro.sexo}, Nombre: ${registro.nombre}, Edad: ${registro.edad}, Peso: ${registro.peso}, Altura: ${registro.altura}, Tipo de Consulta: ${registro.tipo}, Día: ${registro.dia}, Horario: ${registro.horario}, Mensaje: ${registro.mensaje}`
    ).join('\n');

    const fechaActual = new Date();
    const nombreArchivo = `${doctor}_${fechaActual.toISOString().split('T')[0]}_${fechaActual.getHours()}${fechaActual.getMinutes()}.txt`;

    const element = document.createElement("a");
    const file = new Blob([contenido], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = nombreArchivo;
    document.body.appendChild(element);
    element.click();
  };

  // Agrupar y ordenar registros
  const registrosPorDoctor = agruparPorDoctor(registros);
  Object.keys(registrosPorDoctor).forEach(doctor => {
    registrosPorDoctor[doctor] = ordenarPorDiaYHora(registrosPorDoctor[doctor]);
  });

  return (
    <>
      <Menucito />
      <section className="intro medio rojo modulo">
        <div className="contenedor">
          <h2 className="sub-title text-center">Registros por Doctor</h2>
          <p className="text-center">Ordenados por Doctor</p>
          <div className="registros">
            {Object.keys(registrosPorDoctor).map((doctor, index) => (
              <div className="nutridocs" key={index}>
                <h3>{doctor}</h3>
                <button className="export" onClick={() => exportarRegistros(doctor, registrosPorDoctor[doctor])}>Exportar Registros</button>
                <table>
                  <thead>
                    <tr>
                      <th>Soy</th>
                      <th>Nombre</th>
                      <th>Peso (kg)</th>
                      <th>Edad</th>
                      <th>Altura (cm)</th>
                      <th>Tipo de Consulta</th>
                      <th>Día</th>
                      <th>Horario</th>
                      <th>Mensaje</th>
                    </tr>
                  </thead>
                  <tbody>
                    {registrosPorDoctor[doctor].map((registro, idx) => (
                      <tr key={idx}>
                        <td>{registro.sexo}</td>
                        <td>{registro.nombre}</td>
                        <td>{registro.peso}</td>
                        <td>{registro.edad}</td>
                        <td>{registro.altura}</td>
                        <td>{registro.tipo}</td>
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

export default Datacitas;
