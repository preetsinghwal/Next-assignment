import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Welcome to My Full-Stack Next.js Project</h1>
      <p>This homepage is statically generated (SSG).</p>
      <div className={styles.btnWrapper}>
        <a href="/login" className={styles.login}>
          Go to Login
        </a>{" "}
        |{" "}
        <a href="/new-features/server-fetch" className={styles.newFeature}>
          New Features
        </a>
      </div>
    </div>
  );
}
