import React from 'react';

const TableRow = ({ id, amount, description, discountedAmount }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{amount}</td>
      <td>{description}</td>
      <td>{discountedAmount}</td>
      <td>
        <button className="btn btn-success btn-sm ms-2 me-2 px-3">Edit</button>
        <button className="btn btn-danger btn-sm">Delete</button>
      </td> 
    </tr>
  );
}

export default TableRow;
