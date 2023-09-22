import React from "react";
import { useState, useEffect } from "react";

function Login({setCurrentUser, currentUser, setStartWeb}) {

  const [showCA, setShowCA] = useState (false)
  const [showCP, setShowCP] = useState (false)
 
//LOGING 
  function handleLoginSubmit(event) {
    event.preventDefault();
  
    const logEmail = event.target.loginEmail.value;
    const logPass = event.target.loginPass.value;

    if (logEmail.trim() !== "") {
  
    fetch(`http://localhost:3000/users`)
      .then((resp) => resp.json())
      .then((data) => {

        let userFound = false;
  
        for (let i = 0; i < data.length; i++) {
          if (data[i].user_email === logEmail) {
            setCurrentUser(data[i])
            userFound = true;
            break;
          }
        }
        if (!userFound) {
          alert('User not found');
        }
        if (userFound) {

          if (currentUser && currentUser.password === logPass) {
            setStartWeb(true)
          } else {
            alert("Wrong password");
            event.target.loginPass.value = ""
          }
         }
      });
    } else {
      alert("Write down an email dude")
    } 
  }

//CREATE ACCOUNT
  function createAccount() {
    setShowCA(!showCA)
    setShowCP(false)
  }

  function handleCreateAccountSubmit(event) {
    event.preventDefault();
  
    const newEmail = event.target.newEmail.value;
    const newPass = event.target.newPass.value;
    let duplicatedUser = false;
  
    fetch(`http://localhost:3000/users`)
      .then((resp) => resp.json())
      .then((data) => {
        for (let i = 0; i < data.length; i++) {
          if (data[i].user_email === newEmail) {
            duplicatedUser = true;
            break;
          }
        }
  
        if (newEmail.trim() === "") {
          alert("You need an email");
        } else if (duplicatedUser === true) {
          alert("Email already used");
        } else if (newPass.trim() === "") {
          alert("At least 1 character for your password");
        } else if (newPass.includes(" ")) {
          alert("Password cannot contain spaces");
        } else {
          const newUser = {
            id: "",
            user_email: newEmail,
            user_name: "",
            user_name_quest: true,
            password: newPass,
            user_photo: "",
            user_vehicles: [],
          };

          addNewUser(newUser);
          
        }
      });
  }
  
  function addNewUser (a) {

      fetch("http://localhost:3000/users", {
        'method': 'POST',
        'headers': {
          'Content-Type': 'application/json'
        },
        'body': JSON.stringify(a),
        })
        .then(resp => resp.json())
        .then(data => { 
   
        alert("New user created")
        setShowCA(false)
      })
  }
  
  
//CHANGE PASSWORD
  function changePassword() {
    setShowCP(!showCP)
    setShowCA(false)
  }

  function handleUpdatePasswordSubmit(event) {
    event.preventDefault()

  }


  return (
  <div className="login-container">

    <h3>LOGIN</h3>
    <form onSubmit={handleLoginSubmit}>
      <label>Email:</label>
      <br />
      <input type="email" id="loginEmail" />
      <br />
      <label>Password:</label>
      <br />
      <input type="password" id="loginPass" />
      <br />
      <input type="submit" value="Login" />
    </form>

    <br />

    <button onClick={() => createAccount()}>Create account</button>

      {showCA === true ? (
      <>
        <h4 className="create-account">CREATE NEW ACCOUNT</h4>
        <br />
        <form onSubmit={handleCreateAccountSubmit}>
        <label>Email:</label>
        <br />
        <input type="email" id="newEmail" />
        <br />
        <label>Password:</label>
        <br />
        <input type="password" id="newPass" />
        <br />
        <input type="submit" value="Create" />
        </form>
      </>
      ) : ( <></>
      )}

    <br />

    <button  onClick={() => changePassword()} >Change password</button>

      {showCP === true ? (
      <>

        <h4 className="forgot-password">CHANGE PASSWORD?</h4>
        <br />
        <form onSubmit={handleUpdatePasswordSubmit}>
        <label>Email:</label>
        <br />
        <input type="email" id="updateEmail" />
        <br />
        <label>Old password:</label>
        <br />
        <input type="password" id="updateOldpass" />
        <br />
        <label>Create new password:</label>
        <br />
        <input type="password" id="updateNewPass" />
        <br />
        <label>Confirm new password:</label>
        <br />
        <input type="password" id="updateCheckNewPass" />
        <br />
        <input type="submit" value="Update" />
        </form>
      </>
      ) : ( <></>
      )}
  </div>
  );
  }

  export default Login;