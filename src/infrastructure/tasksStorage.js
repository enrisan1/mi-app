const KEY = "tasks";

export const tasksStorage = {
  load() {
    try {
      const raw = localStorage.getItem(KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  },

  save(state) {
    localStorage.setItem(KEY, JSON.stringify(state));
  },

  clear() {
    localStorage.removeItem(KEY);
  },
};
