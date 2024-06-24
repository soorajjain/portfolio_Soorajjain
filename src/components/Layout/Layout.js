import React from "react";
// import Footer from './Footer'
import Navbar from "./Navbar";
// import Footer from "./Footer";
// import Navbar from './Navbar'

function Layout(props) {
  return (
    <div>
      <Navbar />
      <div>{props.children}</div>
    </div>
  );
}

export default Layout;
