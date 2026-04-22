import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStories } from "../context/StoriesContext";
import { CATEGORIES } from "../utils";
import styles from "./ShareStory.module.css";

export default function ShareStory() {
  const navigate = useNavigate();
  const { addStory } = useStories();

  const [form, setForm] = useState({
    title: "",
    category: "",
    body: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function validate() {
    const errs = {};
    if (!form.category) errs.category = "Please choose a category.";
    if (!form.body.trim()) errs.body = "Please write something — even a few words.";
    if (form.body.trim().length < 10)
      errs.body = "Please share a bit more — at least 10 characters.";
    return errs;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    addStory({
      title: form.title.trim() || "",
      category: form.category,
      body: form.body.trim(),
    });
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <main className={styles.page}>
        <div className={styles.successBox}>
          <div className={styles.successIcon}>💜</div>
          <h2 className={styles.successTitle}>Thank you for sharing.</h2>
          <p className={styles.successDesc}>
            Your story has been posted anonymously. You are brave for speaking
            up, and you matter more than you know.
          </p>
          <div className={styles.successActions}>
            <button
              className={styles.btnPrimary}
              onClick={() => navigate("/stories")}
            >
              Read Other Stories
            </button>
            <button
              className={styles.btnSecondary}
              onClick={() => {
                setForm({ title: "", category: "", body: "" });
                setErrors({});
                setSubmitted(false);
              }}
            >
              Share Another
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className={styles.page}>
      <div className={styles.formWrap}>
        <div className={styles.formHeader}>
          <h1 className={styles.heading}>Share Your Story</h1>
          <p className={styles.sub}>
            This is your safe space. No name. No judgment. Just you and your
            truth. Write as much or as little as you like.
          </p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          {/* Category */}
          <div className={styles.fieldGroup}>
            <label className={styles.label} htmlFor="category">
              What is this about?{" "}
              <span className={styles.required}>*</span>
            </label>
            <div className={styles.categoryGrid}>
              {CATEGORIES.map((cat) => (
                <label
                  key={cat.id}
                  className={`${styles.categoryOpt} ${
                    form.category === cat.id ? styles.categoryOptSelected : ""
                  }`}
                >
                  <input
                    type="radio"
                    name="category"
                    value={cat.id}
                    checked={form.category === cat.id}
                    onChange={handleChange}
                    className={styles.hiddenRadio}
                  />
                  <span className={styles.catEmoji}>{cat.emoji}</span>
                  <span className={styles.catLabel}>{cat.label}</span>
                </label>
              ))}
            </div>
            {errors.category && (
              <p className={styles.error}>{errors.category}</p>
            )}
          </div>

          {/* Optional title */}
          <div className={styles.fieldGroup}>
            <label className={styles.label} htmlFor="title">
              Give it a title{" "}
              <span className={styles.optional}>(optional)</span>
            </label>
            <input
              id="title"
              name="title"
              type="text"
              className={styles.input}
              placeholder="e.g. I don't know who I am anymore..."
              value={form.title}
              onChange={handleChange}
              maxLength={100}
            />
          </div>

          {/* Body */}
          <div className={styles.fieldGroup}>
            <label className={styles.label} htmlFor="body">
              Your story <span className={styles.required}>*</span>
            </label>
            <textarea
              id="body"
              name="body"
              className={`${styles.textarea} ${errors.body ? styles.inputError : ""}`}
              placeholder="Start typing... this is your space. No one knows it's you."
              rows={8}
              value={form.body}
              onChange={handleChange}
              maxLength={3000}
            />
            <div className={styles.charCount}>
              {form.body.length} / 3000
            </div>
            {errors.body && (
              <p className={styles.error}>{errors.body}</p>
            )}
          </div>

          <div className={styles.anonymousNote}>
            🔒 Your story will be posted <strong>completely anonymously</strong>
            . We never collect names or personal information.
          </div>

          <button type="submit" className={styles.submitBtn}>
            Share Anonymously 💜
          </button>
        </form>
      </div>
    </main>
  );
}
