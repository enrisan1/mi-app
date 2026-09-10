const KEY = "ru2m1.previous";
const RETAINED_KEY = "ru2m1.retained";

export const localStorageResumeRepository = {
  savePrevious(value: string): void {
    localStorage.setItem(KEY, value);
  },

  loadPrevious(): string | null {
    return localStorage.getItem(KEY);
  },

  saveRetained(value: string): void {
    localStorage.setItem(RETAINED_KEY, value);
  },

  loadRetained(): string | null {
    return localStorage.getItem(RETAINED_KEY);
  },
};
