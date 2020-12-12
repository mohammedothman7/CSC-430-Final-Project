import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import Product from "./Product";
function Clothing() {
  const [clothing, setClothing] = useState([]);

  useEffect(() => {
    db.collection("clothing")
      .get()
      .then(function (querySnapshot) {
        let clothingData = [];
        querySnapshot.forEach(function (doc) {
          clothingData.push(doc.data());
        });

        setClothing(clothingData);
      });
  }, []);
  return (
    <div>
      <div className="container d-flex justify-content-center flex-wrap">
        {!clothing ? (
          <p>Loading...</p>
        ) : (
          clothing.map((item) => {
            return <Product product={item} key={item.name} />;
          })
        )}
      </div>
    </div>
  );
}

export default Clothing;
