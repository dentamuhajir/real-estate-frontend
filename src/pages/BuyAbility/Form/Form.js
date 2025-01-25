import React from 'react'

const Form = () => {
  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    let propertyPrice = formData.get('property-price')
    let downPayment = formData.get('down-payment')
    let monthlyIncome = formData.get('monthly-income')
    let loanTenure = formData.get('loan-tenure')
    let annualInterestRate = formData.get('annual-interest-rate')

    
    alert("click " + formData.get('property-price'));
  }
  return (
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
  )
}

export default Form