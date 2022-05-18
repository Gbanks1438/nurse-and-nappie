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
        <div>
        <header>
        <nav className='nav-list'>
            <ul>
                <li className='nav-links'>
                    <NavLink to='/account'>My Account</NavLink>
                </li>
                <li className='nav-links'>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li className='nav-links'>
                    <NavLink to='/charts'>Charts</NavLink>
                </li>
                <li className='nav-links'>
                    <NavLink to='/notes'>Notes</NavLink>
                </li>
                <li className='nav-links'>
                    <NavLink to='/baby'>Baby</NavLink>
                </li>
                <button className="logout-button" onClick={handleLogout}>Logout <i class="fa-solid fa-arrow-right-from-bracket"></i></button>
            </ul>
        </nav>
        <br/><br/><br/>
        </header>
        </div>
        );
    }

export default Navbar;