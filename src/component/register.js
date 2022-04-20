import React,{useState} from 'react'
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Signup = () => {
    const [formValues, setFormValues] = useState({
        fullName: { value: '', error: '' },
        email: { value: '', error: '' },
        phone: { value: '', error: '' },
        password: { value: '', error: '' }
      })
    
    
    
      const handleonchange = (e) => {   
        // debugger;
        e.preventDefault();
        const { name, value } = e.target;
        setFormValues({ ...value, [name]: value });
        // seterror(validation(value));
    
        switch (name) {
          case "fullName":
            if (value) {
              setFormValues({ ...formValues, fullName: { value: value, error: '' } })
            }
            else {
              setFormValues({ ...formValues, fullName: { value: value, error: 'Please enter name' } })
            }
            break;
          case "email":
            if (value) {
              const isValid = validEmail(value)
              setFormValues({ ...formValues, email: { value: value, error: isValid ? '' : 'Please enter valid email' } })
            }
            else {
              setFormValues({ ...formValues, email: { value: value, error: 'Please enter email' } })
            }
            break;
            case "phone":
              if (value) {
             
                setFormValues({ ...formValues, phone: { value: value, error: " " } })
              }
              else {
                setFormValues({ ...formValues, phone: { value: value, error: 'Please enter phone' } })
              }
              break;
              case "password":
                if (value) {
              
                  setFormValues({ ...formValues, password: { value: value, error: ""} })
                }
                else {
                  setFormValues({ ...formValues, password: { value: value, error: 'Please enter password' } })
                }
                break;
            
    
        }
    
      };
    
    
    
    
      const validEmail = (email) => {
        let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        console.log(">>>>>>>>>>>>>>>>>",email)
        if (!filter.test(email)) {
          return false
        }
        return true;
      }


      const handleonsubmit = (event)=>{
event.preventDefault()
      }



    return (
        <div>
            <form onSubmit={handleonsubmit} >

                <label>Full Name</label><br />
                <input type="text" name="fullName" value={formValues.fullName.value}
                    onChange={handleonchange} />
                    {formValues.fullName.error}<br />

                <label>Email</label><br />
                <input type="email" name="email" value={formValues.email.value}
                    onChange={handleonchange} />{formValues.email.error}<br />


                <label>Mobile </label><br />
                <input type="text" name="phone" value={formValues.phone.value}
                    onChange={handleonchange} />{formValues.phone.error}<br />

                <label>Password </label><br />
                <input type="text" name="password" value={formValues.password.value}
                    onChange={handleonchange} />{formValues.password.error}<br />

<button type="submit"> Sign Up </button>
<span>Don't have an account?<Link to="/signin">Sign in</Link> </span>

            </form>
        </div>
    )
}




export default function Register() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <div>
        <div
          className="d-flex align-items-center justify-content-center"
        >
          <div variant="primary" onClick={handleShow}>
            Register....
          </div>
        </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Register Form</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Signup />
          </Modal.Body>

        </Modal>

      </div>

    </>
  );
}
