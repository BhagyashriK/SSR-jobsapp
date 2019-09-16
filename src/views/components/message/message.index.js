import React from "react";
import { Wrapper } from "./message.style";

const Message = ({ message, type = "info" }) => {
  return <Wrapper type={type}>{message}</Wrapper>;
};

export default Message;
