import React from 'react'

const Form = () => {
  return (
    <form>
      <div class="mb-3">
        <label for="" className="form-label">What is the price of the property you want to buy??</label>
        <input type="text" className="form-control" id="" />
      </div>

      <div class="mb-3">
        <label for="" className="form-label">How much do you have for the down payment?</label>
        <input type="text" className="form-control" id="" />
        <div id="" className="form-text">We’ll try to keep the monthly payment we calculate within your budget.</div>
      </div>

      <div class="mb-3">
        <label for="" className="form-label">What is your monthly income</label>
        <input type="text" className="form-control" id="" />
        <div id="" className="form-text">Enter your total income before taxes or deductions.</div>
      </div>
      
      <div class="mb-3">
        <label for="" className="form-label">How long do you want to pay off the loan?</label>
        <input type="text" className="form-control" id="" />
        <div id="" className="form-text">Enter the loan tenure in years (e.g., 5, 10, 15, or 20 years).</div>
      </div>

      <div class="mb-3">
        <label for="" className="form-label">What is the annual interest rate offered by the bank?</label>
        <input type="text" className="form-control" id="" />
        <div id="" className="form-text">Enter the loan's annual interest rate in percentage.</div>
      </div>

      <div class="d-grid gap-2">
        <button type="submit" className="btn btn-primary btn-large">See what you can afford</button>
      </div>
    </form>
  )
}

export default Form