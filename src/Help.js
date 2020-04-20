import React from 'react';

import './App.css';
import { Link } from 'react-router-dom'

export default class Help extends React.Component {
    constructor(props) {
        super()
        this.state = ({
            value: ''
        })
    }
    callAlert() {
        if (this.state.value !== '') {
            alert("Submitted Successfully")
        }
        else {
            alert("Please 'Fill Data'")
        }
    }
    callChange(event) {
        this.setState({
            value: event.target.value
        })
    }
    render() {
        return (

            <div class="container">

                <div class="row">
                    <div class="col-lg-3">
                        <h1 class="my-2">Donors Details</h1>
                        <button class="btn btn-light">
                            <Link to={"/"}>Exit Help Tab</Link>
                        </button>
                        <div class="list-group" id="list-tab" role="tablist">
                            <a class="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">Food</a>
                            <a class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">Medical</a>
                            <a class="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">Goods</a>

                        </div>
                    </div>
                    <div class="col-8">
                        <div class="tab-content" id="nav-tabContent">
                            <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">

                                <div class="card mt-4">
                                    <img class="card-img-top img-fluid" src="https://www.google.com/search?q=google+images+helping+hands&tbm=isch&source=iu&ictx=1&fir=qKOLJ3rLdAwsQM%253A%252CpYYcyUci5TkaVM%252C_&vet=1&usg=AI4_-kTQ0bxmhb6nUEoeDjFXaBq-JzEaJA&sa=X&ved=2ahUKEwjCj6O81vboAhVryDgGHcFYCagQ9QEwAHoECAoQDA#imgrc=qKOLJ3rLdAwsQM" alt="" />
                                    <div class="card-body">
                                        <h3 class="card-title">Food Donor</h3>
                                        <h4>$24.99</h4>
                                        <p class="card-text">Food Donation Connection (FDC) is committed to your well-being
and efforts in our mutual mission to get surplus food to those in need</p>
                                        <span class="text-warning">&#9733; &#9733; &#9733; &#9733; &#9734;</span>
        24/7
      </div>
                                </div>
                                <div class="card card-outline-secondary my-4">
                                    <div class="card-header">
                                        Providers
      </div>
                                    <div class="card-body">
                                        <p> FDC addressed the need for hunger relief in a Statement for the Record to the House Ways and Means Subcommittee on Oversight Joint Hearing on Food Banks and Front-Line Charities: Unprecedented Demand and Unmet Need (November 19, 2009)..</p>
                                        <small class="text-muted">Posted by Anonymous on 3/1/17 - Contact -12345</small>
                                        <hr></hr>
                                        <p>Americans throw away more than 25 percent of the food we prepare, about 96 billion pounds of food waste each year according to the US Department.</p>
                                        <small class="text-muted">Posted by Anonymous on 3/1/17 - Contact -12345</small>
                                        <hr></hr>
                                        <p> But hunger relief agencies and food recovery groups want to see more of the 90,000 eateries stop discarding and start donating. Hunger in the Golden State website launched by University of Southern California / Annenberg School for Communication and Journalism..</p>
                                        <small class="text-muted">Posted by Anonymous on 3/1/17 - Contact -12345</small>
                                    </div>
                                </div>





                            </div>
                            <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">

                                <div class="card mt-4">
                                    <img class="card-img-top img-fluid" src="https://www.google.com/search?q=google+images+helping+hands&tbm=isch&source=iu&ictx=1&fir=qKOLJ3rLdAwsQM%253A%252CpYYcyUci5TkaVM%252C_&vet=1&usg=AI4_-kTQ0bxmhb6nUEoeDjFXaBq-JzEaJA&sa=X&ved=2ahUKEwjCj6O81vboAhVryDgGHcFYCagQ9QEwAHoECAoQDA#imgrc=qKOLJ3rLdAwsQM" alt="" />
                                    <div class="card-body">
                                        <h3 class="card-title">Medical Donor</h3>
                                        <h4>$12324.99</h4>
                                        <p class="card-text">Facing a medical emergency? Quit worrying! Start a fundraising campaign with Ketto. Ketto is India's most trusted crowdfunding site. We help raise funds for medical causes</p>

                                        <span class="text-warning">&#9733; &#9733; &#9733; &#9733; &#9734;</span>
        24/7
      </div>
                                </div>
                                <div class="card card-outline-secondary my-4">
                                    <div class="card-header">
                                        Providers
      </div>
                                    <div class="card-body">
                                        <p> FDC addressed the need for hunger relief in a Statement for the Record to the House Ways and Means Subcommittee on Oversight Joint Hearing on Food Banks and Front-Line Charities: Unprecedented Demand and Unmet Need (November 19, 2009)..</p>
                                        <small class="text-muted">Posted by Anonymous on 3/1/17 - Contact -12345</small>
                                        <hr></hr>
                                        <p>Americans throw away more than 25 percent of the food we prepare, about 96 billion pounds of food waste each year according to the US Department.</p>
                                        <small class="text-muted">Posted by Anonymous on 3/1/17 - Contact -12345</small>
                                        <hr></hr>
                                        <p> But hunger relief agencies and food recovery groups want to see more of the 90,000 eateries stop discarding and start donating. Hunger in the Golden State website launched by University of Southern California / Annenberg School for Communication and Journalism..</p>
                                        <small class="text-muted">Posted by Anonymous on 3/1/17 - Contact -12345</small>
                                    </div>
                                </div>



                            </div>

                            <div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">

                                <div class="card mt-4">
                                    <img class="card-img-top img-fluid" src="https://www.google.com/search?q=google+images+helping+hands&tbm=isch&source=iu&ictx=1&fir=qKOLJ3rLdAwsQM%253A%252CpYYcyUci5TkaVM%252C_&vet=1&usg=AI4_-kTQ0bxmhb6nUEoeDjFXaBq-JzEaJA&sa=X&ved=2ahUKEwjCj6O81vboAhVryDgGHcFYCagQ9QEwAHoECAoQDA#imgrc=qKOLJ3rLdAwsQM" alt="" />
                                    <div class="card-body">
                                        <h3 class="card-title">Goods Donor</h3>
                                        <h4>$1544.99</h4>
                                        <p class="card-text">Used Goods Donations. Thrift shops, drop-off bins and collection trucks in the neighborhood make it easy to get rid of goods we don't want</p>
                                        <span class="text-warning">&#9733; &#9733; &#9733; &#9733; &#9734;</span>
        24/7
      </div>
                                </div>
                                <div class="card card-outline-secondary my-4">
                                    <div class="card-header">
                                        Providers
      </div>
                                    <div class="card-body">
                                        <p> FDC addressed the need for hunger relief in a Statement for the Record to the House Ways and Means Subcommittee on Oversight Joint Hearing on Food Banks and Front-Line Charities: Unprecedented Demand and Unmet Need (November 19, 2009)..</p>
                                        <small class="text-muted">Posted by Anonymous on 3/1/17 - Contact -12345</small>
                                        <hr></hr>
                                        <p>Americans throw away more than 25 percent of the food we prepare, about 96 billion pounds of food waste each year according to the US Department.</p>
                                        <small class="text-muted">Posted by Anonymous on 3/1/17 - Contact -12345</small>
                                        <hr></hr>
                                        <p> But hunger relief agencies and food recovery groups want to see more of the 90,000 eateries stop discarding and start donating. Hunger in the Golden State website launched by University of Southern California / Annenberg School for Communication and Journalism..</p>
                                        <small class="text-muted">Posted by Anonymous on 3/1/17 - Contact -12345</small>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div class="container contact-form">
                            <div class="contact-image">
                                <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact" />
                            </div>
                            <form>
                                <h3>Drop Us a Message</h3>
                                <div class="row">
                                    <div>
                                        <div class="form-group">
                                            <input type="text" name="txtName" class="form-control" placeholder="Your Message" value="" />
                                        </div>

                                        <div class="form-group">
                                            <input type="text" name="txtPhone" class="form-control" placeholder="Your Phone Number" value=""
                                                onChange={(event) => this.CallChange()} />
                                        </div>
                                        <div class="form-group">

                                            <input type="submit" class="btn btn-light" value="Send Message" onClick={() => this.callAlert()} />
                                            <button class="btn btn-light">
                                                <Link to={"/"}>Exit Help Tab</Link>
                                            </button>
                                        </div>

                                    </div>

                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}
