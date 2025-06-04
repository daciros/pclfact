import React, { useState, useEffect } from 'react';
import { Card, Button, Table, Alert } from 'react-bootstrap';
import { getAllGeneric } from '../utils/api';

//import '../styles/ClientList.scss';
const ClientList = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getAllClients = async () => {
      setLoading(true);
        setError(null);
      try {
        const data = await getAllGeneric('api/clients/');
        setError('An error occurred');
      } finally {
        setLoading(false);
      }
    };
    getAllClients();
  }, []);

  return (
    <Card className="mt-4">
        <Card.Body className="text-center ">
            <Card.Title>Lista de Clientes</Card.Title>
            {loading && <Alert variant="info">Loading...</Alert>}
            {error && <Alert variant="danger">Error: {error}</Alert>}
            {!loading && !error && (
                <>
                    <Button className="mb-3" >
                        Agregar Cliente
                    </Button>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Email</th>
                                <th>Teléfono</th>
                            </tr>
                        </thead>
                        <tbody>
                            {clients.map((client) => (
                                <tr key={client.id}>
                                    <td>{client.nombre}</td>
                                    <td>{client.email}</td>
                                    <td>{client.telefono}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </>
            )}
        </Card.Body>
    </Card>
  );
};

export default ClientList;