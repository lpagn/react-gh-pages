import React, { Component } from 'react'
import { Button, Form, Container, Header } from 'semantic-ui-react'
import './App.css';
import axios from 'axios';

export default class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       idOp: '1',
       Tasa: '2',
       Email: 'lpagni@itba.edu.ar'
    }

    this.body = {
      'id Op': this.state.idOp,
      'Tasa': this.state.Tasa,
      'Email': this.state.Email
    }

    this.email = {
      idOp: 100,
      tasa: 1.5,
      email: 'lpagni@itba.edu.ar'
    }

  }

  changeHandler = (e) => {
    this.setState({[e.target.name] : e.target.value})
    this.body['id Op'] = this.state.idOp
    this.body['Tasa'] = this.state.Tasa
    this.body['Email'] = this.state.Email
  }

  submitHandler = e => {
    e.preventDefault();
    console.log(this.state);
    console.log(this.body);
    // There is a limit of 100 so be careful with this request
    axios.post('https://sheet.best/api/sheets/e38ee28e-7bc6-4c64-a312-a46b1ba47ff6', this.body)
    .then(response => {
      console.log(response);
      if(response["status"]===200){
        this.sendEmail()
      }
    })
    // this.sendEmail();
  }

  sendEmail = e => {
    console.log("Send Email");
    this.email['idOp'] = this.body['id Op'];
    this.email['tasa'] = this.body['Tasa'];
    this.email['email'] = this.body['Email'];
    axios.post('https://hooks.zapier.com/hooks/catch/6872019/oahrt5g/', this.email)
    .then(response => {
      console.log(response);
    })
  }

  render() {
    const { idOp, Tasa, Email} = this.state;
    return (
      <Container>
        <Header as='h2'>MVP</Header>

        <a href="https://docs.google.com/spreadsheets/d/1NRSJVap34kssby5_t1uxmOUu___pOcmOCSf7DzM6I0g/edit" target="_blank">Take a look at the Google Sheet</a>
        <br></br>
        <Form className="form" onSubmit={this.submitHandler}>
          <Form.Field>
            <label>Id Op:  </label>
            <input placeholder='Id Op' type="text" name = "idOp" value = {idOp} onChange={this.changeHandler}/>
          </Form.Field>
          <br></br>
          <Form.Field>
            <label>Tasa: </label>
            <input placeholder='Tasa' type="number" name = "Tasa" value = {Tasa} onChange={this.changeHandler}/>
          </Form.Field>
          <br></br>
          <Form.Field>
            <label>Email: </label>
            <input placeholder='Email' type="text" name = "Email" value = {Email} onChange={this.changeHandler}/>
          </Form.Field>
          <br></br>
          <Button color="blue" type='submit'>Submit</Button>
        </Form>
      </Container>
    )
  }
}