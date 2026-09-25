import clsx from "clsx";
import styles from "./Home.module.css";
export default function Home() {

  const isActive= true;
  return (
    <div>
    <h1
      className={clsx(
        "text-4xl",
        isActive && "font-bold text-blue-500"
      )}
    >
      Hellow Next.js</h1>
    <h1>Start Learning </h1>
    <h1>New Concept </h1>
    </div>
  );
}
