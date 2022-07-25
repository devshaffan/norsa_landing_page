import { Button } from "react-bootstrap";
const Contact = () => {
  return (
    <div>
      {/* <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Get In Touch</h2>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </div>
              <form name="sentMessage">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <Button type="submit" className="btn btn-lg btn-light">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>
                4321 California St, San Francisco, CA 12345
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>
                +1 123 456 1234
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>
                info@company.com
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div id="footer" style={{
        position: "fixed",
        left: "0",
        bottom: "0",
        width:"100%"
      }}>
        <div className="container text-center">
          <p>
            &copy; 2022 all rights reserved by
            <span style={{ marginLeft: "5px", color: "#3AAB7B", fontWeight: "500" }}>Norsa N.V.</span>
          </p>
        </div>
        <div className="container text-center">
          <p>
            We will not, in any circumstances, share your personal information with other individuals or organizations without your permission,
            including public organizations, corporations or individuals, except when applicable by law. We do not sell, communicate or divulge
            your information to any mailing lists. The only exception is if the law or a court order compels us to. We will share your information
            with government agencies if they need or request it.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
