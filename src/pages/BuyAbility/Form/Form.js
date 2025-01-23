import React from 'react'

const Form = () => {
  return (
    <form>
      <div class="mb-3">
        <label for="" className="form-label">How much have you saved for a down payment?</label>
        <input type="text" className="form-control" id="" />
      </div>

      <div class="mb-3">
        <label for="" className="form-label">How much are you comfortable spending per month?</label>
        <input type="text" className="form-control" id="" />
        <div id="" className="form-text">We’ll try to keep the monthly payment we calculate within your budget.</div>
      </div>

      <div class="d-grid gap-2">
        <button type="submit" className="btn btn-primary btn-large">See what you can afford</button>
      </div>
    </form>
  )
}

export default Form