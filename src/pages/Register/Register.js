import React from 'react'

const Register = () => {
    const handleSubmit = (event) => {
        event.preventDefault()
    }

    return (
        <div className="container-fluid w-50 mt-3">
            <h3 className='text-center'>Register</h3>
            <p className='text-center fw-bold'>Buying a home is a big move. We're here to help you every step of the way.</p>
            <form onSubmit={handleSubmit}>
            <div class="mb-3">
                <label for="" className="form-label">Name</label>
                <input type="text" name='name' className="form-control" id="" required/>
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email Address</label>
                <input type="email" class="form-control" id="email" required />
            </div>
            <div class="mb-3">
                <label for="address" class="form-label">Address</label>
                <textarea class="form-control" id="address" rows="2" required></textarea>
            </div>
            <div class="mb-3">
                <label for="idCard" class="form-label">Upload ID Card</label>
                <input type="file" class="form-control" id="idCard" accept="image/*,.pdf" required />
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" required />
            </div>
            <div class="mb-3">
                <label for="confirmPassword" class="form-label">Retype Password</label>
                <input type="password" class="form-control" id="confirmPassword" required />
            </div>
            <div class="d-grid gap-2">
                <button type="submit" className="btn btn-primary btn-large">Register</button>
            </div>
            </form>
        </div>
    )
}

export default Register