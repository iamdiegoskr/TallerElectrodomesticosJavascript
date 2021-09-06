import HomeAppliances from "./HomeAppliances";

class Fridge extends HomeAppliances{

    constructor(consumption,origin,capacity){
        super(consumption,origin);
        this.capacity = capacity;
    }


}