import { Link } from "react-router-dom";
import styles from "./About.module.css";

const VALUES = [
  {
    emoji: "🔒",
    title: "Completely Anonymous",
    desc: "We never ask for your name, email, or any identifying information. Your story belongs to you.",
  },
  {
    emoji: "💜",
    title: "Judgment-Free",
    desc: "This is a space of radical acceptance. Whatever you share, you will be met with compassion.",
  },
  {
    emoji: "🌱",
    title: "Individual Support",
    desc: "Every story is read by our wellness coach. Responses and guidance are thoughtful and personal.",
  },
  {
    emoji: "🛡️",
    title: "Safe & Private",
    desc: "Your privacy is our top priority. Stories are shared only within the Gmutlie community.",
  },
];

const TOPICS = [
  "🌈 Identity & Coming Out",
  "🕊️ Faith & Spirituality",
  "🎯 Career & Future",
  "💪 Fears & Anxiety",
  "🤝 Family & Relationships",
  "🧠 Mental Health",
  "💬 Just Needing to Talk",
];

export default function About() {
  return (
    <main className={styles.page}>
      {/* Intro */}
      <section className={styles.intro}>
        <div className={styles.introInner}>
          <h1 className={styles.introHeading}>About Gmutlie</h1>
          <p className={styles.introText}>
            Gmutlie is a safe, anonymous platform built for teens and youth who
            need a place to breathe, to be heard, and to find support without
            fear of judgment. Whether you are figuring out who you are, facing
            family struggles, wrestling with your faith, or just carrying
            something heavy — this is your space.
          </p>
          <p className={styles.introText}>
            The name <strong>Gmutlie</strong> is about community and
            anonymity — a space where you can be fully yourself without
            revealing yourself.
          </p>
        </div>
      </section>

      {/* The Coach */}
      <section className={styles.coachSection}>
        <div className={styles.coachCard}>
          <div className={styles.coachAvatar}>🧑‍💻</div>
          <div className={styles.coachInfo}>
            <h2 className={styles.coachTitle}>Our Wellness Coach</h2>
            <p className={styles.coachDesc}>
              Gmutlie was built by a wellness coach who has a gift for
              understanding people — especially when they feel misunderstood.
              Every story shared here is read with care. If you need individual
              guidance, it is here for you, privately and anonymously.
            </p>
            <p className={styles.coachDesc}>
              &ldquo;My friends always said I was good at understanding people
              as long as I couldn&apos;t see them. So I built this — a place
              where being heard is enough.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={styles.section}>
        <h2 className={styles.sectionHeading}>Our Values</h2>
        <div className={styles.valuesGrid}>
          {VALUES.map((v) => (
            <div key={v.title} className={styles.valueCard}>
              <span className={styles.valueEmoji}>{v.emoji}</span>
              <h3 className={styles.valueTitle}>{v.title}</h3>
              <p className={styles.valueDesc}>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Topics */}
      <section className={`${styles.section} ${styles.topicsSection}`}>
        <h2 className={styles.sectionHeading}>What We Support</h2>
        <ul className={styles.topicsList}>
          {TOPICS.map((t) => (
            <li key={t} className={styles.topicItem}>
              {t}
            </li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <h2 className={styles.ctaHeading}>You matter. Your story matters.</h2>
        <Link to="/share" className={styles.ctaBtn}>
          Share Your Story 💜
        </Link>
      </section>
    </main>
  );
}
