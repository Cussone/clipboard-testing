"use client";

import styles from "./page.module.css";
import { useEffect } from "react";

export default function Home() {
  async function handleClick() {
    const type = "text/plain";
    const blob = new Blob(["https://gift.hydrogen.argent47.net/"], { type });
    const data = [new ClipboardItem({ [type]: blob })];
    await navigator.clipboard.write(data);

    // await navigator.clipboard.writeText("https://gift.hydrogen.argent47.net/")
  }
  return (
    <div className={styles.wrapper}>
      <button className={styles.button} onClick={handleClick}>Привет Ленни :)</button>
    </div>
  );
}
