import { NavLink } from "react-router-dom";

function Navbar({setUser}) {

    const handleLogout = () => {
        fetch("/logout", {
          method: 'DELETE'
        })
        console.log('logged out')
        setUser(null)
      }

 return (
        <div className="Navbar">
        <header>
        <nav>
            <ul>
                <li className='nav-links'>
                    <NavLink to='/account'>My Account</NavLink>
                </li>
                <li className='nav-links'>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li className='nav-links'>
                    <NavLink to='/chart'>Charts</NavLink>
                </li>
                <button className="Logout-button" onClick={handleLogout}>Logout</button>
            </ul>
        </nav>
        <br/><br/><br/>
        </header>
        </div>
        );
    }

export default Navbar;