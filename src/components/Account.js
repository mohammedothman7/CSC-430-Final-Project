import React, { useContext, useEffect, useState } from "react";
import { db } from "../firebase";

import { UserContext } from "./UserContext";

function Account() {
  const [user] = useContext(UserContext);
  const [userData, setUserData] = useState({});
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getUserData = () => {
      let email = user?.email;

      let userData = db.collection("users").doc(email);
      userData
        .get()
        .then((doc) => {
          if (doc.exists) {
            setUserData(doc.data());
          } else {
            console.log("No such document!");
          }
        })
        .catch((error) => console.log(error));
    };

    const getOrders = () => {
      let uid = user?.uid;

      if (uid === undefined) return;

      db.collection("orders")
        .where("userId", "==", uid)
        .get()
        .then((doc) => {
          let orderDetails = [];
          doc.forEach((order) => {
            orderDetails.push(order.data());
          });
          orderDetails.reverse();
          setOrders(orderDetails);
        });
    };

    getUserData();
    getOrders();
  }, [user]);

  return (
    <div>
      <div className="d-flex justify-content-center">
        <div className="card mt-5" style={{ width: "75%" }}>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <h2 className="text-center">Account Information</h2>
              <form>
                <div className="row my-3">
                  <div className="col-md-4 ">
                    <label htmlFor="firstName">
                      First Name:
                      <strong className="ml-2">
                        {userData?.firstName?.toUpperCase()}
                      </strong>
                    </label>
                  </div>
                  <div className="col-md-4 ">
                    <label htmlFor="lastName">
                      Last Name:
                      <strong className="ml-2">
                        {userData?.lastName?.toUpperCase()}
                      </strong>
                    </label>
                  </div>
                  <div className="col-md-4 ">
                    <label htmlFor="email">
                      Email:{" "}
                      <strong className="ml-2">
                        {userData?.email?.toUpperCase()}
                      </strong>
                    </label>
                  </div>
                </div>
              </form>
            </li>

            <li className="list-group-item row mt-5 border">
              <h2 className="text-center">Orders</h2>
              {orders?.map((order) => {
                return (
                  <div className=" ml-2 mb-5" key={order.purchaseDate}>
                    <div className="list-group-item  ">
                      {order?.items?.map((item) => {
                        return (
                          <div
                            key={item.purchaseDate}
                            className="row my-4 border-bottom mx-auto"
                          >
                            <div className="col col-lg-12">
                              <img
                                src={`./images/products/${item.image}.jpg`}
                                alt={item.name}
                                className="d-block mx-auto"
                              />
                            </div>
                            <div className="col col-lg-6 text-center">
                              <h5 className="mt-4 flex-wrap item-name">
                                {item.name}
                              </h5>
                              <p>Size: {item.size}</p>
                              <h2>
                                <span className="badge badge-danger">
                                  {item.price}
                                </span>
                              </h2>
                            </div>
                            <div className="col mt-4 text-center">
                              <p className="font-weight-bold">
                                Quantity: {item.quantity}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                      <div className="orderDetails">
                        <div className=" my-3">
                          <h5>
                            Email:
                            <strong className="mx-3 col-md-4">
                              {order?.email}
                            </strong>
                            Purchase Date:
                            <strong className="mx-3 col-md-4">
                              {order?.purchaseDate}
                            </strong>
                            Total:
                            <strong className="mx-3 col-md-4">
                              ${order?.orderTotal}
                            </strong>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Account;
