import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Card } from 'react-bootstrap';

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
      await axios.post('https://3050-idx-pclfactgit-1745446889691.cluster-f4iwdviaqvc2ct6pgytzw4xqy4.cloudworkstations.dev/api/clients', clientData);
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
    <div className="container mt-4">
        <Card>
            <Card.Header>
                <h2>Add New Client</h2>
            </Card.Header>
            <Card.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="nombre">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control type="text" name="nombre" value={clientData.nombre} onChange={handleChange} required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control type="email" name="email" value={clientData.email} onChange={handleChange} required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="telefono">
                        <Form.Label>Phone:</Form.Label>
                        <Form.Control type="text" name="telefono" value={clientData.telefono} onChange={handleChange} required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="calle">
                        <Form.Label>Street:</Form.Label>
                        <Form.Control type="text" name="direccion.calle" value={clientData.direccion.calle} onChange={handleChange} required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="ciudad">
                        <Form.Label>City:</Form.Label>
                        <Form.Control type="text" name="direccion.ciudad" value={clientData.direccion.ciudad} onChange={handleChange} required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="codigo_postal">
                        <Form.Label>Postal Code:</Form.Label>
                        <Form.Control type="text" name="direccion.codigo_postal" value={clientData.direccion.codigo_postal} onChange={handleChange} required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="pais">
                        <Form.Label>Country:</Form.Label>
                        <Form.Control type="text" name="direccion.pais" value={clientData.direccion.pais} onChange={handleChange} required />
                    </Form.Group>

                    <Button type="submit" variant="primary">
                        Add Client
                    </Button>
                </Form>
            </Card.Body>
      </Card>
    </div>
  );
}

export default ClientForm;