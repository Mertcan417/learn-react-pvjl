import ExampleComponent from "./ExampleComponent.js";
import styles from "../styles/index.module.css" 
export default function Home() {
  return (
    <div className={styles.home}>
      <ExampleComponent />
      <button> I'm a button</button>
    </div>

  );
}
