import React, { useState } from "react";
import "../components/IncDec.css";

const IncDec = () => {
  const [num, setNum] = useState(0);
  const incNum = () => {
    setNum(num + 1);
  };
  const decNum = () => {
    if (num > 0) {
      setNum(num - 1);
    } else {
      alert("Not decrease below 0");
    }
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <p>Caunter App</p>
          <h1>{num}</h1>
          <div className="btn_div">
            <button onClick={incNum}>Inc</button>
            <button onClick={decNum}>Dec</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default IncDec;
