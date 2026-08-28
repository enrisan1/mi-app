const X_KEY = "rdx1m1.x";
const Y_KEY = "rdx1m1.y";

export const localStorageDxRepository = {
  saveX(value: string): void {
    localStorage.setItem(X_KEY, value);
  },

  loadX(): string | null {
    return localStorage.getItem(X_KEY);
  },

  removeX(): void {
    localStorage.removeItem(X_KEY);
  },

  saveY(value: string): void {
    localStorage.setItem(Y_KEY, value);
  },

  loadY(): string | null {
    return localStorage.getItem(Y_KEY);
  },
};
