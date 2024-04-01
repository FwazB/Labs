import React, { useState } from "react";
import styles from "../css/counter.module.css";

interface Header {
  user: string;
}

export function Header({ user }: Header) {
  return (
    <header className={styles.header}>
      <h1>ICE CREAM WARS</h1>
      <span>{user}</span>
    </header>
  );
}
