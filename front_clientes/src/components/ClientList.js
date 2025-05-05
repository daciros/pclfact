import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReusableTable from '../components/ReusableTable';
import { Button } from '@mui/material';
import '../styles/ClientList.scss';

const ClientList = () => {
    const [clients, setClients] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchClients = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/clients');
                setClients(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchClients();
    }, []);

    const columns = [
        { Header: 'Nombre', accessor: 'nombre' },
        { Header: 'Email', accessor: 'email' },
        { Header: 'Teléfono', accessor: 'telefono' },
        // Add more columns as needed
    ];

    if (loading) {
        return <div className='loading-client-list'>Loading...</div>;
    }

    if (error) {
        return <div className='error-client-list'>Error: {error}</div>;
    }

    return (
        <div className="client-list">
            <h1>Lista de Clientes</h1>
            <Button variant="contained" color="primary">
                Agregar Cliente
            </Button>
            <ReusableTable columns={columns} data={clients} />
        </div>
    );
};

export default ClientList;