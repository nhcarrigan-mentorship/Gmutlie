import { useState, useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { useStories } from "../context/StoriesContext";
import StoryCard from "../components/StoryCard";
import { CATEGORIES } from "../utils";
import styles from "./Stories.module.css";

export default function Stories() {
  const { stories } = useStories();
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState("");

  const activeCategory = searchParams.get("category") || "all";

  const filtered = useMemo(() => {
    return stories.filter((s) => {
      const matchCat = activeCategory === "all" || s.category === activeCategory;
      const matchSearch =
        !search.trim() ||
        s.body.toLowerCase().includes(search.toLowerCase()) ||
        s.title?.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [stories, activeCategory, search]);

  function setCategory(id) {
    if (id === "all") {
      setSearchParams({});
    } else {
      setSearchParams({ category: id });
    }
  }

  return (
    <main className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.heading}>Stories</h1>
        <p className={styles.sub}>
          Anonymous voices, real experiences. You are not alone in what you
          feel.
        </p>
      </div>

      <div className={styles.controls}>
        {/* Search */}
        <input
          type="search"
          className={styles.searchInput}
          placeholder="Search stories..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Search stories"
        />

        {/* Category filter */}
        <div className={styles.filters}>
          <button
            className={`${styles.filterBtn} ${
              activeCategory === "all" ? styles.filterActive : ""
            }`}
            onClick={() => setCategory("all")}
          >
            All
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              className={`${styles.filterBtn} ${
                activeCategory === cat.id ? styles.filterActive : ""
              }`}
              onClick={() => setCategory(cat.id)}
            >
              {cat.emoji} {cat.label}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className={styles.empty}>
          <p className={styles.emptyText}>
            {stories.length === 0
              ? "No stories yet — be the first to share. 💜"
              : "No stories match your filter. Try a different category."}
          </p>
          <Link to="/share" className={styles.shareLink}>
            Share the first story →
          </Link>
        </div>
      ) : (
        <div className={styles.grid}>
          {filtered.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>
      )}
    </main>
  );
}
