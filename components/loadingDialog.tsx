import styles from "./loadingDialog.module.css";

export default function LoadingDialog() {
  return (
    <div className={styles.container}>
      <div className={styles.spinner}></div>
    </div>
  );
}
