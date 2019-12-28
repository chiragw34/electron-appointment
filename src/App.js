import React, { Component } from "react";
import "./App.css";
import "../node_modules/semantic-ui-css/semantic.css";

import SideBar from "./components/SideBar";
import CreateAppointment from "./components/appointment/Create";
import AppointmentList from "./components/appointment/List";
import TodayAppointment from "./components/appointment/Today";

class App extends Component {
  state = {
    view:"Today"
  }

  renderView(){
    if(this.state.view === "Create") return <CreateAppointment />
    else if (this.state.view === "List") return <AppointmentList />
    else return <TodayAppointment />
  }

  render() {
    return (
      <div>
        <SideBar onViewChange={view => this.setState({ view })} />
        {this.renderView()}
      </div>
    );
  }
}

export default App;
