import React from 'react';

import './App.css';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBModalFooter,
  MDBIcon,
  MDBCardHeader,
  MDBBtn,
  MDBInput
} from "mdbreact";
function App() {
  return (
 
<MDBContainer>
<MDBRow>
  <MDBCol md="6">
    <MDBCard>
      <MDBCardBody>
        <MDBCardHeader className="form-header deep-blue-gradient rounded">
          <h3 className="my-3">
            <MDBIcon icon="lock" /> Covid 19 FCMG Helpline:
          </h3>
        </MDBCardHeader>
        <form>
          <div className="grey-text">
            <MDBInput
              label="Type your email"
              icon="envelope"
              group
              type="email"
              validate
              error="wrong"
              success="right"
            />
            <MDBInput
              label="Type your Message"
              icon="lock"
              group
              type="password"
              validate
            />
          </div>

        <div className="text-center mt-4">
          <MDBBtn
            color="light-blue"
            className="mb-3"
            type="submit"
          >
            Submit
          </MDBBtn>
        </div>
        </form>
        <MDBModalFooter>
          <div className="font-weight-light">
          <a href="https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf">Covid 19 Helpline Numbers</a>
          
          </div>
        </MDBModalFooter>
      </MDBCardBody>
    </MDBCard>
  </MDBCol>
</MDBRow>
</MDBContainer>
  );
}

export default App;
