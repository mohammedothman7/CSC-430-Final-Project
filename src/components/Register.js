import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import moment from "moment";

import { auth, db } from "../firebase";
import { UserContext } from "./UserContext";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const [isLoggedIn, setIsLoggedIn] = useContext(UserContext);

  let history = useHistory();

  const handleRegister = async () => {
    await auth
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        setIsLoggedIn(true);

        user.user.updateProfile({
          displayName: firstName,
        });

        db.collection("users")
          .doc(email)
          .set({
            firstName,
            lastName,
            email,
            createdAt: moment().format("MMM DD YYYY, h:mm:ss a"),
          });
        history.push("/");
      })
      .catch((error) => setError(error));
  };

  return (
    <div>
      <div className="contact container my-5">
        <h2 className="text-center mb-4">Register</h2>
        <form>
          <div className="row">
            <div className="col-md-4 mb-3 ml-auto">
              <label htmlFor="firstName">First Name*</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                required
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="col-md-4 mb-3 mr-auto">
              <label htmlFor="lastName">Last Name*</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                required
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="col-md-8 mb-3 mx-auto">
              <label htmlFor="email">Email*</label>
              <input
                type="email"
                className="form-control"
                id="email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="col-md-8 mb-3 mx-auto">
              <label htmlFor="password">Password*</label>
              <input
                type="password"
                className="form-control"
                id="password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="col-md-8 mb-3 mx-auto text-danger">
              {error?.message}
            </div>

            <div className="col-md-8 mx-auto mb-3">
              <button
                type="button"
                className="btn btn-primary btn-block"
                onClick={handleRegister}
              >
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
