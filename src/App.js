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
  MDBInput,
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownToggle,
  MDBDropdownMenu
} from "mdbreact";

import AppSubFolder from './AppSubfolder';
import { Link } from 'react-router-dom'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = ({
      value: 'Response Placeholder',
      textValue: '',
      showMe: 'Submit',
      color: 'light-blue',
      location: '',
      drop: 'food',
      sessionId: ""
    });
    fetch('https://covid-assistant-simpl.eu-gb.mybluemix.net/api/session')
      .then(resp => resp.json())
      .then((response) => {
        this.setState({
          sessionId: response.result.session_id,

        });

      })
      .catch((error) => {
        console.log(error);
      })




  }

  handleClick() {

    if (this.state.textValue !== '' && this.state.location !== '') {

      this.setState({
        showMe: 'Loading..........',
        color: 'light-red'
      },
        function () {
         
          fetch('https://covid-assistant-simpl.eu-gb.mybluemix.net/api/message', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "session_id": this.state.sessionId, "input": { "message_type": "text", "text": this.state.textValue } })
          })
            .then(resp => resp.json())
            .then((response) => {
              this.setState({
                value: response.result.output.generic[0].text,
                showMe: 'Submit',
                color: 'light-blue'
              });

            })
            .catch((error) => {
              console.log(error);
              this.setState({
                showMe: 'Submit',
                color: 'light-blue'
              });
            })
        }
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
  onChangeLocation(event) {
    this.setState({
      location: event.target.value
    })
  }
  onChangeDropdown(event) {
    this.setState({
      drop: event.target.value
    })
  }
  render() {

    return (
      <div>
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
                        label="Enter Location Pincode"
                        icon="envelope"
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                        onChange={(event) => this.onChangeLocation(event)}
                      />
                      <MDBInput
                        label="Type your Message"
                        icon="lock"
                        group
                        type="text"
                        validate
                        onChange={(event) => this.onChangeMessage(event)}
                      />
                    </div>
                    <div className="text-left mt-4">
                      <MDBDropdown onSelect={(event) => this.onChangeDropdown(event)}>
                        <MDBDropdownToggle caret color="primary">
                          Services Offered
                        </MDBDropdownToggle>
                        <MDBDropdownMenu basic>
                          <MDBDropdownItem>Food</MDBDropdownItem>
                          <MDBDropdownItem>Medical</MDBDropdownItem>
                          <MDBDropdownItem>Goods</MDBDropdownItem>
                        </MDBDropdownMenu>
                      </MDBDropdown>
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
                    <AppSubFolder value={this.state.value} />
                  </div>
                  <button class="btn btn-light">
                    <Link to={"/help"}>Seek Help</Link>
                  </button>

                </MDBCardBody>
              </MDBCard>

            </MDBCol>

          </MDBRow>

        </MDBContainer>

      </div>

    );

  }

}
