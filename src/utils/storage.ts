export enum StorageToken {
  Token = 'okta-token-storage',
}

export function getStoredValue<T>(key: StorageToken): T | null {
  const obj = localStorage.getItem(key);
  return obj ? (JSON.parse(obj) as T) : null;
}

export function setStoredValue<T>(key: StorageToken, obj: T) {
  localStorage.setItem(key, JSON.stringify(obj));
}
