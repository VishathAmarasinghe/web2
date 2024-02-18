import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function Calculation() {
  return (
    <Container fluid className="py-5" style={{ backgroundColor: "#eee" }}>
      <Row className="justify-content-center min-vh-100">
        <Col md="12" lg="10" xl="8">
          <Card>
            <Card.Body className="p-md-5">
              <div>
                <h4>Tax Calculation Application</h4>
              </div>
              
            <div>
            <div className="d-flex justify-content-between pb-2">
              <h6 className="mb-1 mt-4 text-success">Salary Input</h6>
            </div>
            <input type="number" className="p-2 form-control text-success mb-2" placeholder="Enter your salary"/>

            <div className="d-flex justify-content-between pb-2">
              <h6 className="mb-1 text-success">Select Category</h6>
            </div>
             <select id="categorySelect" className="p-2 form-control mb-2">
               <option value="" disabled selected>Select the category</option>
               <option value="member">Member</option>
               <option value="not_member">Not a Member</option>
              </select> 
              <div className="d-flex justify-content-between pb-2">
                <h6 className="mb-1 text-success">Description</h6>
              </div>
              <input type="text" className="p-2 form-control text-success mb-2" placeholder="Enter your description"/>
            <div className="mt-4">
            <span className="fw-bold text-danger">Calculation</span>
            </div>
            <div className="d-flex justify-content-between mt-2">
              <span>Total Tax reduction</span> <span>Rs.0</span>
            </div>
            <div className="d-flex justify-content-between mt-2">
              <span>ETF/EPF Contribution</span> <span>Rs.0</span>
            </div>
            <hr/>
            <div className="d-flex justify-content-between mt-2">
              <span>Take Home Salary</span> <span>Rs.0</span>
            </div>
            <hr/>
            
            <button className="btn btn-primary btn-lg d-block w-100 mb-2 mt-5">Proceed to Calculation</button>
            <button className="btn btn-primary btn-lg d-block w-100">Check Past Calculation</button>
            
          </div>

          
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Calculation