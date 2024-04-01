import React, { CSSProperties, useState } from "react";

interface AdProps {
  flavor: string;
  fontSize: number;
  darkTheme: boolean;
}

export function Ad(props: AdProps) {
  const adStyle: CSSProperties = {
    color: props.darkTheme ? "white" : "black",
    backgroundColor: props.darkTheme ? "black" : "white",
    fontSize: `${props.fontSize}px`,
    margin: "10px 0",
    border: "1px solid gray",
    textAlign: "center",
  };
  return (
    <div style={adStyle}>
      <p>Try our {props.flavor} ice cream!</p>
    </div>
  );
}
