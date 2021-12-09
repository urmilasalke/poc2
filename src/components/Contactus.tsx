import React from "react";
import axios from "axios";
import "../style/contactus.css";
import { toast } from "react-toastify";
const Contactus = () => {
  const [firstName, setfirstName] = React.useState<string>("");
  const [lastName, setlastName] = React.useState<string>("");
  const [email, setemail] = React.useState<string>("");
  const [message, setmessage] = React.useState<string>("");
  const [errors, setErrors] = React.useState<any | string>({});
  const enabled =
    email.length > 0 &&
    firstName.length > 0 &&
    lastName.length > 0 &&
    message.length > 0;
  const postData = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log(firstName);
    console.log(lastName);
    console.log(email);
    console.log(message);
    if (!/\S+@\S+\.\S+/.test(email)) {
      setErrors({ emails: "Email is Invalid" });
      return;
    }
    // if (firstName.length < 2) {
    //   setErrors({ firstNames: "First name must be greater than 2 characters" });
    //   return;
    // }
    // if (lastName.length < 2) {
    //   setErrors({ lastNames: "Last name must be greater than 2 characters" });
    // }
    // if (message.length < 0) {
    //   setErrors({ messages: "Message should not be empty" });
    //   return;
    // }
    // if (!/\S+@\S+\.\S+/.test(email)) {
    //   errors.emails = "Email is Invalid";
    //   alert(errors.emails);
    //   return;
    // }
    axios
      .post(`http://localhost:4000/contactus/`, {
        firstName: firstName,
        lastName: lastName,
        email: email,
        message: message,
      })
      .then((res) => {
        console.log(res);
        toast.success("Data Saved Successfully !!", { position: "top-center" });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="bg">
        <div className="container py-5">
          <div className="row">
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
                    <div className="form-row">
                      <div className="col-lg-12">
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
                      {/* {errors != {} && (
                        <p id="error" className="error">
                          {errors.firstNames}
                        </p>
                      )} */}
                    </div>
                    <div className="form-row">
                      <div className="col-lg-12">
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
                      {/* {errors !== {} && (
                        <p id="error" className="error">
                          {errors.lastNames}
                        </p>
                      )} */}
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
                      {errors !== {} && (
                        <p id="error" className="error">
                          {errors.emails}
                        </p>
                      )}
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
                    {/* {errors !== {} && (
                      <p id="error" className="error">
                        {errors.messages}
                      </p>
                    )} */}
                    <div className="row pt-5">
                      <div className="col-lg-6"></div>
                      <div className="offset-2 col-lg-4">
                        <button
                          className="btn1"
                          data-testid="submit"
                          onClick={(e) => postData(e)}
                          disabled={!enabled}
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
      </div>
    </>
  );
};

export default Contactus;
