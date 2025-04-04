import styles from "./Homepage.module.css";
import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";

export default function Homepage() {
  return (
    <main className={styles.homepage}>
      <PageNav/>
      <section>
        <h1>
          You travel the world.
          <br />
          Map Tracker keeps track of your adventures.
        </h1>
        <h2>
          From the streets of Lagos to the roads of London, Map Tracker follows every step you take. Relive your travel moments, share your journey with pride, and never guess where you've been again.
          Your steps, your story, all in one map.
        </h2>
        
        <Link to="/app" className="cta">Start Tracking</Link>
      </section>

    </main>
  );
}
