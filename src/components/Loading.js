import React from 'react'
import './Background.css'

function Loading() {
  return (
    <div>

        <div className='container-fluid p-4 background-radial-gradient overflow-hidden'>

          <div className="d-flex justify-content-center align-items-center min-vh-100">
              <div className="spinner-grow" role="status" style={{ width: '5rem', height: '5rem',color: 'hsl(218, 41%, 30%) 35%,' }}>
                  <span className="visually-hidden">Loading...</span>
              </div>
          </div>
        </div>

    </div>
    
  );
}

export default Loading