"use client";

import styles from "./page.module.css";

export default function Home() {
  async function handleClick() {
    const type = "text/plain";
    const blob = new Blob(["https://google.com/probaj/"], { type });
    const data = [new ClipboardItem({ [type]: blob })];
    await navigator.clipboard.write(data);

    // await navigator.clipboard.writeText("https://gift.hydrogen.argent47.net/")
  }
  return (
    <div className={styles.wrapper}>
      {/*<button className={styles.button} onClick={handleClick}>Привет Ленни :)</button>*/}
      {navigator.userAgent}
    </div>
  );
}
