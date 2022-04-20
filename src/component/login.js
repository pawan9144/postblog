import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const Login = () => {

  const [userData, setUserData] = useState({
    emailorMobile: { value: '', error: '' },
    password: { value: '', error: '' }
  })

  const navigate = useNavigate()


  const inputhandle = (event) => {
    console.log(".............", event)
    event.preventDefault();
    const { name, value } = event.target;

    setUserData({ ...value, [name]: value });


    switch (name) {
      case "emailorMobile":
        if (value) {
          setUserData({ ...userData, emailorMobile: { value: value, error: '' } })
        }
        else {
          setUserData({ ...userData, emailorMobile: { value: value, error: 'Please enter mobile or email' } })
        }
        break
      case "password":
        if (value) {

          setUserData({ ...userData, password: { value: value, error: '' } })
        }
        else {
          setUserData({ ...userData, password: { value: value, error: 'Please enter password' } })
        }
    }


  }

  const handleonsubmit = (e) => {
    e.preventDefault()
    navigate("/blog")
  }


  return (
    <div>
      <form onSubmit={handleonsubmit}>

        <label>Email/mobile</label><br />
        <input type="text" name="emailorMobile" value={userData.emailorMobile.value}
          onChange={inputhandle} />
        {userData.emailorMobile.error}<br />


        <label>Password </label><br />
        <input type="text" name="password" value={userData.password.value}
          onChange={inputhandle} />
        {userData.password.error}<br />

        <button type="submit"> Sign Up </button>

      </form>
    </div>
  )
}


export default function Signin() {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);


  return (
    <>
      <div>
        <div
          className="d-flex align-items-center justify-content-center"
        >
        </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Login Form</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Login />
          </Modal.Body>

        </Modal>

      </div>

    </>
  );
}


