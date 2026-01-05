const STORAGE_KEY = "page_hierarchy_history";

export function saveToStorage(newData: any) {
  const existing = localStorage.getItem(STORAGE_KEY);
  const parsed = existing ? JSON.parse(existing) : [];

  parsed.push(newData);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed));
}

export function loadFromStorage() {
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved ? JSON.parse(saved) : [];
}
