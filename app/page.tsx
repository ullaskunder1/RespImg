import styles from "./page.module.css";
import RespImage from "@/Components/RespImage";
import { bigImg, smallImg } from "@/lib/assets";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* test */}
      <RespImage src={bigImg} alt="test" />

      {/* test we have div flex with two child image */}
      <div style={{display: "flex"}}>
        <div style={{border: "2px solid green"}}>
          <RespImage src={smallImg} alt="test" />
        </div>
        <div style={{border: "2px solid pink"}}>
          <RespImage src={smallImg} alt="test" />
        </div>
      </div>

      {/* test we have div flex with image and text card */}
      <div style={{display: "flex"}}>
        <div style={{border: "2px solid green"}}>
          <RespImage src={smallImg} alt="test" />
        </div>
        <div style={{border: "2px solid pink", padding: "2rem"}}>
          <h2>Lorem ipsum dolor sit amet.</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, perferendis?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, perferendis?</p>
        </div>
      </div>
    </main>
  );
}
