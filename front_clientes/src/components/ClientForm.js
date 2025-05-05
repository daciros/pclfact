import React, { useState } from 'react';
import axios from 'axios';
import '../styles/ClientForm.scss';

function ClientForm() {
  const [clientData, setClientData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    direccion: {
      calle: '',
      ciudad: '',
      codigo_postal: '',
      pais: '',
    },
    fecha_registro: new Date().toISOString(),
    estado: true,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name.startsWith('direccion.')) {
      const direccionField = name.split('.')[1];
      setClientData({
        ...clientData,
        direccion: {
          ...clientData.direccion,
          [direccionField]: value,
        },
      });
    } else {
      setClientData({
        ...clientData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/clients', clientData);
      alert('Client created successfully');
      setClientData({
        nombre: '',
        email: '',
        telefono: '',
        direccion: {
          calle: '',
          ciudad: '',
          codigo_postal: '',
          pais: '',
        },
        fecha_registro: new Date().toISOString(),
        estado: true,
      });
    } catch (error) {
      console.error('Error creating client:', error);
      alert('Error creating client');
    }
  };

  return (
    <div className="client-form-container">
      <h2>Add New Client</h2>
      <form onSubmit={handleSubmit} className="form-client">
        <label htmlFor="nombre">Name:</label>
        <input type="text" id="nombre" name="nombre" value={clientData.nombre} onChange={handleChange} required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={clientData.email} onChange={handleChange} required />

        <label htmlFor="telefono">Phone:</label>
        <input type="text" id="telefono" name="telefono" value={clientData.telefono} onChange={handleChange} required />

        <label htmlFor="calle">Street:</label>
        <input type="text" id="calle" name="direccion.calle" value={clientData.direccion.calle} onChange={handleChange} required />

        <label htmlFor="ciudad">City:</label>
        <input type="text" id="ciudad" name="direccion.ciudad" value={clientData.direccion.ciudad} onChange={handleChange} required />

        <label htmlFor="codigo_postal">Postal Code:</label>
        <input type="text" id="codigo_postal" name="direccion.codigo_postal" value={clientData.direccion.codigo_postal} onChange={handleChange} required />

        <label htmlFor="pais">Country:</label>
        <input type="text" id="pais" name="direccion.pais" value={clientData.direccion.pais} onChange={handleChange} required />

        <button type="submit" className='button-submit'>Add Client</button>
      </form>
    </div>
  );
}

export default ClientForm;