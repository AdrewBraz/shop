import React from 'react';
import { Table } from 'react-bootstrap';
import { ruNames } from '../helpers';

const TableOms = (props) => {
  const { groupedCodes, total } = props;
  const renderPatients = (list) => {
    const columnNames = Object.keys(ruNames);
    return (
      list.map((item, i) => (
        <tr key={i}>
          {columnNames.map((name, j) => <td key={`${name + j}`}>{item[name]}</td>)}
        </tr>
      ))
    );
  };
  const renderTable = (list) => {
    const columnNames = Object.keys(list[0]);
    return (
      <Table size="sm" striped bordered hover responsive>
        <thead>
          <tr>
            {columnNames.map((name) => <th key={name}>{ruNames[name]}</th>)}
          </tr>
        </thead>
        <tbody>
          {renderPatients(groupedCodes)}
          {renderPatients(total)}
        </tbody>
      </Table>
    );
  };
  return (
    <div>{groupedCodes === undefined ? null : renderTable(groupedCodes)}</div>
  );
};

export default TableOms;