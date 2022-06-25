import { IImplementation } from "./interface";

export class ImplementationB implements IImplementation {
    public operationImplementation(): string {
        return "ConcreteImplementationB: Here's the result on the platform B.";
    }
}