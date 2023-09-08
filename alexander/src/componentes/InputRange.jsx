import styles from "@/styles/Home.module.css";

export default function InputRange({ num, total }) {
  return (
    <div className={styles.box_input}>
      <input type="range" color={"black"} value={num} max="4" class="" />
      <div>
        {num} / {total}
      </div>
    </div>
  );
}
