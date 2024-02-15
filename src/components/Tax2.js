import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Background.css';
import TableRow from './TableRow';

function Tax2() {
  return (
    
    <div className='container-fluid p-2 background-radial-gradient overflow-hidden py-3 min-vh-100'>
    
  
    <div className="container py-2">
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
    

      <div className="row  bg-glass mx-4 p-3 ">

        <div className="col-md-5">
          <div className="d-flex justify-content pb-2">
            <span className='mx-4'>First Name: </span>
          </div>
          <div className="d-flex justify-content pb-2">
            <span className='mx-4'>Last Name: </span>
          </div>
        </div>

        <div className="col-md-5">
          <div className="d-flex justify-content pb-2 ">
            <span className='mx-4'>Email: </span>
          </div>
          <div className="d-flex justify-content pb-2">
            <span className='mx-4'>Category: </span>
          </div>
        </div>

      </div>

      <div className="row mt-4 mx-3">
      <div className="col">
        <div className="table-responsive" style={{ overflowX: "auto" }}>
          <table className='table table-striped text-light'>
            <thead>
               <tr>
                 <th scope="col">ID</th>
                 <th scope="col">Salary</th>
                 <th scope="col">Description</th>
                 <th scope="col">Take home Salary</th>
                 <th scope="col">Action</th>
               </tr>
             </thead>
             <tbody>
                <TableRow id={1} amount={100000} description="Description 1" discountedAmount={80000} />
             </tbody>
          </table>
        </div>
       </div>
     </div>


    </div>

    </div>
  )
}

export default Tax2;