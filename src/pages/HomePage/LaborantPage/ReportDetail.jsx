import React,{useEffect} from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn,MDBInput,MDBTextArea } from 'mdb-react-ui-kit';
import { useLocation } from 'react-router-dom';
import LaborantService from '../../../services/laborant.service';
import { useState } from 'react';


function ReportDetail () {

    const location = useLocation();
    // const [loading, setLoading] = useState(false);


    const [report, setReport] = useState({
      patient_firstname: Date,
      patient_lastname: "",
      patient_identity_no: "",
      dfnTitle: "",
      dfnDetails: "",
      create_date:"",
      reportId:0,
      image:{
        data:"",
        image_id:0,
        image_name:"",
        image_type:""
      }
    });

    const displayReport = () =>{
        LaborantService.getReport(location?.state.reportId).then((res)=>{
            console.log(res);
            console.log("location?.state.data : ",location?.state.data)
            setReport(res.data)})
    }

    useEffect(() => {
      let ignore = false;
      
      if (!ignore)  displayReport()
      return () => { ignore = true; }
      },[]);


     const onTodoChange =(event)=>{
      setReport()
    }


  return (
    <div className="vh-100" style={{ backgroundColor: '#9de2ff' }}>
    <MDBContainer>
      <MDBRow className="justify-content-center">
        <MDBCol md="20" lg="100" xl="100" className="mt-5">
          <MDBCard style={{ borderRadius: '45px' }}>
            <MDBCardBody className="p-4">
              <div className="d-flex text-black">
                <div className="flex-shrink-0">
                  <MDBCardImage
                    style={{ width: '300px',height:'400px', borderRadius: '5px' }}
                    src={'data:'+report.image.image_type+';base64,'+report.image.data}
                    alt='Generic placeholder image'
                    fluid />
                </div>
                <div className="flex-grow-1 ms-3">
                  <MDBCardTitle>{report.patient_firstname+" "+report.patient_lastname}</MDBCardTitle>
                  <MDBCardText>{report.patient_identity_no}</MDBCardText>

                  <div className="d-flex justify-content-start rounded-3 p-2 mb-2"
                    style={{ backgroundColor: '#efefef' }}>
                    <div>
                      <p className="large text-muted mb-1">Report Id </p>
                      <p className="mb-0">{report.reportId}</p>
                    </div>
                  </div>

                 <div className="d-flex justify-content-start rounded-3 p-2 mb-2"
                    style={{ backgroundColor: '#efefef' }}>
                    <div>
                      <p className="large text-muted mb-1">Oluşturulma Tarihi</p>
                      <p className="mb-0">{report.create_date}</p>
                    </div>
                  </div>

                  <div className="d-flex justify-content-start rounded-3 p-2 mb-2"
                    style={{ backgroundColor: '#efefef' }}> 
                <div class="mb-3">
                    <label for="formFile" class="form-label">Default file input example</label>
                    <input class="form-control" type="file" id="formFile" />
                </div>
                  </div>
 

                  <div className="d-flex justify-content-start rounded-3 p-2 mb-2"
                    style={{ backgroundColor: '#efefef' }}>
                    <div>
                      <p className="large text-muted mb-1">Tanı</p>
                      <MDBInput id='form1' placeholder={report.dfnTitle} type='text' size='lg' style={{ width: '400px',  }} />
                    </div>
                  </div>

                  <div className="d-flex justify-content-start rounded-3 p-2 mb-2"
                    style={{ backgroundColor: '#efefef' }}>
                    <div>
                      <p className="large text-muted mb-1">Detay</p>
                      <MDBTextArea label='Message' id='textAreaExample' rows={7} style={{ width: '900px', borderRadius: '5px' }} placeholder={report.dfnDetails}/>
                    </div>
                  </div>

                  <div className="d-flex pt-1">
                    <MDBBtn className="me-1" color='danger'>Sil</MDBBtn>
                    <MDBBtn className="flex-grow-1" onClick={displayReport}>Update</MDBBtn>
                  </div>
                </div>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  </div>
  )
}

export default ReportDetail



