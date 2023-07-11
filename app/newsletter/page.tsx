import React from "react";
import Side from "@/Components/Form/FormSide/Side";
import LoginForm from "@/Components/Form/Newsletter";
import FormNavbar from "@/Layout/FormNavbar";
import Footer from "@/Layout/Footer";
function page() {
  return (
    <div className="flex flex-col">
    <div className="flex flex-col lg:flex-row">
    <div className="absolute left-0 right-0 lg:left-[5%] w-full lg:right-[5%] ">
        <FormNavbar />
      </div>
      <LoginForm />
      <Side />
    </div>
<Footer />
    </div>
  );
}

export default page;
