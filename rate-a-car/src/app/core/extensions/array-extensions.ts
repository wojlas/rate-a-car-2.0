export {};
Array.prototype.sortByKey = function(key: string): unknown[] {
  return this.sort((a, b) => a[key] > b[key] ? 1 : -1);
}

Array.prototype.lastElement = function(): unknown {
  return this[this.length - 1];
}