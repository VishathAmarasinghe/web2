import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Background.css';

function Tax() {
  return (
    
    <div className='container-fluid p-2 background-radial-gradient overflow-hidden py-3'>
    
    <div className="container py-2">
      <div className="d-flex justify-content-between align-items-center mb-5">
        <div className="d-flex flex-row align-items-center">
          <h4 className="text-uppercase mt-1 text-warning fw-bold fs-1">Tax</h4>
          <span className="ms-2 me-3 text-light fs-1">App</span>
        </div>
         <a href="#!" class="btn btn-danger btn-sm text-warring" role="button">Log out</a>
      </div>

      <div className="row">

        <div className="col-md-5 mb-4">
          <h5 className="mb-4 mt-3 fs-4 fw-bold text-light">Tax Calculation</h5>
          <div>
            <div className="d-flex justify-content-between pb-2">
              <h6 className="mb-1 text-info">Salary Input</h6>
            </div>
            <input type="number" className="p-2 form-control text-success mb-2" placeholder="Enter your salary"/>

            <div className="d-flex justify-content-between pb-2">
              <h6 className="mb-1 text-info">Select Category</h6>
            </div>
             <select id="categorySelect" className="p-2 form-control mb-2">
               <option value="" disabled selected>Select the category</option>
               <option value="member">Member</option>
               <option value="not_member">Not a Member</option>
              </select> 
              <div className="d-flex justify-content-between pb-2">
                <h6 className="mb-1 text-info">Description</h6>
              </div>
              <input type="text" className="p-2 form-control text-success mb-2" placeholder="Enter your description"/>
            
            <button className="btn btn-primary btn-lg d-block w-100 mb-2 mt-5">Proceed to Calculation</button>
            <button className="btn btn-primary btn-lg d-block w-100">Check Past Calculation</button>
            
          </div>
        </div>

        <div className="col-md-5 offset-md-1">
          
          
        
        <div className='my-2 mx-1 bg-glass p-5'>

          

          <span className="fw-bold text-danger">Tax rates</span>
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
            <span className="fw-bold text-danger">EPF/ETF deductions</span>
            <div className="d-flex justify-content-between mt-2">
              <span className="lh-sm">
              Mandatory Contribution Rate
              </span>
              <span>20%</span>
            </div>
            <div className="d-flex justify-content-between mt-2">
              <span>Employer Contribution </span> <span>12%</span>
            </div>
            <div className="d-flex justify-content-between mt-2">
              <span>Employee Contribution</span> <span>8%</span>
            </div>
            <div className="d-flex justify-content-between mt-2">
              <span>Additional Employer Contribution</span> <span>3%</span>
            </div>

        </div>
        
        </div>

      </div>

    </div>

    </div>
  )
}

export default Tax;