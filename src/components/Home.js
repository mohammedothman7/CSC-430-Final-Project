import React from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./css/home.css";

function Home() {
  return (
    <div>
      {/* <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="../../../images/hero.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="../../../images/hero-2.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="../../../images/hero-3.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div> */}

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

      <div className="d-flex justify-content-center flex-wrap"></div>
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
      </div>

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
