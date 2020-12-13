import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0.0);

  function updateQuantity(product, amount) {
    if (amount < 1) return; // Dont allow the user to set quantity less than 1

    const newCart = [...cartItems];

    newCart.find((item) => item.name === product.name).quantity = amount;
    setCartItems(newCart);

    localStorage.setItem("cartItems", JSON.stringify(newCart));

    updateTotal(newCart);
  }

  function updateTotal(items) {
    // Check if items is empty and set total to zero
    if (items?.length <= 0) {
      setTotal(0);
      localStorage.setItem("total", 0);
      return;
    }

    let subtotal = 0;
    for (let i = 0; i < items?.length; i++) {
      subtotal =
        Math.round((subtotal + items[i].price * items[i].quantity) * 100) / 100;
      setTotal(subtotal);
    }
    localStorage.setItem("total", subtotal);
  }

  function removeItem(product) {
    const newCart = [...cartItems];

    let result = newCart.filter((item) => item.name !== product);
    setCartItems(result);

    localStorage.setItem("cartItems", JSON.stringify(result));

    updateTotal(result);
  }

  useEffect(() => {
    let items = JSON.parse(localStorage.getItem("cartItems"));
    setCartItems(items);
    updateTotal(items);
  }, []);
  return (
    <div>
      <div className="card m-5 border border-none mw-50">
        <div className="card-header text-center text-white bg-primary">
          Your Order
        </div>

        <ul className="list-group list-group-flush cart-items"></ul>
        {!cartItems ? (
          <p className="text-center my-auto">No items in cart</p>
        ) : (
          cartItems.map((item) => {
            return (
              <li
                key={item.name}
                className="list-group-item d-flex flex-column"
              >
                <div className="row">
                  <div className="col col-lg-4">
                    <img
                      src={`./images/products/${item.image}.jpg`}
                      alt={item.name}
                      className="d-block mx-auto"
                    />
                  </div>
                  <div className="col col-lg-2 text-center">
                    <h5 className="mt-4 flex-wrap item-name">{item.name}</h5>
                    <p>Size: {item.size}</p>
                    <h2>
                      <span className="badge badge-danger">{item.price}</span>
                    </h2>
                  </div>
                  <div className="col mt-4 text-center">
                    <p className="font-weight-bold">Quantity</p>
                    <input
                      type="number"
                      value={item.quantity}
                      className="pl-2 w-50 rounded cart-quantity"
                      onChange={(event) =>
                        updateQuantity(item, event.target.value)
                      }
                    />
                    <button
                      value={item.name}
                      onClick={() => removeItem(item.name)}
                      className="btn border border-none mx-5 mt-3 mt-lg-0 remove-item"
                    >
                      <i className="far fa-trash-alt"> </i>
                    </button>
                  </div>
                </div>
              </li>
            );
          })
        )}
        <div className="card-footer d-flex">
          <h5>Total: {total}</h5>
          <Link to="/checkout">
            <input
              type="submit"
              className="btn btn-primary btn-md ml-4"
              value="Check Out"
              disabled={cartItems?.length > 0 ? false : true}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
