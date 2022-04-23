import { useEffect } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";

const LoggedOut = ({setUser}) => {

  useEffect(() => {
    <Navigate to="/" />
  }, [])
  
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Login setUser={setUser}/>} />
        <Route exact path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
};

export default LoggedOut;