import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../Style/abel.css'; // Importar el CSS Module

const Creacion = () => {
  const [data, setData] = useState({
    students: [],
    searchTerm: '',
    filteredData: [],
    infoGeneral: [],
    infoGeneralIndex: 0,
    infoGeneralCreator: '',
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchCreacion = async () => {
      const response = await axios.get('/api/datos');
      setData({
        ...data,
        students: response.data,
        filteredData: response.data,
      });
    };

    fetchCreacion();
  }, []);

  
    setFilteredData(filtered);
  };

  const handleClear = async () => {
    setSearchTerm('');
    setFilteredData(data.creacion);
  };

  const handleInfoGeneral = async (id) => {
    const response = await axios.get(`/api/info-general/${id}`);
    const infoGeneral = response.data;
    setData({
      ...data,
      infoGeneral,
      infoGeneralIndex: id,
      infoGeneralCreator: infoGeneral.usuarioCreador,
    });
  };

  return (
    <>
      
           
          </fieldset>
        </form>
        <div>
          {data.infoGeneral.length > 0 && (
            <div>
              <h2><b>Información General</b></h2>
              <ul>
                <li>
                  ID: {data.infoGeneral.id}
                </li>
                <li>
                  Nombres: {data.infoGeneral.nombres}
                </li>
                <li>
                  Apellidos: {data.infoGeneral.apellidos}
                </li>
                <li>
                  Fecha de Nacimiento: {data.infoGeneral.fechaNacimiento}
                </li>
                <li>
                  Estado: {data.infoGeneral.estado}
                </li>
                <li>
                  Tipo de Información: {data.infoGeneral.tipoInformacion}
                </li>
                <li>
                  Fecha de Creación: {data.infoGeneral.fechaCreacion}
                </li>
                <li>
                  Fecha de Actualización: {data.infoGeneral.fechaActualizacion}
                </li>
                <li>
                  Usuario Creador: {data.infoGeneral.usuarioCreador}
                </li>
                <li>
                  Estado de la Información: {data.infoGeneral.estadoInformacion}
                </li>
              </ul>
            </div>
          )}
          {data.filteredData.length > 0 && (
            <div>
              <h2><b>Resultados de Búsqueda</b></h2>
              <ul>
                {data.filteredData.map((student) => (
                  <li key={student.id}>
                    {student.ID}
                    <br />
                    {student.Nombres}
                    <br />
                    {student.Apellidos}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Creacion;