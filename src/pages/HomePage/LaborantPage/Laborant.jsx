import React, { useState,useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import "./Laborant.css";
import laborantService from '../../../services/laborant.service.js'
import ReactPaginate from "react-paginate";
import { Button } from 'react-bootstrap';


function Laborant() {

  const [loading, setLoading] = useState(false)
  const [reports, setReports] = useState([]);

useEffect(()=>{
  const fetchPosts = async () =>{
  setLoading(true)
  const res = await laborantService.listReport()
  console.log("Respofcdses",res)
  setReports(res.data)
  setLoading(false)

  }
  fetchPosts()
},[])

 

  console.log("Data assign is SUCCES: ",reports)


  const [pageNumber, setPageNumber] = useState(0);

  const reportsPerPage = 5;
  const pagesVisited = pageNumber * reportsPerPage;

  const displayUsers = reports.slice(pagesVisited, pagesVisited + reportsPerPage)
  .map((report) => {
    return (
      <tr>
      <th>{report.patient_identity_no}</th>
      <th>{report.patient_firstname}</th>
      <th>{report.patient_lastname}</th>
      <th>{report.create_date}</th>
      <button class="button-32">incele</button>    </tr>
    );
  });

  const pageCount = Math.ceil(reports.length / reportsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  if (loading && reports.length === 0) {
    return <h2>Loading...</h2>
  }


  return (
    <div className='App'>
        <Table className='tableStyle' striped="columns">
      <thead>
        <tr className='trstyle'>
          <th>Identfy no</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Report C||U time</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {displayUsers}
      </tbody>
      <br/>
      <ReactPaginate 
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}/>
    </Table>
    </div>
  )
}

export default Laborant