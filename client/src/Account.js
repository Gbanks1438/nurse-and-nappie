import { useState } from 'react';

function Account({setUser}) {

  function toggleTheme() {
    const background = document.body;
      background.classList.toggle("alt-theme");
      // setUser(background) // WRONG but playing around!  
      //What can I add to the session to store this as a preference?
    }

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
    
    fetch("/signup", {
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
        usr_first_name: "",
        usr_last_name: "",
        email: "",
        usr_profile: ""
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
       <div className="center-align">
         <h2>Account Theme</h2>
          <label class="switch">
            <input type="checkbox"
            onClick={toggleTheme}/>
            <span class="slider round"></span>
          </label>
          <br />
          <br />
          <br />
         <h2><i class="fa-solid fa-wrench"></i> Update Account:</h2>
         <form className="form-div" 
            onSubmit={handleSubmit}
               >
      <label>Username:</label>
      <input
          id="account-input-username"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      <br/>
      <label>New Password:</label>
        <input
          id="account-input-password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      <br/>
       <label>Confirm New Password:</label>
       <input
          id="account-input-confirmation"
          type="password_confirmation"
          name="password_confirmation"
          value={formData.password_confirmation}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="usr_first_name">First Name:</label>
        <input
          id="account-input-first"
          type="text"
          name="usr_first_name"
          value={formData.usr_first_name}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="usr_last_name">Last Name:</label>
        <input
          id="account-input-last"
          type="text"
          name="usr_last_name"
          value={formData.usr_last_name}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="email">Email Address:</label>
        <input
          id="account-input-email"
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      <br />
      <label htmlFor="usr_profile">Profile Image:</label>
        <input
          id="account-input-profile"
          type="text"
          name="usr_profile"
          value={formData.usr_profile}
          onChange={handleChange}
        />
      <br/>
      <br/>
      <button type="submit" className="update-button"><i class="fa-solid fa-pencil"></i> Update</button>
    </form>
    <br /><br />
    <div className="Delete-div">
      <h2><i class="fa-solid fa-trash"></i> Delete Account:</h2>
      <button className="delete-button" type="submit" 
      onClick={handleDelete}
      ><i class="fa-solid fa-xmark"></i> DELETE MY ACCOUNT!</button>
      </div>
      <br />
      <br />
         </div>
    );

}

export default Account;