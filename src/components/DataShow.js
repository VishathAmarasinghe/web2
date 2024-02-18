import React from 'react';
import './Background.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function DataShow() {
  return (
    <div className='container-fluid p-4 background-radial-gradient overflow-hidden py-5 min-vh-100'>

        <div class="container py-2">
        
          <div className="d-flex justify-content-between align-items-center mb-5">
              <div className="d-flex flex-row align-items-center">
                 <h4 className="text-uppercase mt-1 text-warning fw-bold fs-1">Tax</h4>
                 <span className="ms-2 me-3 text-light fs-1">App</span>
              </div>
              <div>
                  <a href="#!" class="btn btn-success btn-sm me-3 px-3" role="button">Back</a>
                  <a href="#!" class="btn btn-danger btn-sm" role="button">Log out</a>
              </div>
         
          </div>

            <div class="row d-flex justify-content-center">
              <div class="col-md-12 col-lg-10 col-xl-8">
                  <div class="card">
                       <div class="card-body p-md-5">

                           <div><span class="fw-bold text-success mb-3">Calculation</span></div>
                           <div class="d-flex justify-content-between mt-2">
                                <span>Input Saraly</span> <span>Rs.0</span>
                           </div>
                           <div class="d-flex justify-content-between mt-2">
                                <span>Total Tax reduction</span> <span>Rs.0</span>
                           </div>
                           <div class="d-flex justify-content-between mt-2">
                                <span>EPF Contribution</span> <span>Rs.0</span>
                           </div>
                           <div class="d-flex justify-content-between mt-2">
                                <span>ETF Contribution</span> <span>Rs.0</span>
                           </div>
                           <hr/>
                           <div class="d-flex justify-content-between mt-2">
                                <span>Take Home Salary</span> <span>Rs.0</span>
                           </div>
 
                        </div>
                  </div>
              </div>
         </div>
       </div>



    </div>
  )
}

export default DataShow;