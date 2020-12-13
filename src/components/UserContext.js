import React, { useState, createContext, useEffect } from "react";
import { auth, db } from "../firebase";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  auth.onAuthStateChanged((user) => {
    if (user) {
      setIsLoggedIn(true);
      setUserData(user);
    } else {
      setIsLoggedIn(false);
      setUserData(null);
    }
  });
  return (
    <UserContext.Provider
      value={([isLoggedIn, setIsLoggedIn], [userData, setUserData])}
    >
      {props.children}
    </UserContext.Provider>
  );
};
