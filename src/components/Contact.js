import React from 'react'
import "./Contact.css"
const Contact = () => {
    return (
 <section id="contact" className=" text-light py-5 mt-5">
  
    <div className="container">
       <div className="row bg-dark text-center">
          <div className="col-md-12">
            <form  action="https://formspree.io/f/mayajvwb"
  method="POST">
                  <div className="form-group p-3">
                    <label for="name">Name</label>
                    <input  type="text" id="name" name="Name" className="form-control" placeholder="Enter Your Username"  autocomplte="off"/>
                  </div>
                  <div className="form-group p-3">
                    <label for="email">Email</label>
                    <input type="email"name="_replyto" id="email" name="email" className="form-control" placeholder="Enter Your Email"  autocomplte="off"/>
                  </div>
                  <div className="form-group p-3">
                    <label for="Phone">Phone Number</label>
                    <input type="text" id="Phone Number" name="Phone" className="form-control" placeholder="Enter Your Phone Number"  autocomplte="off"/>
                  </div>
                  <div className="form-group p-3">
                    <label for="message">Message</label>
                    <textarea name="Message" id="message"  className="form-control" placeholder="Enter Your Message" autocomplte="off"></textarea>
                  </div>
                  <input type="submit" value="Send" className="bg-primary btn btn-lg m-3"/>
                  <input type="reset" value="Reset" className="bg-primary btn btn-lg" />

                </form>
          </div>
       </div>
    </div>

</section>

    )
}

export default Contact
