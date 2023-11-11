import { IIdAndName } from "src/app/core/interfaces";

export interface ICarModel {
    id: number;
    name: string;
    version: string;
    rate: number;
    brand: IIdAndName;
    productionFrom: number;
    productionTo: number;
}
