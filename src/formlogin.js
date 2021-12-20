import React, { Component } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Axios from "axios";

class formlogin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      customer: {
        Name: props.Name,
        MobileNo: props.MobileNo,
        Email: props.Email,
        regNo: props.regNo,
        clg: props.clg,
        dept: props.dept,
        rfid: props.rfid
      }
    }
  }

  handleNameChanged(event) {
    var customer        = this.state.customer;
    customer.Name  = event.target.value;

    this.setState({ customer: customer });
  }

  handleMobileChanged(event) {
    var customer      = this.state.customer;
    customer.MobileNo = event.target.value;

    this.setState({ customer: customer });
  }

  handleEmailChanged(event) {
    var customer    = this.state.customer;
    customer.Email = event.target.value;

    this.setState({ customer: customer });
  }

  handleregNoChanged(event) {
    var customer    = this.state.customer;
    customer.regNo = event.target.value;

    this.setState({ customer: customer });
  }
  handleclgChanged(event) {
    var customer    = this.state.customer;
    customer.clg = event.target.value;

    this.setState({ customer: customer });
  }
  handledeptChanged(event) {
    var customer    = this.state.customer;
    customer.dept = event.target.value;

    this.setState({ customer: customer });
  }
  handleButtonClicked(event) {
   
    var customer    = this.state.customer;
    var rfidSeries = this.state.customer.regNo.substr(5) + 'A' + this.state.customer.clg;
    customer.rfid = rfidSeries;
    console.log('A form was submitted: ' +this.state.customer.Name,this.state.customer.clg, this.state.customer.regNo,
    this.state.customer.dept,this.state.customer.MobileNo,this.state.customer.Email,this.state.customer.rfid);
    /*var data = { Name : this.state.customer.Name,

    College : this.state.customer.clg,

    Register : this.state.customer.regNo,

    dept: this.state.customer.dept,

    mobileNo: this.state.customer.MobileNo,

    mail: this.state.customer.Email,

    RFID: this.state.customer.rfid};*/
   Axios.post("http://localhost:3001/register",{Name : this.state.customer.Name,

   clg : this.state.customer.clg,

   regNo : this.state.customer.regNo,

   dept: this.state.customer.dept,

   mobileNo: this.state.customer.MobileNo,

   Email: this.state.customer.Email,

   rfid: this.state.customer.rfid}).then(() =>{
     alert("Succes");
   });
    alert("Registration success");
  }
    render() { 
  return (
    <div className="App">
      <Form style={{ padding: 10 }} >
      <h3 class="text-center">
        Register Form
      </h3>
        <Form.Group className="mb-3"  controlId="formGroupEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" required="true" value={this.state.customer.Name} onChange={this.handleNameChanged.bind(this)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control type="tel" placeholder="Enter Mobile Number" value={this.state.customer.MobileNo} onChange={this.handleMobileChanged.bind(this)}/>
        </Form.Group>
        <Form.Group className="mb-3"  controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={this.state.customer.Email} onChange={this.handleEmailChanged.bind(this)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Register Number</Form.Label>
          <Form.Control type="number" placeholder="Register Number" value={this.state.customer.regNo} onChange={this.handleregNoChanged.bind(this)}/>
        </Form.Group>
        <Form.Label>College</Form.Label>
          <Form.Select aria-label="Floating label select example" value={this.state.customer.clg} onChange={this.handleclgChanged.bind(this)} >
            <option>Select College</option>
            <option value="1">CT</option>
            <option value="2">CE</option>
            <option value="3">IET</option>
          </Form.Select>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Department</Form.Label>
          <Form.Control type="text" placeholder="Enter Department" value={this.state.customer.dept} onChange={this.handledeptChanged.bind(this)}/>
        </Form.Group>
        <div class="text-center">
        <Button variant="secondary" onClick={this.handleButtonClicked.bind(this)} >Register</Button>
        </div>
      </Form> 
    </div>
  );
}
}

export default formlogin;
