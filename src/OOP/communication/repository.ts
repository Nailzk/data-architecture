import { IBaseItem } from "../interface/base-item.interface";

export type ExcludeId<T> = {
    [P in Exclude<keyof T, keyof IBaseItem>]: T[P];
};

export abstract class Repository<T extends IBaseItem = any> {
    abstract getItemById(id: number | string | T, query?: any): T | undefined;

    abstract createItem(
        item: ExcludeId<T>,
        options?: any,
        projectId?: number
    ): T;

    abstract updateItem(item: T, query?: any): T;

    abstract deleteItem(id: number | string | T): boolean;

    abstract getItems(params?: any): Array<T>;

    getItemsByIds(ids: number[] | string[]): Array<T> {
        throw new Error(`Implement getItemsByIds for `);
    }

    deleteMany(params: any): boolean[] {
        throw new Error("Please implement deleteMany");
    }

    patchItem(item: Partial<T>, field?: string): Partial<T> {
        throw new Error(`Implement patchItem`);
    }
}
