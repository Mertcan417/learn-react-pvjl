import ExampleComponent from "./ExampleComponent.js";
import styles from "../styles/index.module.css" 
export default function Home() {

  const randomUser = {name : "Vito Scalletta", age: 23, country: "Italy"} 
  return (
    
    <div className={styles.home}>
      <ExampleComponent />
      <h1>random userdata</h1>
      <ul>
      <li>{randomUser.name}</li>
      <li>{randomUser.age}</li>
      <li>{randomUser.country}</li>
      </ul>
      <button> I'm a button</button>
    </div>

  );
}
