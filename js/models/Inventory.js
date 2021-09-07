import Tv from "./Tv.js";

export default class Inventory{

    constructor(){
        this.listAppliances = [];
    }

    addAppliances(appliances){
        this.listAppliances.push(appliances);
    }

    get getAllAppliances(){
        return this.listAppliances;
    }

}
