import React from "react";
import { useState,} from "react";

function Login({setPlayer, allData, player, logPlayer , setLogPlayer}) {

  const [showCA, setShowCA] = useState (false)
  const [showCP, setShowCP] = useState (false)
 
//LOGING 


  function handleLoginSubmit(event) {

    
    event.preventDefault();
  
    const logEmail = event.target.loginEmail.value;
    const logPass = event.target.loginPass.value;

    console.log(allData)
    console.log(logEmail)
    console.log(logPass)

    let userFound = false;

    if (logEmail.trim() !== "") {
  

        for (let i = 0; i < allData.length; i++) {
          if (allData[i].user_email === logEmail) {
            setLogPlayer(allData[i])
            userFound = true  
            login (logPlayer)
            break;
          }
        }    
    } else {
      alert("Write down an email dude")
    } 

    function login (a) {
      if (!userFound) {
        alert("user not found")
      } else if (a.password === logPass) {
        alert("Logged in")
        setPlayer(a)
        console.log(player)
      } else {
        alert("Wrong Password")
      }
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
            user_name_quest: false,
            password: newPass,
            user_photo: "",
            user_upgrades: [],
            user_money : 0,
            user_hp : 10,
            user_speed : 1,
            user_dmg : 1,
            user_lvl : 1,
            user_champ : 3,
            difficulty : false
          }

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
        window.location.reload();
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

    <h1>Welcome to Demon Hunter</h1>
    <h3>An old school simple RPG</h3>


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