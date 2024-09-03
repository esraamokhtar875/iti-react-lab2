/* eslint-disable default-case */

import {  useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './register.css'


function Register() {
    const [formValues, setFormValues] = useState({
        email: "",
        password: "",
        fname: "",
        lname:"",
        company: ""
    })

    const [formErrors, setFormErrors] = useState({
        email: false,
        password: false,
        fname: false,
        lname:false,
        company: false
    })

    const checkEmail = () => {
        const emailAddress = formValues.email
        if (emailAddress.length > 7 && String(emailAddress).toLowerCase().match(/^\S+@\S+\.\S+$/)) {
            setFormErrors({...formErrors, email: false})
        } else {
            setFormErrors({...formErrors, email: true})
        }
    }

    
    const checkPassword = () => {
        const _password = formValues.password

        if (_password.length > 7 && String(_password).toLowerCase().match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)) {
            setFormErrors({...formErrors, password: false})
        } else {
            setFormErrors({...formErrors, password: true})
        }
        
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!Object.values(formErrors).every(value => !value)) {
            console.log("Form Failed to submit")
        } else {
            console.log("Form submitted successfully")
        }
    }


    const handleFormChange = (e) => {
        const changed_element = e.target
        const name = changed_element.name
        const new_values = {...formValues}
        new_values[name] = changed_element.value;
        setFormValues(new_values);
        switch (name) {
            case "email":
                checkEmail()
                break;
            case "password":
                checkPassword()
                break;
            case "fname":
                if (changed_element.value.length < 5) {
                    setFormErrors({...formErrors, fname: true})
                } else {
                    setFormErrors({...formErrors, fname: false})
                }
                break;
            case "lname":
                if (changed_element.value.length < 5) {
                    setFormErrors({...formErrors, lname: true})
                } else {
                    setFormErrors({...formErrors, lname: false})
                }
                break;
            case "company":
                if (changed_element.value.length < 5) {
                    setFormErrors({...formErrors, company: true})
                } else {
                    setFormErrors({...formErrors, company: false})
                }
                break;

        }
    }
    
  return (
    <Form className='container w-50 p-5' onSubmit={handleSubmit}  onChange={handleFormChange}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='w-100 text-start'>Email address</Form.Label>
        <Form.Control name="email" required type="email" placeholder="Enter email" value={formValues.email}
        />
        <Form.Text className="text-muted text-start w-100 d-block">
          We'll never share your email with anyone else.
        </Form.Text>
        {formErrors.email && <Form.Text className="text-danger text-start w-100 d-block">
         Invalid mail.
        </Form.Text>}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='w-100 text-start'>Password</Form.Label>
        <Form.Control required type="password" name="password" value={formValues.password} placeholder="Password" />
        {formErrors.password && <Form.Text className="text-danger text-start w-100 d-block">
         Invalid Password.
        </Form.Text>}
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicFirstName">
        <Form.Label className='w-100 text-start' >First Name</Form.Label>
        <Form.Control type="text" placeholder="First Name" required name="fname" value={formValues.fname}/>
        {formErrors.fname && <Form.Text className="text-danger text-start w-100 d-block">
         Invalid First Name.
        </Form.Text>}
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicLastName">
        <Form.Label className='w-100 text-start' >Last Name</Form.Label>
        <Form.Control type="text" placeholder="Last Name" name="lname" value={formValues.lname} required />
        {formErrors.lname && <Form.Text className="text-danger text-start w-100 d-block">
         Invalid Last Name.
        </Form.Text>}
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicCompany">
        <Form.Label className='w-100 text-start' >Company</Form.Label>
        <Form.Control type="text" placeholder="Company" required name="company" value={formValues.company}/>
        {formErrors.company && <Form.Text className="text-danger text-start w-100 d-block">
         Invalid Company.
        </Form.Text>}
      </Form.Group>

      <Button variant="primary" className='sum' type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Register;