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

import AppSubFolder from './AppSubfolder';

export default class App extends React.Component{
 constructor(){
   super()
   this.state = ({
    value: 'Response Placeholder',
    textValue : '',
    showMe: 'Submit',
    color: 'light-blue'
   });
 }
  
 handleClick() {
  
 if(this.state.textValue !== ''){
  this.setState({
    showMe: 'Loading..........',
    color: 'light-red'
  },
  function() { fetch('http://localhost:8000/')
  .then(resp => resp.json())
  .then((response) => {
    this.setState({
      value: response.explanation,
      showMe: 'Submit',
      color: 'light-blue'
    });

  })
  .catch((error)=>{
    console.log(error);
    this.setState({ 
      showMe: 'Submit',
      color: 'light-blue'
    });
  }) }
  );
  
} else {
  alert("Please Raise a Question in 'Type Your Message Input Box'")
}

}

onChangeMessage(event) {
  this.setState({
    textValue: event.target.value
  })
}
render(){
  
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
                  type="text"
                  validate
                  onChange = {(event)=>this.onChangeMessage(event)}
                />
              </div>
    
            <div className="text-center mt-4">
              <MDBBtn
                color={this.state.color}
                className="mb-3"
                onClick={() => this.handleClick()}
              >
                {this.state.showMe}
              </MDBBtn>
            </div>
            </form>
            <MDBModalFooter>
              <div className="font-weight-light">
              <a href="https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf">Covid 19 Helpline Numbers</a>
               
              </div>
            </MDBModalFooter>
            <div>
            <AppSubFolder value ={this.state.value}/>
          </div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    </MDBContainer>
      );
      
}

}
