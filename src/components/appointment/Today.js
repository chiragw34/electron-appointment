import React, { Component } from "react";
import { Card, Grid, Button, Input } from "semantic-ui-react";
const { ipcRenderer } = window.require("electron");

class Today extends Component {
  state = {
    appointments: []
  };

  componentDidMount() {
    ipcRenderer.send("appointment:request:today");

    ipcRenderer.on("appointment:response:today", (event, appointments) => {
      this.setState({ appointments });
    });
  }

  done = id => {

    ipcRenderer.send("appointment:done", id)
  }
  render() {
    return (
      <div>
        <h3>Today's Appointments</h3>
        <Grid columns={2}>
          {this.state.appointments.map(appointment => {
            return (
              <Grid.Column key={appointment.id}>
                <Card style={{ width: "100%" }}>
                  <Card.Content>
                    <Card.Header>{`Name: ${appointment.name}`}</Card.Header>
                    <Card.Meta>{`Appointment Date : ${appointment.date}`}</Card.Meta>
                    <Card.Meta>{`Appointment Time : ${appointment.hour}`}</Card.Meta>
                    <Card.Description>{`Phone Number : ${appointment.number}`}</Card.Description>
                    <Card.Description>{`Symptoms : ${appointment.symptoms}`}</Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <span style={{verticalAlign: '-webkit-baseline-middle'}}>{`Done : ${appointment.done ? "Yes" : "No"}`}</span>
                    <Button
                      disabled={appointment.done}
                      onClick={() => this.done(appointment.id)}
                      floated="right"
                    >
                      Done
                    </Button>
                  </Card.Content>
                </Card>
              </Grid.Column>
            );
          })}
        </Grid>
      </div>
    );
  }
}

export default Today;
