import { ICarModel } from "./ICarModel";

export interface ICarListResponse {
  carModels: ICarModel[];
  totalCount: number;
}
