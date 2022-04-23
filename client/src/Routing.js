import Chart from './Chart.js';
import Home from './Home.js';
import Account from './Account.js';
import { Routes, Route } from "react-router-dom";

const Routing = ({setUser}) => {
  return (
    <div>
    <Routes>

    <Route path='/account' element={<Account setUser={setUser}/>} />
    
    <Route path='/' element={<Home />} />

    <Route path='/chart' element={<Chart setUser={setUser}/>} />
    
  </Routes>
  </div>
  );
};

export default Routing;