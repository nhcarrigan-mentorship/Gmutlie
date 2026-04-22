export const CATEGORIES = [
  { id: "identity", label: "Identity & Coming Out", emoji: "🌈" },
  { id: "faith", label: "Faith & Spirituality", emoji: "🕊️" },
  { id: "career", label: "Career & Future", emoji: "🎯" },
  { id: "fears", label: "Fears & Anxiety", emoji: "💪" },
  { id: "family", label: "Family & Relationships", emoji: "🤝" },
  { id: "mental-health", label: "Mental Health", emoji: "🧠" },
  { id: "general", label: "Just Need to Talk", emoji: "💬" },
];

export function getCategoryById(id) {
  return CATEGORIES.find((c) => c.id === id) || CATEGORIES[CATEGORIES.length - 1];
}

export function timeAgo(isoString) {
  const now = Date.now();
  const then = new Date(isoString).getTime();
  const diffMs = now - then;

  const minutes = Math.floor(diffMs / 60000);
  const hours = Math.floor(diffMs / 3600000);
  const days = Math.floor(diffMs / 86400000);

  if (minutes < 1) return "just now";
  if (minutes < 60) return `${minutes}m ago`;
  if (hours < 24) return `${hours}h ago`;
  return `${days}d ago`;
}
