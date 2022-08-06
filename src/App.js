import React, { Component } from 'react'
import { Button, Form, Container, Header } from 'semantic-ui-react'
import './App.css';

export default class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       idOp: '',
       Tasa: '',
       Email: ''
    }

    this.body = {
      'id Op': this.state.idOp,
      'Tasa': this.state.Tasa,
      'Email': this.state.Email
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

    // axios.post('https://sheet.best/api/sheets/e38ee28e-7bc6-4c64-a312-a46b1ba47ff6', this.body)
    // .then(response => {
    //   console.log(response);
    //   if(response["status"]===200){
    //     this.sendEmail()
    //   }
    // })
  }

  sendEmail = e => {
    console.log("Send Email");
    // axios.post('https://hooks.zapier.com/hooks/catch/6872019/oahrt5g/', this.state)
    // .then(response => {
    //   console.log(response);
    // })
  }

  render() {
    const { idOp, Tasa, Email} = this.state;
    return (
      <Container>
        <Header as='h2'>MVP</Header>
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