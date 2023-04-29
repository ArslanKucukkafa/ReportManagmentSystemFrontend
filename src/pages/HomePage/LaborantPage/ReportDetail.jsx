import React from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn,MDBInput,MDBTextArea } from 'mdb-react-ui-kit';


function ReportDetail() {
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
                    src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp'
                    alt='Generic placeholder image'
                    fluid />
                </div>
{/* 
                <div class="mb-3">
                    <label for="formFile" class="form-label">Default file input example</label>
                    <input class="form-control" type="file" id="formFile" />
                </div> */}


                <div className="flex-grow-1 ms-3">
                  <MDBCardTitle>Fadime DeccalOglu</MDBCardTitle>
                  <MDBCardText>123456789</MDBCardText>

                  <div className="d-flex justify-content-start rounded-3 p-2 mb-2"
                    style={{ backgroundColor: '#efefef' }}>
                    <div>
                      <p className="large text-muted mb-1">Report </p>
                      <p className="mb-0">41</p>
                    </div>
                  </div>

                 <div className="d-flex justify-content-start rounded-3 p-2 mb-2"
                    style={{ backgroundColor: '#efefef' }}>
                    <div>
                      <p className="large text-muted mb-1">Oluşturulma Tarihi</p>
                      <p className="mb-0">2023-12-23</p>
                    </div>
                  </div>  

                  <div className="d-flex justify-content-start rounded-3 p-2 mb-2"
                    style={{ backgroundColor: '#efefef' }}>
                    <div>
                      <p className="large text-muted mb-1">Tanı</p>
                      <MDBInput  id='form1' type='text' size='lg' style={{ width: '400px',  }}/>
                    </div>
                  </div>

                  <div className="d-flex justify-content-start rounded-3 p-2 mb-2"
                    style={{ backgroundColor: '#efefef' }}>
                    <div>
                      <p className="large text-muted mb-1">Detay</p>
                      <MDBTextArea label='Message' id='textAreaExample' rows={7} style={{ width: '900px', borderRadius: '5px' }}/>
                    </div>
                  </div>

                  <div className="d-flex pt-1">
                    <MDBBtn className="me-1" color='danger'>Sil</MDBBtn>
                    <MDBBtn className="flex-grow-1">Update</MDBBtn>
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



