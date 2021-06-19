import React from 'react'
import logo from "../images/1.jpg"
import "./About.css"
const About = () => {
    return (
    <section className="py-5 mt-5 ">
        <div className="container">
            <div className="row">
                <div className="col-md-6 py-5">
                
           <h1 className="name">Mazharul Islam <span className="text-primary">Website</span></h1>
           <h3>World-Class professional Web dev</h3>
           <p>I think people hire me because I am good at what I love to do. 
               My work speaks for the goals of my clients; it’s crafted carefully, 
               studied through the gamut of human psychology, and created to stand the 
               test of time. My role is to listen and trust, research and explore, 
               create and design, present and deliver, and to cater to your needs.</p>

               <a href="https://drive.google.com/drive/folders/1I17lDu2aI6JOnhpmiQ5eTacCOnS6etGz"><button  className="btn btn-primary">HIRE ME</button></a>

                </div>
                <img className="logo-img" src={logo} alt="" />
            </div>
        </div>
    </section>

    )
}

export default About
