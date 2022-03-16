//navbar
import Navbar from "./navbar/navbar";
//Dashboard
import Dashboard from "./dashboardpage/dashboard";
//Doctor's Dashboard
import Doctors from "./component/Docotrs_dashboard";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Dashboard/>
      <Doctors/>
    </div>
  );
}

export default App;
