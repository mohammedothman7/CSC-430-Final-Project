import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import Product from "./Product";
function Sneakers() {
  const [sneakers, setSneakers] = useState([]);

  useEffect(() => {
    db.collection("sneakers")
      .get()
      .then(function (querySnapshot) {
        let sneakersData = [];
        querySnapshot.forEach(function (doc) {
          sneakersData.push(doc.data());
        });

        setSneakers(sneakersData);
      });
  }, []);
  return (
    <div>
      <div className="container d-flex justify-content-center flex-wrap">
        {!sneakers ? (
          <p>Loading...</p>
        ) : (
          sneakers.map((sneaker) => {
            return <Product product={sneaker} key={sneaker.name} />;
          })
        )}
      </div>
    </div>
  );
}

export default Sneakers;
