import { useState } from 'react';
import axios from 'axios';

const CustomerSearchComponent = ({ initialData }) => {
  const [data, setData] = useState(initialData);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCliente, setSelectedCliente] = useState(null);

  // Manejador de búsqueda
  const handleSearch = () => {
    const trimmedSearchTerm = searchTerm.trim().toUpperCase();
    const found = data.find(cliente => cliente.ID.toString() === trimmedSearchTerm);
    setSelectedCliente(found || null);
  };

  // Limpiar búsqueda y seleccionado
  const handleClear = () => {
    setSearchTerm('');
    setSelectedCliente(null);
  };

  return (
    <> 
      <div className="container">
        <form>
          <h1><b>CONSULTA DE CLIENTES</b></h1>
          <label>ID: 
            <input 
              type="text" 
              value={searchTerm} 
              onChange={(e) => setSearchTerm(e.target.value)} 
            />
          </label><br /><br />
          <label>Nombres: 
            <input 
              type="text" 
              value={selectedCliente ? selectedCliente.Nombres : ''} 
              disabled 
            />
          </label><br /><br />
          <label>Apellidos: 
            <input 
              type="text" 
              value={selectedCliente ? selectedCliente.Apellidos : ''} 
              disabled 
            />
          </label><br /><br />
          <label>Género: 
            <input 
              type="text" 
              value={selectedCliente ? selectedCliente.Genero : ''} 
              disabled 
            />
          </label><br /><br />
          <label>Fecha de Nacimiento: 
            <input 
              type="text" 
              value={selectedCliente ? selectedCliente.FechaNacimiento : ''} 
              disabled 
            />
          </label><br /><br />
          <label>Estado: 
            <input 
              type="text" 
              value={selectedCliente ? selectedCliente.Estado : ''} 
              disabled 
            />
          </label><br /><br />
          
          <h2>Información General</h2>
          <label>Tipo de Información: 
            <input 
              type="text" 
              value={selectedCliente ? selectedCliente.TipoInformacion : ''} 
              disabled 
            />
          </label><br /><br />
          <label>Fecha de Creación: 
            <input 
              type="text" 
              value={selectedCliente ? selectedCliente.FechaCreacion : ''} 
              disabled 
            />
          </label><br /><br />
          <label>Fecha de Actualización: 
            <input 
              type="text" 
              value={selectedCliente ? selectedCliente.FechaActualizacion : ''} 
              disabled 
            />
          </label><br /><br />
          <label>Usuario Creador: 
            <input 
              type="text" 
              value={selectedCliente ? selectedCliente.UsuarioCreador : ''} 
              disabled 
            />
          </label><br /><br />
          <label>Estado de la Información: 
            <input 
              type="text" 
              value={selectedCliente ? selectedCliente.EstadoInformacion : ''} 
              disabled 
            />
          </label><br /><br />

          <
           
        </form>
      </div>
    </>
  );
};

export default CustomerSearchComponent;

// Cargar datos del servidor en el momento de la carga de la página
export async function getServerSideProps() {
  try {
    const response = await axios.get('https://tu-api-url.com/api/clientes');
    return { props: { initialData: response.data } };
  } catch (error) {
    console.error("Error al obtener los datos:", error);
    return { props: { initialData: [] } };
  }
}
