import "../styles/globals.css";
import "../components/NavBar";
import NavBar from "../components/NavBar";
import React from "react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
