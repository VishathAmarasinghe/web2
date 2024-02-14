import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Tax.css';

function Tax() {
  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-5">
        <div className="d-flex flex-row align-items-center">
          <h4 className="text-uppercase mt-1">Tax</h4>
          <span className="ms-2 me-3">App</span>
        </div>
        <a href="#!" className="text-decoration-none">Log out</a>
      </div>

      <div className="row">

        <div className="col-md-5 mb-4 mb-md-0">
          <h5 className="mb-3">Tax Calculation</h5>
          <div>
            <div className="d-flex justify-content-between">
              <div className="d-flex flex-row mt-1">
                <h6>Salary Input</h6>
              </div>
            </div>
            <p>
              Please enter your monthly gross salary.
            </p>
            <div className="p-2 d-flex justify-content-between align-items-center">
              <input
                type="number"
                className="p-2 form-control"/>
            </div>

            <hr />

            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex flex-row mt-1">
                <h6>EPF/ ETF deductions</h6>
              </div>
            </div>
            <p>
                The mandatory minimum contribution rate for the members of the Fund at present is 20 per cent of the gross monthly 
                earnings of their employment. The employers and the employees (members) are required to contribute a minimum rate 
                of 12 per cent and 8 per cent of the member’s monthly gross earnings, respectively to EPF.
            </p>
            <p>
              Contributions are due from employers at the rate of 3% of every employee’s monthly total earnings
            </p>
            
            <button className="btn btn-success btn-lg d-block w-100 mb-2">Proceed to Calculation</button>
            <button className="btn btn-success btn-lg d-block w-100">Check Past Calculation</button>
          </div>
        </div>

        <div className="col-md-5 offset-md-1">
          <div className="p-3" style={{ backgroundColor: "#eee" }}>
            <span className="fw-bold">Tax rates</span>
            <div className="d-flex justify-content-between mt-2">
              <span>Upto 100,000</span> <span>0</span>
            </div>
            <div className="d-flex justify-content-between mt-2">
              <span>100,000 - 141,667</span> <span>6%</span>
            </div>
            <div className="d-flex justify-content-between mt-2">
              <span>141,667 - 183,333</span> <span>12%</span>
            </div>
            <div className="d-flex justify-content-between mt-2">
              <span>183,333 - 225,000</span> <span>18%</span>
            </div>
            <div className="d-flex justify-content-between mt-2">
              <span>225,000 - 266,667</span> <span>24%</span>
            </div>
            <div className="d-flex justify-content-between mt-2">
              <span>266,667 - 308,333</span> <span>30%</span>
            </div>
            <div className="d-flex justify-content-between mt-2">
              <span>Above 308,333</span> <span>36%</span>
            </div>
            <hr />
            <div className="d-flex justify-content-between mt-2">
              <span className="lh-sm">
                Tax Deductions
              </span>
              <span>Rs.00.00</span>
            </div>
            <div className="d-flex justify-content-between mt-2">
              <span className="lh-sm">
                ETP/ETF Deductions
              </span>
              <span>Rs.00.00</span>
            </div>

            <hr />

            <div className="d-flex justify-content-between mt-2">
              <span>Toatla Deduction from Salary </span> <span>Rs.00.00</span>
            </div>
            
            <hr />

            <div className="d-flex justify-content-between mt-2">
              <span>Take-Home Salary </span> <span className="text-success">Rs.00.00</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Tax