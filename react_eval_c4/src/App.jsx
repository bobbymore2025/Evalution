import logo from './logo.svg';
import './App.css';
import {Route,Routes} from "react-router-dom"

import {Jobs} from "./components/job"
import {Navbar} from "./components/navbar"
import {ClientLogin} from "./components/clientlogin"
import {AdminLogin} from "./components/adminlogin"
import {Home} from "./components/home"
import { PrivateRoute } from './components/privateroute';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path="/ClientLogin" element={<ClientLogin />}></Route>
      <Route path="/AdminLogin" element={<AdminLogin />}></Route>
      <Route path="/Jobs" element={<PrivateRoute><Jobs /></PrivateRoute>} ></Route>
      <Route path="/Home" element={<Home />}></Route>
     </Routes>
    </div>
  );
}

export default App;
