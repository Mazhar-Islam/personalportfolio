import React from 'react'
import { ProgressBar } from 'react-bootstrap'

const Services = () => {
    return (
        <section>
        <div>
            
            <div className="container">
            <h1 className="py-5">My Skill</h1>
                <div className="row">
                    <div className="col-md-6 mt-3">
                    <ProgressBar striped variant="success" now={80} label="80%" />HTML
                    </div>
                    <div className="col-md-6  mt-3">
                    <ProgressBar className striped variant="info" now={70} label="70%" />CSS
                    </div>
                    <div className="col-md-6 mt-3">
                    <ProgressBar striped variant="warning" now={60} label="60%" />JAVASCRIPT
                    </div>
                    <div className="col-md-6 mt-3">
                    <ProgressBar striped variant="danger" now={50} label="50%" />REACT
                    </div>
                    <div className="col-md-6 mt-3">
                    <ProgressBar striped variant="success" now={80} label="80%" />BOOTSTRAP
                    </div><div className="col-md-6 mt-3">
                    <ProgressBar striped variant="info" now={60} label="60%" />MYSQL
                    </div>

                </div>
            </div>
            {/* <ProgressBar striped variant="info" now={20} />
            <ProgressBar striped variant="warning" now={60} />
            <ProgressBar striped variant="danger" now={80} /> */}
            
        </div>
         </section>

   
    )
}

export default Services
