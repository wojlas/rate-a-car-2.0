export {};

declare global {
  interface Array<T> {
    sortByKey(key: string): unknown[];
  }
}