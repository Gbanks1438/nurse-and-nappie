import Chart from './Chart.js';
import Home from './Home.js';
import Baby from './Baby.js';
import Account from './Account.js';
import { Routes, Route } from "react-router-dom";

const Routing = ({setUser}) => {
  return (
    <div>
    <Routes>

    <Route path='/account' element={<Account setUser={setUser}/>} />
    
    <Route path='/' element={<Home />} />

    <Route path='/charts' element={<Chart setUser={setUser}/>} />

    <Route path='/baby' element={<Baby setUser={setUser}/>} />
    
  </Routes>
  </div>
  );
};

export default Routing;