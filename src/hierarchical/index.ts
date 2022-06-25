import { Abstraction } from "./abstraction";
import { ExtendedAbstraction } from "./extended-abstraction";
import { ImplementationA } from "./implementation-a";
import { ImplementationB } from "./implementation-b";

function logAbstraction(abstraction: Abstraction) {
    console.log(abstraction.operation());
}

let implementation = new ImplementationA();
let abstraction = new Abstraction(implementation);
logAbstraction(abstraction);

implementation = new ImplementationB();
abstraction = new ExtendedAbstraction(implementation);
logAbstraction(abstraction);
