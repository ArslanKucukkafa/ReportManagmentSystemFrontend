import axios from 'axios';

const API_URL = "http://localhost:8080";
const header ={
    'Accept':'*/*', 
    'Access-Control-Allow-Origin' : '*',
    'Authorization': `Bearer ${localStorage.getItem("accesToken")}`
}


const saveReport = (formData) =>{
    console.log(header)
    return axios.post(API_URL+"/api/v1/laboratories/saveReport",formData,{headers:header})
}

const updateReport = (formData) =>{
    const d =formData.get("ReportGetDto")
    const reader = new FileReader();
    reader.readAsText(d);
    reader.onload = () => {
        const report = JSON.parse(reader.result);
        console.log(report);
      };
    

    return axios.put(API_URL+"/api/v1/laboratories/updateReport",formData,{headers:header}) 
}

const deleteReport = (reportId) =>{
    return axios.post(API_URL+"/api/v1/laboratories/deleteReport?report_id="+reportId,null,{headers:header})
}

const listReport = () =>{
    console.log(localStorage.getItem("accesToken"))
    return axios.get(API_URL+"/api/v1/laboratories/getAllReports",{headers:header})
}

const getReport = (data) =>{
    console.log("data -----: ",data)
    return axios.get(API_URL+"/api/v1/laboratories/getReport?reportId="+data,{headers:header})
}

const LaborantService = {
    saveReport,
    listReport,
    getReport,
    updateReport,
    deleteReport
  }

  export default LaborantService