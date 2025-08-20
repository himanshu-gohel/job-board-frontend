"use client";
import { useSyncExternalStore } from "react";
import { saveToken, clearToken, getToken } from "./auth";

let tokenCache = null;

// stable cached object
let cachedSnapshot = { authed: false };
const serverSnapshot = { authed: false };

const store = {
  listeners: new Set(),

  init() {
    tokenCache = getToken();
    cachedSnapshot = { authed: !!tokenCache }; // initialize correctly
  },

  subscribe(fn) {
    this.listeners.add(fn);
    return () => this.listeners.delete(fn);
  },

  getSnapshot() {
    const authed = !!tokenCache;
    if (cachedSnapshot.authed !== authed) {
      cachedSnapshot = { authed }; // only recreate when value changes
    }
    return cachedSnapshot;
  },

  getServerSnapshot() {
    return serverSnapshot; // always stable
  },

  login(t) {
    saveToken(t);
    tokenCache = t;
    this.emit();
  },

  logout() {
    clearToken();
    tokenCache = null;
    this.emit();
  },

  emit() {
    for (const fn of this.listeners) fn();
  },
};

store.init();

export function useAuth() {
  const snapshot = useSyncExternalStore(
    (cb) => store.subscribe(cb),
    () => store.getSnapshot(),
    () => store.getServerSnapshot()
  );

  return {
    authed: snapshot.authed,
    login: (t) => store.login(t),
    logout: () => store.logout(),
  };
}
