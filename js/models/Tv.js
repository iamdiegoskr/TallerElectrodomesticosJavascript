import HomeAppliances from "./HomeAppliances.js";

export default class Tv extends HomeAppliances{

    constructor(consumption,origin,inches,isTdt){
        super(consumption,origin);
        this.inches = inches;
        this.isTdt = isTdt;
    }

    get getInches(){
        return this.isTdt;
    }

    get getIsTdt(){
        return this.isTdt
    }

    get getPriceTotal(){

        let priceBase = super.getPriceBase();

        if(this.inches>40){
            priceBase = priceBase + priceBase*0.3;
        }
        if(this.isTdt){
            priceBase+= 250000;
        }

        return priceBase;

    }

}