import chalk from  "chalk";

import { spongeMock } from "spongemock";

var weclomeMessage  = function(name:string){
    return 'Hello ' + name + " Welcome to Type script";
}

console.log(weclomeMessage("Bilal"))

console.log(chalk.blue(spongeMock(weclomeMessage("hbilal"))+ chalk.red('!')));
