import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";
const { ipcRenderer } = window.require("electron");

const INITIAL_STATE = {
  name: "",
  number: "",
  date: new Date().toISOString().substring(0,10),
  hour: "",
  symptoms: ""
};

class Create extends Component {
  state = INITIAL_STATE;

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitForm = event => {
    event.preventDefault();
    console.log(this.state);

    ipcRenderer.send("appointment:create", this.state);
    this.setState(INITIAL_STATE);
  };

  render() {
    return (
      <div>
        <h3>Create Appointment</h3> 
        <Form id="form" onSubmit={this.onSubmit} style={{ padding: " 2% 5%" }}>
          <Form.Field>
            <label htmlFor="name">Name:</label>
            <Form.Input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={this.onChange}
              required
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor="number">Phone number:</label>
            <Form.Input
              type="text"
              name="number"
              placeholder="Phone Number"
              value={this.state.number}
              onChange={this.onChange}
              required
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor="date">Date:</label>
            <Form.Input
              type="text"
              name="date"
              placeholder="DD-MM-YYYY"
              value={this.state.date}
              onChange={this.onChange}
              required
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor="hour">Hour:</label>
            <Form.Input
              type="text"
              name="hour"
              placeholder="HH:MM"
              value={this.state.hour}
              onChange={this.onChange}
              required
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor="symptoms">Symptoms:</label>
            <Form.TextArea
              type="text"
              name="symptoms"
              placeholder="Symptoms"
              value={this.state.symptoms}
              onChange={this.onChange}
              required
            />
          </Form.Field>
          <Button type="submit" onClick={this.submitForm}>
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default Create;
