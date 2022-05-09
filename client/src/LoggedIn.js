import Navbar from "./Navbar.js";
import Routing from "./Routing";

const LoggedIn = ({ user, setUser }) => {
    // console.log("What is user?" , user)
  return (
    <div>
      <h1>Hello {user.username} <i class="fa-solid fa-user-check"></i></h1>
      <Navbar setUser={setUser}/>
      <Routing setUser={setUser}/>
    </div>
  );
};

export default LoggedIn;