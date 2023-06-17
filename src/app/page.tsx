import styles from "./page.module.scss";
import CardContainer from "./containers/CardContainer/CardContainer";

export default function Home() {
  return (
    <main className={styles.Main}>
      <CardContainer />
    </main>
  );
}
