import { IBaseItem } from "./base-item.interface";

export interface IItem extends IBaseItem {
    name: string;
    price: number;
}