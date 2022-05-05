import Navbar from "./Navbar.js";
import Routing from "./Routing";

const LoggedIn = ({ user, setUser }) => {
  return (
    <div>
      <h1 className="welcome-h1">Logged in as: {user.username}<i class="fa-solid fa-user-check"></i></h1>
      <Navbar setUser={setUser}/>
      <Routing setUser={setUser}/>
    </div>
  );
};

export default LoggedIn;