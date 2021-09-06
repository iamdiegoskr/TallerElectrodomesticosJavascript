import HomeAppliances from "./HomeAppliances.js";

export default class Fridge extends HomeAppliances{

    constructor(consumption,origin,capacity){
        super(consumption,origin);
        this.capacity = capacity;
    }

    get getCapacity(){
        return this.capacity;
    }

    get getPriceTotal(){

        let priceBase = super.getPriceBase();

        if(this.capacity>120){

            let extraCapacity = this.capacity-120;  // 140-120 Litros -> 20 Litros extra
            let amountIncrease = extraCapacity/10; // 20/10 -> 2

            let surplusPriceToPay = 0;

            if(amountIncrease>=1){
                surplusPriceToPay = amountIncrease*(priceBase*0.05);
            }
            priceBase+=surplusPriceToPay;
        }
        return priceBase;
    }

}