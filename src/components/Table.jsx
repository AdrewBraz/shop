import React from 'react';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';

export default () => {
const list = useSelector(({store}) => store.groupedData)


const renderPatients = (list) => {
    const columnNames = Object.keys(list[0])
    return(
        list.map((item, i) => (
            <tr key={i}>
                {columnNames.map((name, j) => <td key={`${name + j}`}>{item[name]}</td>)}
            </tr>
           )
        )
    )}
    const renderTable = (list) => {
        const columnNames = Object.keys(list[0])
        return ( <Table striped bordered hover responsive>
                            <thead>
                                <tr>
                                {columnNames.map(name => <th key={name} >{name}</th>)}
                                </tr>
                            </thead>
                            <tbody>
                                {renderPatients(list)}
                            </tbody>
                        </Table>)
    }
    return (
        <div>{list === undefined ? null : renderTable(list)}</div>
    )
}