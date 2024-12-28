// import React from 'react'

import { useState } from "react";

export default function Button() {
  const [Click] = useState();
  const [hoverd, sethoverd] = useState();

  const handleclick = () => {
    alert("Welcome To User In My App");
  };

  const handlehoverd = () => {
    sethoverd(true);
  };

  return (
    <>
      <div className="text-center" style={{ marginTop: "300px" }}>
        <button onClick={handleclick} style={{ fontSize: "50px" }}>
          Click Me{Click}
        </button>
        <p
          className="hover-paragraph"
          onMouseOver={handlehoverd}
          style={{ color: hoverd ? "" : "", marginTop: "30px" }}
          onMouseEnter={handlehoverd}
          onMouseLeave={() => sethoverd(false)}
        >
          Hover over this paragraph to change its color!
        </p>
      </div>
    </>
  );
}
