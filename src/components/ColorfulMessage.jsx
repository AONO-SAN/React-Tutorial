import React from "react";

const ColorfulMessage = (props) => {
  // 分割代入
  const { color, message } = props;
  const contentStyle = {
    color: color,
    fontSize: "18px"
  };
  return <p style={contentStyle}>{message}</p>;
};

export default ColorfulMessage;
