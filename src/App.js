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
  MDBDropdownMenu,
  MDBBadge
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
      sessionId: "",
      840: "Essential Service details of Kilpauk 600010",
      920: "Please provide Essential details of Vepery 600007",
      955: "Essential service details at tondiarpet",
      965: "Essential details at central 600001",
      940: "Essential details of Mandaveli 600001",
      835: "Essential details of Nanganallur 600061",
      873: "please provide essential services at sholinganallur 600119"

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
            body: JSON.stringify({ "session_id": this.state.sessionId, "input": { "message_type": "text", "text": this.state.textValue + " " + this.state.location } })
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

  imageClick(event) {
    var temp;
    if (event.clientX < 850 && event.clientX > 840) {
      temp = this.state[840];
    }
    else if (event.clientX < 930 && event.clientX > 915) {
      temp = this.state[920];
    }
    else if (event.clientX < 960 && event.clientX > 950) {
      temp = this.state[955];
    }
    else if (event.clientX < 970 && event.clientX > 963) {
      temp = this.state[965];
    }
    else if (event.clientX < 949 && event.clientX > 935) {
      temp = this.state[940];
    }
    else if (event.clientX < 840 && event.clientX > 835) {
      temp = this.state[835];
    }
    else if (event.clientX < 815 && event.clientX > 800) {
      temp = this.state[835];
    }
    else if (event.clientX < 885 && event.clientX > 870) {
      temp = this.state[873];
    }
    fetch('https://covid-assistant-simpl.eu-gb.mybluemix.net/api/message', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ "session_id": this.state.sessionId, "input": { "message_type": "text", "text": temp } })
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
  render() {

    return (

      <div>
        <MDBContainer>

          <MDBRow>

            <MDBCol md="10">
              <MDBCard>

                <MDBCardBody>
                  <MDBCardHeader className="form-header deep-blue-gradient rounded">
                    <h3 className="my-3">
                      <MDBIcon icon="lock" /> Covid 19 FCMG Helpline:
              </h3>
                    <MDBBadge color="danger" className="ml-2">Type input or Select red marked points in Map</MDBBadge>
                  </MDBCardHeader>
                  <div class="row">
                    <div class="col-md-7">
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
                           <MDBBadge color="success" className="ml-2">Eg: Please provide essential services at sholinganallur</MDBBadge>

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
                    </div>

                    <div class="col-md-5 pt-3">

                      <img src="https://i.ibb.co/VQGjHBR/chennaimap.png" alt="chennaimap" border="1"
                        width="350px" height="350px" onClick={(event) => this.imageClick(event)}></img>

                    </div>


                  </div>
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
