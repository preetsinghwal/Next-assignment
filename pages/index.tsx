import { useSession, signIn, signOut } from "next-auth/react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const { data: session, status } = useSession();
  if (status === "loading") {
    return <p>Loading...</p>;
  }
  if (!session) {
    return (
        <div style={{ padding: "2rem" }}>
          <h1>You are not signed in</h1>
          <button onClick={() => signIn("google")} className={styles.login}>Sign in with Google</button>
        </div>
    );
  }
  return (
      <div style={{ padding: "2rem" }}>
        <h1>Welcome, {session.user?.name}</h1>
        <img src={session.user?.image ?? ""} alt="avatar" width={50} />
        <p>Email: {session.user?.email}</p>
        <button onClick={() => signOut()}>Sign out</button>
      </div>
  );
}