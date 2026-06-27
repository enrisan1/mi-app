const STORAGE_KEY = "tasks";

export const taskStorage = {
  load() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  },

  save(tasks) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  },

  clear() {
    localStorage.removeItem(STORAGE_KEY);
  },
};
