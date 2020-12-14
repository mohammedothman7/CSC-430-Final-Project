import React, { useState, createContext } from "react";
import { auth } from "../firebase";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [userData, setUserData] = useState(null);

  auth.onAuthStateChanged((user) => {
    if (user) {
      console.log("Signed in");
      setUserData(user);
    } else {
      setUserData(null);
    }
  });
  return (
    <UserContext.Provider value={[userData, setUserData]}>
      {props.children}
    </UserContext.Provider>
  );
};
