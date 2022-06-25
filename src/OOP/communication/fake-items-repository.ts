import { ExcludeId, Repository } from "./repository";
import { IItem } from "../interface/item.interface";

export class FakeItemsRepository extends Repository<IItem> {
    private _items: IItem[] = [
        { id: 1, name: "Phone", price: 1000 },
        { id: 2, name: "MacBook", price: 3000 },
        { id: 3, name: "BMW", price: 10000 },
        { id: 4, name: "PC", price: 2500 },
    ];

    getItemById(id: string | number | IItem, query?: any): IItem | undefined {
        return this.items.find((val) => val.id === id);
    }

    createItem(
        item: ExcludeId<IItem>,
        options?: any,
        projectId?: number | undefined
    ): IItem {
        const items = this.items;
        const lastItem = this.items[this.items.length - 1];
        const createdItem: IItem = { ...item, id: lastItem?.id || 0 + 1 };
        items.push(createdItem);
        
        this.items = items;

        return createdItem;
    }

    updateItem(item: IItem, query?: any): IItem {
        const index = this.items.findIndex((val) => val.id === item.id);
        
        if (index < 0) {
            throw new Error("Item not found");
        }

        this.items[index] = item;
        return item;
    }

    deleteItem(id: string | number): boolean {
        const item = this.items.find((val) => val.id == id);

        if (item) {
            const items = this.items.filter((val) => val.id !== id);
            this.items = items;
            return true;
        } else return false;
    }

    getItems(params?: any): IItem[] {
        return this.items;
    }

    private get items(): IItem[] {
        return this._items;
    }

    private set items(items: IItem[]) {
        this._items = items;
    }
}
