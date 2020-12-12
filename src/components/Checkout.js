import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function Checkout() {
  const [subtotal, setSubtotal] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [tax, setTax] = useState(0);
  const [orderTotal, setOrderTotal] = useState(0);
  let history = useHistory();

  function placeOrder() {
    history.push("/");
    alert(
      "Your order has successfully been placed. Thank you for shopping with Sneaker & Apparels Co."
    );
  }

  useEffect(() => {
    let total = localStorage.getItem("total");
    let shipping = total >= 100.0 ? 0 : 6.99;
    let tax = Math.round(total * 0.0875 * 100) / 100;
    let orderTotal =
      Math.round(
        (parseFloat(total) + parseFloat(tax) + parseFloat(shipping)) * 100
      ) / 100;

    setSubtotal(total);
    setShipping(shipping);
    setTax(tax);
    setOrderTotal(orderTotal);
  }, []);

  return (
    <div>
      <div className="d-flex justify-content-center">
        <div className="card mt-5">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <h2 className="text-center">Contact Information</h2>
              <form>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="firstName">First Name*</label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="lastName">Last Name*</label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="email">Email*</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="phoneNumber">Phone Number*</label>
                    <input
                      type="text"
                      className="form-control"
                      id="phoneNumber"
                      required
                    />
                  </div>
                </div>
              </form>
            </li>

            <li className="list-group-item">
              <h2 className="text-center">Address</h2>
              <form>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="streetAddress">Street Address*</label>
                    <input
                      type="text"
                      className="form-control"
                      id="streetAddress"
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="aptNo">APT/UNIT NO.</label>
                    <input
                      type="text"
                      className="form-control"
                      id="aptNo"
                      required
                    />
                  </div>
                  <div className="col-md-4 mb-3">
                    <label htmlFor="city">City*</label>
                    <input
                      type="text"
                      className="form-control"
                      id="city"
                      required
                    />
                  </div>
                  <div className="col-md-4 mb-3">
                    <label htmlFor="state">State*</label>
                    <input
                      type="text"
                      className="form-control"
                      id="state"
                      required
                    />
                  </div>
                  <div className="col-md-4 mb-3">
                    <label htmlFor="zipCode">Zip Code*</label>
                    <input
                      type="text"
                      className="form-control"
                      id="zipCode"
                      required
                    />
                  </div>
                </div>
              </form>
            </li>

            <li className="list-group-item">
              <h2 className="text-center">Payment</h2>
              <form>
                <div className="row">
                  <div className="col-12 mb-3">
                    <label htmlFor="cardNumber">Card Number*</label>
                    <input
                      type="text"
                      className="form-control"
                      id="cardNumber"
                      required
                    />
                  </div>
                  <div className="col-12 mb-3">
                    <label htmlFor="nameOnCard">Name on card</label>
                    <input
                      type="text"
                      className="form-control"
                      id="nameOnCard"
                      required
                    />
                  </div>
                  <div className="col-sm-4 mb-3">
                    <label htmlFor="mm">MM*</label>
                    <input
                      type="text"
                      className="form-control"
                      id="mm"
                      required
                      maxLength="2"
                    />
                  </div>
                  <div className="col-sm-4 mb-3">
                    <label htmlFor="yy">YY*</label>
                    <input
                      type="text"
                      className="form-control"
                      id="yy"
                      required
                      maxLength="2"
                    />
                  </div>
                  <div className="col-sm-4 mb-3">
                    <label htmlFor="csc">CSC*</label>
                    <input
                      type="text"
                      className="form-control"
                      id="csc"
                      required
                      maxLength="4"
                    />
                  </div>
                </div>
              </form>
            </li>
            <li className="list-group-item">
              <h2 className="text-center">Order Summary</h2>
              <p>SUBTOTAL: ${subtotal}</p>
              <p>
                SHIPPING:{" "}
                <span className="shipping">
                  {subtotal >= 100 ? "FREE" : "$" + shipping}
                </span>
              </p>
              <p>TAX: ${tax}</p>
              <p>ORDER TOTAL: ${orderTotal}</p>

              <input
                type="submit"
                className="btn btn-outline-primary btn-lg btn-block place-order"
                value="Place Order"
                onClick={placeOrder}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
