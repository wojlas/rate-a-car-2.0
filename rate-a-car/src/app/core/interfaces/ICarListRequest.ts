import { ICarModelListRequestFilters } from "./ICarListRequestFilters";

export interface ICarModelListRequest {
  pageSize: number;
  pageIndex: number;
  filters: ICarModelListRequestFilters;
}
