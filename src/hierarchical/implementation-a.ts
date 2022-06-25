import { IImplementation } from "./interface";

export class ImplementationA implements IImplementation {
    public operationImplementation(): string {
        return "ConcreteImplementationA: Here's the result on the platform A.";
    }
}