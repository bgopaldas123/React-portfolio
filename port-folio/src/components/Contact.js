import React, { Component } from 'react'
import Navbar from './Navbar';
import Footer from './Footer';

class Contact extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <main id="contact">
          <h1 className="lg-heading">
            Contact <span className="text-secondary">Me</span>
          </h1>
          <h2 className="sm-heading">
            This is how you can reach me...
          </h2>
          <div className="boxes">
            <div>
              <span className="text-secondary">
                Email:
              </span> brajagopaldas77@gmail.com
            </div>
            <div>
              <span className="text-secondary">
                Phone:
              </span> 8598070566, 9348151963
            </div>
            <div>
              <span className="text-secondary">
                Address:</span> Ameerpet, Hyderabad, Telengana, 53000
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }
};

export default Contact;