import React from 'react';
import { Table } from 'react-bootstrap';
import { ruNames } from '../helpers';

const TableOms = (props) => {
  const { groupedCodes, total } = props;
  const renderItems = (list) => {
    const columnNames = Object.keys(ruNames);
    return (
      list.map((item) => (
        <tr key={item.NAME + item.TOTAL_PRICE}>
          {columnNames.map((name, j) => <td key={`${name + j}`}>{item[name]}</td>)}
        </tr>
      ))
    );
  };
  const style = { overflow: 'auto', height: '60vh' };
  const renderTable = (list) => {
    const columnNames = Object.keys(list[0]);
    return (
      <Table style={{ position: 'relative' }} size="sm" striped bordered hover responsive>
        <thead>
          <tr>
            {columnNames.map((name) => <th style={{ position: 'sticky', top: '0' }} key={name}>{ruNames[name]}</th>)}
          </tr>
        </thead>
        <tbody>
          {renderItems(groupedCodes)}
          {renderItems(total)}
        </tbody>
      </Table>
    );
  };
  return (
    <div style={style}>{groupedCodes === undefined ? null : renderTable(groupedCodes)}</div>
  );
};

export default TableOms;
