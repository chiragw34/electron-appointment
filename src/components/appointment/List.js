import React, { Component } from "react";
import { Card , Grid ,Input} from "semantic-ui-react";
const { ipcRenderer } = window.require("electron");

class List extends Component {
  state = {
    appointments: [],
    filter:''
  };

  componentDidMount() {
    ipcRenderer.send("appointment:request:list")
    console.log('inside comp did mount');

    ipcRenderer.on("appointment:response:list", (event, appointments) => {
      console.log('inside res');
      
      console.log('Recieved appointments :',appointments);
      this.setState({ appointments });
    });
  }

  render() {
    return (
      <div>
        <h3>Appointments List</h3>
        <div style={{ padding: "1% 10% 2% 10%" }}>
          <Input
           type="text"
           name="filter"
           icon="search"
           value={this.state.filter}
           onChange={event => this.setState({filter:event.target.value})} 
           placeholder="Search..." 
           style={{width:'100%'}}/>
        </div>
        <Grid columns={2}>
          {this.state.appointments.map(appointment => {
            if (appointment.name.includes(this.state.filter))
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
                  <Card.Content extra>{`Done : ${
                    appointment.done ? "Yes" : "No"
                  }`}</Card.Content>
                </Card>
              </Grid.Column>
            );
            else return null;
          })}
        </Grid>
      </div>
    );
  }
}

export default List;
