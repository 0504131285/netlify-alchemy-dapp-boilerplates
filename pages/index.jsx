import styles from "../styles/Home.module.css";
import InstructionsComponent from "../components/InstructionsComponent.jsx";

export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        <InstructionsComponent></InstructionsComponent>
      </main>
    </div>
  );
}
