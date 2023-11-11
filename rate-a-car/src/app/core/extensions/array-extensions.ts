Array.prototype.sortByKey = function(key: string): any[] {
  return this.sort((a, b) => a[key] > b[key] ? 1 : -1);
} 