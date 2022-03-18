//navbar
import Navbar from "./navbar/navbar";
//Dashboard
import Dashboard from "./dashboardpage/dashboard";
//Doctor's Dashboard
import Doctors from "./component/Docotrs_dashboard";
//Doctors Profile
import Doctorsprof from "./DoctorsPROfile/Doctorsprof";
//block
import Blockfeatures from "./BLock/Block";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Dashboard/>
      <Doctors/>
      <div className="flex gap-6 m-2 flex-wrap items-centre justify-evenly drop-shadow-xl">
      <Doctorsprof/>
      <Doctorsprof/>
      <Doctorsprof/>
      <Doctorsprof/>
      </div>
      <div>
      <Blockfeatures title="Consultations"/>
      <Blockfeatures title="Tests"/>
      <Blockfeatures title="Vaccination"/>
      <Blockfeatures title="Consultation"/>
      </div>
      
    </div>
  );
}

export default App;
