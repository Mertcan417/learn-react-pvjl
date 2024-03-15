import Head from "next/head";
import Image from "next/image";
import ExampleComponent from "./ExampleComponent.js";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <ExampleComponent />
    </div>
  );
}
