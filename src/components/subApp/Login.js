import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";




function Login({allUsers, setPlayer}) {

  const history = useHistory();

  const [showCA, setShowCA] = useState (false)
  const [showCP, setShowCP] = useState (false)

  let id 

  function startmp() {
    history.push("/mainpage");
  }
 
//LOGING 
function handleLoginSubmit(event) {
  event.preventDefault();

  const logEmail = event.target.loginEmail.value;
  const logPass = event.target.loginPass.value;

  let userFound = false;

  if (logEmail.trim() !== "") {
    for (let i = 0; i < allUsers.length; i++) {
      if (allUsers[i].email === logEmail) {
        setPlayer(allUsers[i]);
        userFound = true;
        alert("User found");
        
        login(allUsers[i]);
        break;
      }
    }

    if (!userFound) {
      alert("User not found");
    }
  } else {
    alert("Write down an email dude");
  }

  function login(a) {
    if (a.password === logPass) {
      alert("Logged in");
      setPlayer(a);
      startmp();
    } else {
      alert("Wrong Password");
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
          if (data[i].email === newEmail) {
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

          const newUser =   
          {
            id: "",
            email: newEmail,
            password: newPass,
            money: 200,
            hp: 10,
            speed: 10,
            dmg: 1,
            armor: 0,
            boots: 0,
            sword: 0
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
   
        alert("New user created \nNow log in")
        setShowCA(false)
        history.push("/");
      })
  }
  
  
//CHANGE PASSWORD
  function changePassword() {
    setShowCP(!showCP)
    setShowCA(false)
  }

  function handleUpdatePasswordSubmit(event) {
    event.preventDefault()


    const updateEmail= event.target.updateEmail.value;
    const updateOldPass= event.target.updateOldpass.value;
    const updateNewPass= event.target.updateNewPass.value;
    const updateCheckNewPass= event.target.updateCheckNewPass.value;

    fetch("http://localhost:3000/users")
    .then(resp => resp.json())
    .then(allUser => {
        console.log(allUser.length);

        let userFound = false; 

        for (let i = 0; i < allUser.length; i++) {

            if (updateEmail === allUser[i].email && updateOldPass === allUser[i].password) {  
                
                id = (1+i)
                userFound = true;
                break;
            }
        }
        if (!userFound) {
            alert('Incorrect Email or Old Password');

        } else {
            alert(`User and old pasword found`)   
                
            if ((updateNewPass === updateCheckNewPass) && (updateNewPass.trim() !== "") && (updateNewPass.trim().length <= updateNewPass.length)) {
            
                let userupdate = {
                password : updateNewPass
                }

                fetch(`http://localhost:3000/users/${id}`, {
                method: 'PATCH',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(userupdate)
                })
                .then(response => {
                  alert('Password changed')
                  history.push("/");
                })
            } else {
                alert('New passwords do not match')

            }          
        };
    });


  }


  return (

  
  <div className="login-container">

    <h1>Demon Hunter</h1>
    <h3>An old school simple RPG</h3>


    <h4>LOG IN</h4>
    <form onSubmit={handleLoginSubmit}>
      <label>Email:</label>
      <br />
      <input type="email" id="loginEmail" />
      <br />
      <label>Password:</label>
      <br />
      <input type="password" id="loginPass" />
      <br />
      <input className="loginput" type="submit" value="Login" />
    </form>

    <br />

    <button className="logbutton" onClick={() => createAccount()}>Create account</button>

      {showCA === true ? (
      <>
        <h5 className="create-account">CREATE NEW ACCOUNT</h5>
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
        <input className="loginput" type="submit" value="Create" />
        </form>
      </>
      ) : ( <></>
      )}

    <br />

    <button  className="logbutton" onClick={() => changePassword()} >Change password</button>

      {showCP === true ? (
      <>

        <h5 className="forgot-password">CHANGE PASSWORD?</h5>
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
        <input  type="password" id="updateCheckNewPass" />
        <br />
        <input className="loginput" type="submit" value="Update" />
        </form>
      </>
      ) : ( <></>
      )}
  </div>
  );
  }

  export default Login;