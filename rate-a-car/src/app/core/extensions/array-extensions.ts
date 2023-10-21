Array.prototype.sortByKey = function(key: string): unknown[] {
  return this.sort((a, b) => a[key] > b[key] ? -1 : 1);
} 