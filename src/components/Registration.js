import React from 'react';
import './Background.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Registration() {
  return (
    <div className='container-fluid p-4 background-radial-gradient overflow-hidden py-5'>

      <div className='row d-flex align-items-center justify-content-center py-3'>

        <div className='col-md-6 text-center text-md-start d-flex flex-column justify-content-center'>

          <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{color: 'hsl(218, 81%, 95%)'}}>
           Your taxes <br />
            <span style={{color: 'hsl(218, 81%, 75%)'}}>with our solutions</span>
          </h1>

          <p className='px-3' style={{color: 'hsl(218, 81%, 85%)'}}>
          Welcome to our Sri Lankan tax calculation platform! We provide comprehensive solutions for your tax needs, 
          ensuring accuracy and compliance with local regulations.
          Whether you're an individual or a business, our user-friendly tools and expert guidance streamline your tax processes.
          </p>

        </div>

        <div className='col-md-5 position-relative py-4'>

          <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
          <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

          <div className='mx-1 bg-glass px-5 py-4'>
              
                <h2 className='mb-1'>Get Start Now!</h2>

              <div className='row my-0'>
                <div className='col-6'>
                  <div className=''>
                    <label htmlFor='form1' className='form-label'>First name</label>
                    <input type='text' className='form-control' id='form1' />
                  </div>
                </div>

                <div className='col-6'>
                  <div className=''>
                    <label htmlFor='form2' className='form-label'>Last name</label>
                    <input type='text' className='form-control' id='form2' />
                  </div>
                </div>
              </div>

              <div className='row my-0'>
                <div className='col-6'>
                  <div className=''>
                    <label htmlFor='form5' className='form-label'>Phone Number</label>
                    <input type='text' className='form-control' id='form5' />
                  </div>
                </div>

                <div className='col-6'>
                  <div className=''>
                    <label htmlFor='form6' className='form-label'>Age</label>
                    <input type='text' className='form-control' id='form6' />
                  </div>
                </div>
              </div>

              <div className=''>
                <label htmlFor='form3' className='form-label'>Email</label>
                <input type='email' className='form-control' id='form3' />
              </div>

              <div className=''>
                <label htmlFor='form4' className='form-label'>Password</label>
                <input type='password' className='form-control' id='form4' />
              </div>

              <div className=''>
                <label htmlFor='form4' className='form-label'>Re-enter Password</label>
                <input type='password' className='mb-3 form-control' id='form4' />
              </div>

              <a href="Tax.js" class="btn btn-primary w-100 mb-2" role="button">Sing Up</a>
              <p className='text-center'>Already have an account?<a href='LogIn.js'>Log in</a>
              </p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Registration;