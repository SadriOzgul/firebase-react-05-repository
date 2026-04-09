import React, { useState } from "react";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "./firebase";

function App() {
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleGoogleSignIn = async () => {
    setErrorMessage("");

    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      console.log("Signed in user:", result.user);
    } catch (error) {
      console.error("Signing in with Google failed:", error);
      setErrorMessage(error.message);
    }
  };

  const handleLogout = async () => {
    setErrorMessage("");

    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Logout failed:", error);
      setErrorMessage(error.message);
    }
  };

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      {!user ? (
        <>
          <h1>Please Login to Play</h1>
          <button onClick={handleGoogleSignIn}>Sign in with Google</button>

          {errorMessage && (
            <p style={{ color: "red", marginTop: "15px" }}>{errorMessage}</p>
          )}
        </>
      ) : (
        <>
          <h1>Welcome, {user.displayName}</h1>
          <p>Email: {user.email}</p>

          {user.photoURL && (
            <img
              src={user.photoURL}
              alt="Profile"
              style={{ width: "100px", borderRadius: "50%" }}
            />
          )}

          <br />
          <br />
          <button onClick={handleLogout}>Logout</button>

          {errorMessage && (
            <p style={{ color: "red", marginTop: "15px" }}>{errorMessage}</p>
          )}
        </>
      )}
    </div>
  );
}

export default App;