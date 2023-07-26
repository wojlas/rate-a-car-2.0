export interface ICarModelGetFilter {
  pageSize: number;
  pageIndex: number;
  filtersInfo?: IFiltersInfo;
}

export interface IFiltersInfo {
  brandId: number;
  productionFrom: number;
  productionTo: number;
  avRate: number;
}