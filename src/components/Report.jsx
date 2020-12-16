import React from 'react';
import { Container } from 'react-bootstrap';
import AddFileForm from './AddFileForm';
import Table from './Table';

export default () => {
    return (
        <Container>
            <AddFileForm />
            <Table />
        </Container>
    )
}