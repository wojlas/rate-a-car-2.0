import { IIdAndName } from "src/app/core/interfaces";

export interface ICarDetails {
  brand: IIdAndName;
  id: number;
  name: string;
  productionFrom: number;
  productionTo: number;
  rate: number;
  version: string;
}