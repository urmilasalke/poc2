import React from "react";
import axios from "axios";
import "../style/contactus.css";
const Contactus = () => {
  const [firstName, setfirstName] = React.useState("");
  const [lastName, setlastName] = React.useState("");
  const [email, setemail] = React.useState("");
  const [message, setmessage] = React.useState("");
  const postData = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log(firstName);
    console.log(lastName);
    console.log(email);
    console.log(message);
    axios
      .post(`http://localhost:4000/contactus/`, {
        firstName: firstName,
        lastName: lastName,
        email: email,
        message: message,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="container py-5">
        <div className="row">
          {/* <div className="col-lg-6 "></div> */}
          <div className="col-lg-6 mx-auto">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="head text-center text-white">
                      <h3>Contact Us</h3>
                    </div>
                  </div>
                </div>
                <div className="form p-3">
                  <div className="row my-5">
                    <div className="col-lg-6">
                      <input
                        type="text"
                        className="effect-1"
                        name="firstName"
                        data-testid="firstName"
                        placeholder="First Name"
                        onChange={(e) => setfirstName(e.target.value)}
                      />
                      <span className="Focus-border"></span>
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="text"
                        className="effect-1"
                        placeholder="Last Name"
                        name="lastName"
                        data-testid="lastName"
                        onChange={(e) => setlastName(e.target.value)}
                      />
                      <span className="Focus-border"></span>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col-lg-12">
                      <input
                        type="text"
                        name="email"
                        className="effect-1"
                        placeholder="Email Address"
                        data-testid="email"
                        onChange={(e) => setemail(e.target.value)}
                      />
                      <span className="Focus-border"></span>
                    </div>
                  </div>
                  <div className="form-row pt-5">
                    <div className="col-lg-12">
                      <input
                        type="text"
                        className="effect-1"
                        name="message"
                        placeholder="Your Message"
                        data-testid="message"
                        onChange={(e) => setmessage(e.target.value)}
                      />
                      <span className="Focus-border"></span>
                    </div>
                  </div>
                  <div className="row pt-5">
                    <div className="col-lg-6"></div>
                    <div className="offset-2 col-lg-4">
                      <button
                        className="btn1"
                        data-testid="submit"
                        onClick={(e) => postData(e)}
                      >
                        SEND MESSAGE
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactus;
