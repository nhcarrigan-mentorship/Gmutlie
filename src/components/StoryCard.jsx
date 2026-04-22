import { useStories } from "../context/StoriesContext";
import { getCategoryById, timeAgo } from "../utils";
import styles from "./StoryCard.module.css";

const REACTIONS = [
  { type: "heart", emoji: "❤️", label: "Love" },
  { type: "hug", emoji: "🤗", label: "Hug" },
  { type: "strong", emoji: "💪", label: "Stay Strong" },
];

export default function StoryCard({ story }) {
  const { addReaction } = useStories();
  const category = getCategoryById(story.category);

  function handleReaction(type) {
    addReaction(story.id, type);
  }

  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <span className={styles.category}>
          {category.emoji} {category.label}
        </span>
        <span className={styles.time}>{timeAgo(story.createdAt)}</span>
      </div>

      {story.title && <h3 className={styles.title}>{story.title}</h3>}

      <p className={styles.body}>{story.body}</p>

      <div className={styles.reactions}>
        {REACTIONS.map((r) => (
          <button
            key={r.type}
            className={styles.reactionBtn}
            onClick={() => handleReaction(r.type)}
            aria-label={`Send ${r.label}`}
            title={r.label}
          >
            <span className={styles.reactionEmoji}>{r.emoji}</span>
            <span className={styles.reactionCount}>
              {story.reactions[r.type] || 0}
            </span>
          </button>
        ))}
      </div>
    </article>
  );
}
