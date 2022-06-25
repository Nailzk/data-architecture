import { FakeItemsRepository } from "./communication/fake-items-repository";

const repository = new FakeItemsRepository();

let items = repository.getItems();

console.log('Items:');
console.log(items);

repository.deleteItem(1);
items = repository.getItems();

console.log('Delete:');
console.log(items);

repository.createItem({ name: "Monitor", price: 200 });
items = repository.getItems();

console.log('Create:');
console.log(items);

const updatedItem = repository.updateItem({ name: "PlayStation", price: 800, id: 3 });

console.log('Update:');
console.log(updatedItem);

const item = repository.getItemById(3)
console.log('Get Item By Id:');
console.log(item);
