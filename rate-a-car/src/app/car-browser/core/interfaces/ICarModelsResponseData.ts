import { ICarModel } from "src/app/core/interfaces";

export interface ICarModelsResponseData {
  carModels: ICarModel[];
  totalCount: number;
}