import { useState } from 'react';

function Account({setUser}) {

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    password_confirmation: ""
  });
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  
  function handleSubmit(e) {
    e.preventDefault();
    
    const userCreds = { ...formData };
    
    fetch("/users/{user.id}", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userCreds),
    })
    .then((r) => r.json())
    .then((user) => {
      console.log(user);
      setUser(user)
      setFormData({
        username: "",
        password: "",
        password_confirmation: "",
        first_name: "",
        last_name: "",
        email: ""
      });
    });
  }
   
  const handleDelete = () => {
        fetch("/me", { 
          method: 'DELETE',
          headers: {
            'Content-type': 'application/json',
      },
    })
        console.log('Deleted User Account?')
        setUser(null)
      }

     return (
       <div className="Update-div">
         <br />
         <h3>Update Account</h3>
         <form className="form-div" 
            onSubmit={handleSubmit}
               >
      <label>Username:</label>
      <input
          id="account-input"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      <br/>
      <label>New Password:</label>
        <input
          id="account-input"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      <br/>
       <label>Confirm New Password:</label>
       <input
          id="account-input"
          type="password_confirmation"
          name="password_confirmation"
          value={formData.password_confirmation}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="first_name">First Name:</label>
        <input
          id="account-input"
          type="text"
          name="first_name"
          value={formData.first_name}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="last_name">Last Name:</label>
        <input
          id="account-input"
          type="text"
          name="last_name"
          value={formData.last_name}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="email">Email Address:</label>
        <input
          id="account-input"
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      <br />
      <br/>
      <button type="submit" className="Update-button">Update</button>
    </form>
    <br /><br />
    <div className="Delete-div">
      <h3>Delete Account</h3>
      <button className="Delete-button" type="submit" 
      onClick={handleDelete}
      >DELETE MY ACCOUNT!</button>
      </div>
      <br />
         </div>
    );

}

export default Account;