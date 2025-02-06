import React, { useState } from 'react'
import AuthServiceInstance from '../../../services/AuthService'

const Register = () => {
    const [formData, setFormData] = useState({
        full_name:'',
        // email:"",
        // address:"",
        // password:"",
        // retype_password:""
    })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = (event) => {        
        event.preventDefault()
        alert(`Name: ${formData.full_name}`)
        //const data = new FormData();

        //data.append('fullName', formData.full_name);
        // data.append('email', formData.email);
        // data.append('address', formData.address);
        // data.append('password', formData.password);
        // data.append('retypePassword', formData.retype_password);

        //AuthServiceInstance.userRegistration(data);
    }

    return (
        <div className="container-fluid w-50 mt-3">
            <h3 className='text-center'>Register</h3>
            {/* <p className='text-center fw-bold'>Buying a home is a big move. We're here to help you every step of the way.</p> */}
            <form onSubmit={handleSubmit}>
            <div class="mb-3">
                <label for="" className="form-label">Full Name</label>
                <input type="text" name="name" value={ formData.full_name } onChange={ handleChange } className="form-control" />
            </div>
            {/* <div class="mb-3">
                <label for="email" class="form-label">Email Address</label>
                <input type="email" name="email" class="form-control" id="email" required />
            </div>
            <div class="mb-3">
                <label for="address" class="form-label">Address</label>
                <textarea name="address" class="form-control" id="address" rows="2" required></textarea>
            </div>
            <div class="mb-3">
                <label for="idCard" class="form-label">Upload ID Card</label>
                <input type="file" name="id-card" class="form-control" id="idCard" accept="image/*,.pdf"  />
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" name="password" class="form-control" id="password" required />
            </div>
            <div class="mb-3">
                <label for="confirmPassword" class="form-label">Retype Password</label>
                <input type="password" name="confirm-password" class="form-control" id="confirmPassword" required />
            </div>
            <div class="d-grid gap-2">
                <button type="submit" className="btn btn-primary btn-large">Register</button>
            </div> */}
            </form>
        </div>
    )
}

export default Register