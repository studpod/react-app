import React from 'react';

const InfoTable = () => {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Info 1</td>
          <td>Details 1</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Info 2</td>
          <td>Details 2</td>
        </tr>
      </tbody>
    </table>
  );
};

export default InfoTable;
