import { IIdAndName } from "./IIdAndName";

export interface ICarModel {
  brand: IIdAndName;
  id: number;
  name: string;
  production_from: number;
  production_to: number;
  rate: number;
  version: string;
  brandName?: string;
}
