import React from 'react'
import logo from "../images/2.jpg"
import "./Text.css"
const Text = () => {
    return (
        <section>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4">
                    <img className="image-logo" src={logo} alt="" />
                </div>

                <div className="col-md-7 m-4 d-flex justify-content-center align-items-center ">
                   <div>
                   <h1><b>Big Dream</b></h1>
                    <h2>Became a Web Developer</h2>
                    <p>
                        I already learn the HTML , CSS, bootstrap, react, reactjs. I can build any website.I can even teach my friends how to make a simple a website.My goal is to build a many websites</p>
                        <a href="https://github.com/Mazhar-Islam"><button className="btn btn-primary">Github Profile</button></a>
                   </div>

                </div>

            </div>
            
        </div>
        </section>
    )
}

export default Text
