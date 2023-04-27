import * as modulosController from './modulo/controller.js';
//const chalk=require("chalk");
//import chalk from "chalk";


const sum = modulosController.suma(1,2);
console.log(sum);
const sum2 = modulosController.suma(4,5);
console.log(sum2);
const mul = modulosController.multiplica(sum,sum2)
console.log(mul);
//console.log(chalk.green(mul));