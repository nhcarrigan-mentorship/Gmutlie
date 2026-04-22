import { createContext, useContext, useReducer, useEffect } from "react";

const StoriesContext = createContext(null);

const ACTIONS = {
  ADD_STORY: "ADD_STORY",
  ADD_REACTION: "ADD_REACTION",
  LOAD_STORIES: "LOAD_STORIES",
};

const STORAGE_KEY = "gmutlie_stories";

function storiesReducer(state, action) {
  switch (action.type) {
    case ACTIONS.LOAD_STORIES:
      return action.payload;

    case ACTIONS.ADD_STORY: {
      const updated = [action.payload, ...state];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return updated;
    }

    case ACTIONS.ADD_REACTION: {
      const updated = state.map((story) =>
        story.id === action.payload.storyId
          ? {
              ...story,
              reactions: {
                ...story.reactions,
                [action.payload.type]:
                  (story.reactions[action.payload.type] || 0) + 1,
              },
            }
          : story
      );
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return updated;
    }

    default:
      return state;
  }
}

export function StoriesProvider({ children }) {
  const [stories, dispatch] = useReducer(storiesReducer, []);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        dispatch({ type: ACTIONS.LOAD_STORIES, payload: JSON.parse(saved) });
      } catch {
        // ignore corrupt data
      }
    }
  }, []);

  function addStory(storyData) {
    const story = {
      id: crypto.randomUUID(),
      ...storyData,
      createdAt: new Date().toISOString(),
      reactions: { heart: 0, hug: 0, strong: 0 },
    };
    dispatch({ type: ACTIONS.ADD_STORY, payload: story });
    return story;
  }

  function addReaction(storyId, type) {
    dispatch({ type: ACTIONS.ADD_REACTION, payload: { storyId, type } });
  }

  return (
    <StoriesContext.Provider value={{ stories, addStory, addReaction }}>
      {children}
    </StoriesContext.Provider>
  );
}

export function useStories() {
  const ctx = useContext(StoriesContext);
  if (!ctx) throw new Error("useStories must be used within StoriesProvider");
  return ctx;
}
