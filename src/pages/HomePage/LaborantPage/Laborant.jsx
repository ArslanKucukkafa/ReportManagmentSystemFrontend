import React from 'react'
import Table from 'react-bootstrap/Table';
import "./Laborant.css";

function Laborant() {
  return (
    <div className='App'>
        <Table className='tableStyle' striped="columns">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <button>incele</button>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <button>incele</button>
        </tr>
        <tr>
          <td>3</td>
          <td>Larry the Bird</td>
          <td>Thornton</td>
          <td>twitter</td>
          <button>incele</button>
        </tr>
      </tbody>
    </Table>
    </div>
  )
}

export default Laborant