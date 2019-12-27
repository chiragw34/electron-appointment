import React from 'react';
import './App.css';

import SideBar from './components/SideBar'
import CreateAppointment from "./components/appointment/Create"
import AppointmentList from "./components/appointment/List";
import TodayAppointment from "./components/appointment/Today";

function App() {
  return (
    <div>
      <SideBar />
      <TodayAppointment />
      <CreateAppointment />
      <AppointmentList />
    </div>
  );
}

export default App;
