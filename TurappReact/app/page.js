import styles from "./page.module.css";

const trails = [
  {
    name: "Gaustatoppen",
    region: "Telemark",
    distance: "8 km",
    duration: "4–5 hours",
    difficulty: "Moderate",
    style: "gausta",
  },
  {
    name: "Besseggen Ridge",
    region: "Jotunheimen",
    distance: "14 km",
    duration: "6–8 hours",
    difficulty: "Challenging",
    style: "besseggen",
  },
  {
    name: "Preikestolen",
    region: "Ryfylke",
    distance: "8 km",
    duration: "4 hours",
    difficulty: "Moderate",
    style: "preikestolen",
  },
];

const cabins = [
  { name: "Fjellro Cabin", region: "Jotunheimen", beds: "12 beds · Self-service" },
  { name: "Forest Edge Lodge", region: "Telemark", beds: "18 beds · Serviced" },
];

export default function Home() {
  return (
    <div className={styles.site}>
      <div className={styles.studentBanner}>
        Student project at the University of South-Eastern Norway (USN)
      </div>

      <header className={styles.header}>
        <a className={styles.brand} href="#top">
          <span aria-hidden="true">▲</span> TiU <small>TRAILS &amp; CABINS</small>
        </a>
        <nav aria-label="Main navigation">
          <a href="#trails">Trails</a>
          <a href="#cabins">Cabins</a>
          <a href="#about">About</a>
        </nav>
        <a className={styles.navCta} href="#trails">Explore trails ↗</a>
      </header>

      <main id="top">
        <section className={styles.hero}>
          <div>
            <p className={styles.eyebrow}>A little closer to the outdoors</p>
            <h1>Find your next way out there.</h1>
            <p className={styles.intro}>
              Fresh air, open trails and a warm cabin at the end of the day.
              Discover a new favorite place in Utopia.
            </p>
            <a className={styles.button} href="#trails">Explore trails <span>→</span></a>
          </div>
          <div
            className={styles.heroArt}
            role="img"
            aria-label="Illustration of a mountain lake at sunrise"
          >
            <span>THE GREAT OUTDOORS</span>
            <strong>Take the scenic route.</strong>
          </div>
        </section>

        <section className={styles.section} id="trails">
          <div className={styles.sectionTitle}>
            <div>
              <p className={styles.eyebrow}>Pick your pace</p>
              <h2>Popular trails</h2>
            </div>
            <p>Three good places to start your next adventure.</p>
          </div>
          <div className={styles.trailGrid}>
            {trails.map((trail) => (
              <article className={styles.trailCard} key={trail.name}>
                <div className={`${styles.trailArt} ${styles[trail.style]}`}>
                  <span>{trail.difficulty}</span>
                </div>
                <div className={styles.cardInfo}>
                  <p className={styles.location}>{trail.region}</p>
                  <h3>{trail.name}</h3>
                  <p>{trail.distance} <span>·</span> {trail.duration}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.cabins} id="cabins">
          <div>
            <p className={styles.eyebrow}>Stay a little longer</p>
            <h2>Find your place to pause.</h2>
            <p className={styles.intro}>
              Simple cabins and welcoming lodges make the journey part of the
              destination.
            </p>
          </div>
          <div className={styles.cabinList}>
            {cabins.map((cabin) => (
              <article className={styles.cabinCard} key={cabin.name}>
                <span className={styles.cabinIcon} aria-hidden="true">⌂</span>
                <div>
                  <p className={styles.location}>{cabin.region}</p>
                  <h3>{cabin.name}</h3>
                  <p>{cabin.beds}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className={styles.footer} id="about">
        <a className={styles.brand} href="#top"><span aria-hidden="true">▲</span> TiU</a>
        <p>Find your own way through the wild.</p>
        <small>Student project prototype · USN · 2025/2026</small>
      </footer>
    </div>
  );
}
