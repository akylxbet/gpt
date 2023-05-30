import React from "react";
import Future from "../Feuter/Feuter";
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Future/>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
