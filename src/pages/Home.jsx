import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import { CATEGORIES } from "../utils";

const HOW_IT_WORKS = [
  {
    step: "1",
    title: "Write It Out",
    desc: "Share what's weighing on your heart — no name needed, no judgment, just your words.",
  },
  {
    step: "2",
    title: "Stay Anonymous",
    desc: "Your identity is never revealed. You are just a voice and that voice matters.",
  },
  {
    step: "3",
    title: "Get Support",
    desc: "The community sends love, and our wellness coach reviews stories to offer guidance.",
  },
];

export default function Home() {
  return (
    <main className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.heroEyebrow}>A safe space for you 💜</p>
          <h1 className={styles.heroHeading}>
            Whatever you&apos;re going through,
            <br />
            <span className={styles.heroAccent}>you don&apos;t have to face it alone.</span>
          </h1>
          <p className={styles.heroSub}>
            Gmutlie is a private, anonymous community where teens and youth can
            pour out their hearts, find understanding, and receive real,
            individual support.
          </p>
          <div className={styles.heroCtas}>
            <Link to="/share" className={styles.ctaPrimary}>
              Share Your Story
            </Link>
            <Link to="/stories" className={styles.ctaSecondary}>
              Read Stories
            </Link>
          </div>
        </div>
        <div className={styles.heroArt} aria-hidden="true">
          <span>💜</span>
        </div>
      </section>

      {/* Categories */}
      <section className={styles.section}>
        <h2 className={styles.sectionHeading}>We&apos;re here for all of it</h2>
        <p className={styles.sectionSub}>
          Whatever you&apos;re navigating — we&apos;ve got you.
        </p>
        <div className={styles.categoryGrid}>
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              to={`/stories?category=${cat.id}`}
              className={styles.categoryCard}
            >
              <span className={styles.categoryEmoji}>{cat.emoji}</span>
              <span className={styles.categoryLabel}>{cat.label}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className={`${styles.section} ${styles.howSection}`}>
        <h2 className={styles.sectionHeading}>How it works</h2>
        <div className={styles.stepsGrid}>
          {HOW_IT_WORKS.map((item) => (
            <div key={item.step} className={styles.step}>
              <div className={styles.stepNum}>{item.step}</div>
              <h3 className={styles.stepTitle}>{item.title}</h3>
              <p className={styles.stepDesc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <h2 className={styles.ctaHeading}>Ready to let it out?</h2>
        <p className={styles.ctaSub}>
          Thousands of stories shared. Every one of them mattered.
        </p>
        <Link to="/share" className={styles.ctaPrimary}>
          Share Anonymously →
        </Link>
      </section>
    </main>
  );
}
