export {};

declare global {
  interface Array<T> {
    sortByKey(key: string): T[];
    lastElement(): T;
  }
}