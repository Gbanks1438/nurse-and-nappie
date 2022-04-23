import './App.css';
import LoggedIn from './LoggedIn.js';
import LoggedOut from './LoggedOut.js';
import { useEffect, useState } from 'react';

function App() {
  const [user, setUser] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    fetch("/me", {
      credentials: "include",
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setUser(user);
          setAuthenticated(true);
        });
      } else {
        setAuthenticated(true);
      }
    });
  }, []);
  
  if (!authenticated) {
    return (<div>
      <LoggedOut 
      setUser={setUser} 
          />
      </div>)
  }

  return (
    <div>
        {user ? (
          <LoggedIn
            setUser={setUser}
            user={user}
          />
        ) : (
          <LoggedOut setUser={setUser} 
          />
          )}
    </div>
  );
}

export default App;