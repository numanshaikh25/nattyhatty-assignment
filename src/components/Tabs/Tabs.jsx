import React from "react";
import "./Tabs.css";
function Tabs({ setShow, show }) {
  let sent = show ? "active" : " ";
  let received = !show ? "active" : " ";
  console.log(sent, received);
  return (
    <div>
      <div className="tab-slider--nav">
        <ul className="tab-slider--tabs">
          <li
            className={`tab-slider--trigger ${sent}`}
            rel="tab1"
            onClick={() => {
              setShow(true);
            }}
          >
            Sent(15)
          </li>
          <li
            className={`tab-slider--trigger ${received}`}
            rel="tab2"
            onClick={() => {
              setShow(false);
            }}
          >
            Received
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Tabs;
