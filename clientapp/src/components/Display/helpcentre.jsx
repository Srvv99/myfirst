import React, { useState } from "react";


const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p style={{ color: "white",fontFamily: "serif" }}>
      {isReadMore ? text.slice(0, 150) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "...read more" : " ...show less"}
      </span>
    </p>
  );
};

const Helpcentre = () => {
  return (
    <div style={{padding:"15px"}}>
      <h2>
        <ReadMore>
          This is a demo React Dashboard created with react.js along with other liabraries like react-router-dom,recharts,material UI icons.
          It contains widgets,dynamic charts,sliding sidebar.
          This is a practice app to demonstrate react functionalities and basic layout design.
        </ReadMore>
      </h2>
    </div>
  );
};

export default Helpcentre;

