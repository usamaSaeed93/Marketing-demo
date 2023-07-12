import React from "react";
import OurTalent from "./Talent Components/OurTalent";
import Initialize from "./Getting Started/Initialize";
import Experts from "./Experts";

function Background() {
  const styles = {
    width: "100%",
  };
  return (
    <div className="bg_black" style={styles}>
      <Experts />
      <OurTalent />
      <Initialize />
    </div>
  );
}
export default Background;
