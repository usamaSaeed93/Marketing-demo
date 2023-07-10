import React from "react";
import Side from "@/Components/Form/FormSide/Side";
import LoginForm from "@/Components/Form/LoginForm";
import Navbar from "@/Layout/Navbar";
import Footer from "@/Layout/Footer";
function page() {
  return (
    <div className="flex flex-col">
    <div className="flex flex-col lg:flex-row">
      <div className="absolute">{/* <Navbar /> */}</div>
      <LoginForm />
      <Side />
    </div>
<Footer />
    </div>
  );
}

export default page;
