const STORAGE_KEY = "tasks";

export const storageAdapter = {
  load() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  },

  save(tasks) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    } catch {
      // fail silently (modo producción real)
    }
  },

  clear() {
    localStorage.removeItem(STORAGE_KEY);
  },
};
