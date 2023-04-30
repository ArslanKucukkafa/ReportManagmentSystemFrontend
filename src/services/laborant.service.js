import axios from 'axios';

const API_URL = "http://localhost:8080";

const header ={
    'Accept':'*/*', 
    'Access-Control-Allow-Origin' : '*',
    'Authorization': `Bearer ${localStorage.getItem("token")}`
}


const saveReport = (report) =>{
    console.log(header)
    return axios.post(API_URL+"/api/v1/laboratories/saveReport",report,{headers:header})
}

const listReport = () =>{
    return axios.get(API_URL+"/api/v1/laboratories/getAllReports",{headers:header})
}

const getReport = (data) =>{
    console.log("data -----: ",data)
    return axios.get(API_URL+"/api/v1/laboratories/getReport?reportId="+data,{headers:header})
}

const LaborantService = {
    saveReport,
    listReport,
    getReport
  }

  export default LaborantService