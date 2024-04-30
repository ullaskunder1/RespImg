import Image from "next/image";
import styles from "./page.module.css";
import RespImage from "@/Components/RespImage";
import { bigImg } from "@/lib/assets";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
        </p>
      </div>

      <RespImage src={bigImg} />

    </main>
  );
}
