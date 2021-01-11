// @ts-check
import React from 'react';
import { Table } from 'react-bootstrap';
import { ruNames } from '../../helpers';

const TableOms = (props) => {
  const { data } = props;
  const renderItems = (list) => {
    const columnNames = Object.keys(list[0]);
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
    console.log(list);
    const columnNames = Object.keys(list[0]);
    return (
      <Table size="sm" striped bordered hover responsive>
        <thead>
          <tr style={{ background: '#C0C0C0' }}>
            {columnNames.map((name) => <th style={{ position: 'sticky', top: '0', background: '#C0C0C0' }} key={name}>{ruNames[name]}</th>)}
          </tr>
        </thead>
        <tbody>
          {renderItems(list)}
        </tbody>
      </Table>
    );
  };
  return (
    <div style={style}>{data.length === 0 ? null : renderTable(data)}</div>
  );
};

export default TableOms;
