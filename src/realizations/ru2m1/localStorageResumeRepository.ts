const KEY = "ru2m1.previous";

export const localStorageResumeRepository = {
  savePrevious(value: string): void {
    localStorage.setItem(KEY, value);
  },

  loadPrevious(): string | null {
    return localStorage.getItem(KEY);
  },
};
