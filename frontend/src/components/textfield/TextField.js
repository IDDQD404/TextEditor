import React from "react";
import "./TextField.scss";

export default function TextField() {
  return (
    <div className="TextField">
      <textarea type={"text"} placeholder={"Write here any text..."}></textarea>
    </div>
  );
}
