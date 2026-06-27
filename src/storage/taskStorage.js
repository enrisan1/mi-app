const KEY = "tasks";

export const taskStorage = {
  load() {
    const data = localStorage.getItem(KEY);
    return data ? JSON.parse(data) : [];
  },

  save(tasks) {
    localStorage.setItem(KEY, JSON.stringify(tasks));
  },

  clear() {
    localStorage.removeItem(KEY);
  },
};
