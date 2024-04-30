import Image from "next/image";
import styles from "./respImage.module.css";

export default function RespImage({ src, alt }: any) {
  return (
    <div style={{overflow: "hidden", display: "flex", minHeight: "340px", height: "100%"}}>
      <Image
        style={{ width: "100%", height: "auto"}}
        src={src}
        alt={alt}
        width={0}
        height={0}
        sizes="1000vw"
      />
    </div>
  );
}
