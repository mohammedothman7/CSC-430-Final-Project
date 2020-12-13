import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { db } from "../firebase";
import Product from "./Product";
import "./css/home.css";

function Home() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    db.collection("sneakers")
      .get()
      .then(function (querySnapshot) {
        let itemData = [];
        let count = 1;
        querySnapshot.forEach(function (doc) {
          if (count > 3) return;
          itemData.push(doc.data());
          count++;
        });

        setItems(itemData);
      });
  }, []);
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            src="../../../images/hero.jpg"
            className="d-block w-100"
            alt="hero"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="../../../images/hero-2.jpg"
            className="d-block w-100"
            alt="hero2"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="../../../images/hero-3.jpg"
            className="d-block w-100"
            alt="hero3"
          />
        </Carousel.Item>
      </Carousel>

      <div className="container d-flex justify-content-center flex-wrap">
        {!items ? (
          <p>Loading...</p>
        ) : (
          items.map((item) => {
            return (
              <Product
                product={item}
                key={item.name}
                sizes={[7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11]}
              />
            );
          })
        )}
      </div>

      {/* <div className="d-flex justify-content-center flex-wrap"></div>
      <h2 className="text-center mt-3">Newest Arrivals</h2>
      <div className="popular-items container d-flex justify-content-center flex-wrap">
        <div className="card mt-4 mx-md-2" style={{ width: "18rem" }}>
          <img
            src="../../../images/products/lebron-18.jpg"
            alt="Lebron 18 sneakers"
            className="card-img-top border border-bottom-5"
          />
          <h4 className="text-center m-3">Nike Lebron 18</h4>
          <div className="d-flex justify-content-center">
            <button
              type="button"
              className="btn btn-primary btn-md mb-2"
              style={{ width: "150px" }}
            >
              Add to cart
            </button>
          </div>
        </div>

        <div className="card mt-4 mx-md-2" style={{ width: "18rem" }}>
          <img
            src="../../../images/products/kybrid-s2.jpg"
            alt="Nike Kybrid S2"
            className="card-img-top border border-bottom-5"
          />
          <h4 className="text-center m-3">Nike Kybrid S2</h4>
          <div className="d-flex justify-content-center">
            <button
              type="button"
              className="btn btn-primary btn-md mb-2"
              style={{ width: "150px" }}
            >
              Add to cart
            </button>
          </div>
        </div>

        <div className="card mt-4 mx-md-2" style={{ width: "18rem" }}>
          <img
            src="../../../images/products/Nike-Air-Force-1.jpg"
            alt="Nike Air Force 1"
            className="card-img-top border border-bottom-5"
          />
          <h4 className="text-center m-3">Nike Air Force 1</h4>
          <div className="d-flex justify-content-center">
            <button
              type="button"
              className="btn btn-primary btn-md mb-2"
              style={{ width: "150px" }}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div> */}

      <div className="jumbotron jumbotron-fluid mt-4">
        <div className="container d-flex justify-content-center flex-wrap">
          <h1
            className="display-4 text-center text-white font-weight-bold"
            style={{ fontFamily: "Roboto Mono, monospace" }}
          >
            APPAREL FOR ALL
          </h1>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="d-flex justify-content-center">
                  <Link to="/clothing">
                    <input
                      type="submit"
                      className="btn btn-danger btn-md"
                      value="Shop Now"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container grid mt-4">
        <div className="row text-center d-md-flex justify-content-center">
          <div className="card col-md-6 m-2 border border-primary">
            <h3>Free shipping on orders over $100</h3>
          </div>
          <div className="card col-6 col-md-4 m-2 border-primary pt-lg-3">
            <h3>Stay Fresh 2 Death</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
