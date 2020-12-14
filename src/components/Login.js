import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  let history = useHistory();

  const handleLogin = async () => {
    await auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push("/");
      })
      .catch((error) => setError(error));
  };
  return (
    <div>
      <div className="contact container my-5">
        <h2 className="text-center mb-4">Login</h2>
        <form>
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

          <div className="d-flex justify-content-center align-items-center">
            <Link to="/register" className="text-dark text-center mx-auto mb-3">
              Need to register?
            </Link>
          </div>

          <div className="col-md-8 mx-auto mb-3">
            <button
              type="button"
              className="btn btn-primary btn-block"
              onClick={handleLogin}
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
