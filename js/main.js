import Fridge  from "./models/Fridge.js";
import HomeAppliances from "./models/HomeAppliances.js";


let electrodomestico = new HomeAppliances("a","nacional")
console.log(electrodomestico.getPriceTotal);


let electrodomestico2 = new Fridge("a","importado",140)
console.log(electrodomestico2.getPriceTotal);