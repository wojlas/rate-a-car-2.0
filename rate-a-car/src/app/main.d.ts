export {};

declare global {
  interface Array<T> {
    sortByKey(key: string): Array<T>;
  }

  interface Array<T> {
    lastElement(): T;
  }
}
