import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout(props) {
  return (
    <div>
      <Navbar />
      <div>{props.children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
