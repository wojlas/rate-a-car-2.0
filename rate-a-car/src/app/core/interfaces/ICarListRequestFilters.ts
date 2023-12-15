export interface ICarModelListRequestFilters {
  searchTerm: string;
  productionFrom?: number;
  productionTo?: number;
  rateFrom?: number;
  rateTo?: number;
  brandIds: number[];
}
