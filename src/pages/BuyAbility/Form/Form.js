import React, { useEffect, useState } from 'react'
import buyAbilityServiceInstance from '../../../services/BuyAbilityService'

const Form = () => {
  const [result, setResult] = useState([])
  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
 
    const formValues = [{
      propertyPrice: formData.get('property-price'),
      downPayment: formData.get('down-payment'),
      monthlyIncome: formData.get('monthly-income'),
      loanTenure: formData.get('loan-tenure'),
      annualInterestRate: formData.get('annual-interest-rate') 
    }]

    postBuyAbilityForm(formValues)
  }

  const postBuyAbilityForm = async (request) => {
    try {
      const callback = await buyAbilityServiceInstance.postBuyAbility(request)
      setResult(callback)
    } catch(error) {
        console.error('Error:', error);
    } finally {
        console.warn('Post Buy Ability api done !');
    }
  }
  
  return (
    <>
    <form onSubmit={handleSubmit}>
      <div class="mb-3">
        <label for="" className="form-label">What is the price of the property you want to buy??</label>
        <input type="text" name='property-price' className="form-control" id="" />
      </div>

      <div class="mb-3">
        <label for="" className="form-label">How much do you have for the down payment?</label>
        <input type="text" name='down-payment' className="form-control" id="" />
        <div id="" className="form-text">We’ll try to keep the monthly payment we calculate within your budget.</div>
      </div>

      <div class="mb-3">
        <label for="" className="form-label">What is your monthly income</label>
        <input type="text" name="monthly-income" className="form-control" id="" />
        <div id="" className="form-text">Enter your total income before taxes or deductions.</div>
      </div>
      
      <div class="mb-3">
        <label for="" className="form-label">How long do you want to pay off the loan?</label>
        <input type="text" name="loan-tenure" className="form-control" id="" />
        <div id="" className="form-text">Enter the loan tenure in years (e.g., 5, 10, 15, or 20 years).</div>
      </div>

      <div class="mb-3">
        <label for="" className="form-label">What is the annual interest rate offered by the bank?</label>
        <input type="text" name="annual-interest-rate" className="form-control" id="" />
        <div id="" className="form-text">Enter the loan's annual interest rate in percentage.</div>
      </div>

      <div class="d-grid gap-2">
        <button type="submit" className="btn btn-primary btn-large">See what you can afford</button>
      </div>
    </form>
    {result.length !== 0 ? (
      <div class="container my-5">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card shadow-lg">
                    <div class="card-header text-center bg-primary text-white">
                        <h5>Loan Affordability Details</h5>
                    </div>
                    <div class="card-body">
                        <p><strong>Loan Amount:</strong> <span id="loanAmount">$100,000</span></p>
                        <p><strong>Monthly EMI:</strong> <span id="monthlyEMI">$1,500</span></p>
                        <p><strong>Affordable EMI:</strong> <span id="affordableEMI">$1,200</span></p>
                        <p><strong>Affordability Status:</strong> 
                            <span id="isAffordable" class="badge bg-danger">Not Affordable</span>
                        </p>
                        <div class="mt-4">
                            <h6>EMI Affordability Progress</h6>
                            <div class="progress">
                                <div 
                                    id="emiProgressBar" 
                                    class="progress-bar bg-danger" 
                                    role="progressbar" 
                                    style={{width: '80%'}} 
                                    aria-valuenow="80" 
                                    aria-valuemin="0" 
                                    aria-valuemax="100">
                                    80%
                                </div>
                            </div>
                            <small class="text-muted">Affordable EMI should be greater than Monthly EMI for affordability.</small>
                        </div>
                    </div>
                    <div class="card-footer text-center">
                        <button id="updateInfo" class="btn btn-primary">Update Info</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    ) : (
      <></>
    )}
    </>
  )
}

export default Form