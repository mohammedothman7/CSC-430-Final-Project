import React from "react";
import "./css/product.css";

function Product(props) {
  const addToCart = (product) => {
    let oldItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    for (let i = 0; i <= oldItems.length; i++) {
      if (oldItems[i]?.name === product?.name) {
        alert("Item already added to your cart");
        return;
      }
    }

    product.quantity = 1;
    oldItems.push(product);
    localStorage.setItem("cartItems", JSON.stringify(oldItems));
  };
  let { product } = props;
  return (
    <div>
      <div
        key={product.name}
        className="card mt-4 mx-md-2"
        style={{ width: "18rem", height: "18rem" }}
      >
        <img
          src={`./images/products/${product.image}.jpg`}
          alt={product.name}
          className="card-img-top border border-bottom-5 item-image"
        />
        <h4 className="text-center m-3 item-title">{product.name}</h4>
        <div className="d-flex justify-content-center">
          <button
            type="button"
            className="btn btn-primary btn-md mb-2 add-to-cart"
            style={{ width: "150px", paddingBottom: "3px" }}
            onClick={() => addToCart(product)}
          >
            Add to cart
          </button>
          <h5>
            <span className="badge badge-secondary ml-3 mt-2 item-price">
              ${product.price}
            </span>
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Product;
