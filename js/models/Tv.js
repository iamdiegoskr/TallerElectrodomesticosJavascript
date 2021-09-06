import HomeAppliances from "./HomeAppliances.js";

export default class Tv extends HomeAppliances{

    constructor(consumption,origin,inches,isTdt){
        super(consumption,origin);
        this.inches = inches;
        this.isTdt = isTdt;
        this.price = this.getPriceTotal;
    }

    get getInches(){
        return this.isTdt;
    }

    get getIsTdt(){
        return this.isTdt
    }

    getResponseTdt(){
        return (this.isTdt)?"SI":"NO";
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


    get getNameHomeAppliances(){
        return "Televisor";
    }

    get description(){
        return `${this.getNameHomeAppliances} ->
            Origen : ${this.origin}
            Tipo consumo : ${this.consumption}
            Pulgadas : ${this.inches}
            Tiene tdt ? ${this.getResponseTdt()}`
    }

}