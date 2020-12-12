import React from "react";

function About() {
  return (
    <div>
      <div className="about-us container text-center my-3">
        <h2>About Us</h2>
        <p>
          Our mission is what drives us to do everything possible to expand
          human potential. We do that by creating groundbreaking sport
          innovations, by making our products more sustainably, by building a
          creative and diverse global team and by making a positive impact in
          communities where we live and work.
        </p>
      </div>

      <div className="contact container my-5">
        <h2 className="text-center mb-4">Contact Us</h2>
        <form>
          <div className="row">
            <div className="col-md-4 mb-3 ml-auto">
              <label htmlFor="firstName">First Name*</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                required
              />
            </div>
            <div className="col-md-4 mb-3 mr-auto">
              <label htmlFor="lastName">Last Name*</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                required
              />
            </div>
            <div className="col-md-8 mb-3 mx-auto">
              <label htmlFor="email">Email*</label>
              <input
                type="email"
                className="form-control"
                id="email"
                required
              />
            </div>
            <div className="col-md-8 mb-3 mx-auto">
              <label htmlFor="message">Message*</label>
              <div className="d-flex">
                <textarea
                  name="message"
                  id="message"
                  cols="90"
                  rows="5"
                ></textarea>
              </div>
            </div>

            <div className="col-md-8 mx-auto mb-3">
              <button type="button" className="btn btn-primary btn-block">
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default About;
