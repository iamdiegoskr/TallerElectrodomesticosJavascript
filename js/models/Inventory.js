import Fridge from "./Fridge.js";
import HomeAppliances from "./HomeAppliances.js";
import Tv from "./Tv.js";

export default class Inventory{

    constructor(){
        this.listAppliances = [];
        this.myInventory = [];
        this.initInventory();
    }

    addAppliances(appliances){
        this.listAppliances.push(appliances);
    }

    get getAllAppliances(){
        return this.listAppliances;
    }

    initInventory(){

        this.myInventory.push({tv: new HomeAppliances("b","nacional"),quantity:5});
        this.myInventory.push({tv: new Tv("a","nacional",60),quantity:20});
        this.myInventory.push({tv: new Tv("c","importado",60),quantity:7});
        this.myInventory.push({tv: new Tv("b","importado",60),quantity:13});
        this.myInventory.push({tv: new Tv("a","nacional",60),quantity:3});
        this.myInventory.push({fridge: new Fridge("a","nacional",120), quantity:10});
        this.myInventory.push({fridge: new HomeAppliances("a","importado"), quantity:8});
        this.myInventory.push({fridge: new Fridge("c","importado"), quantity:12});
        console.log(this.myInventory);
    }

}
