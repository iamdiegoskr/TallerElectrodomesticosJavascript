export default class HomeAppliances{

    constructor(consumption,origin){
        this.consumption = consumption;
        this.origin = origin;
        this.price = this.getPriceTotal;
    }

    getPriceOrigin(){
        return (this.origin=="nacional")? 250000 : 350000;
    }


    getPriceConsumption(){
        switch(this.consumption.toUpperCase()){
            case 'A':
                return 450000;
            case 'B':
                return 350000;
            case 'C':
                return 250000;
            default:
                return 0;
        }
    }

    getPriceBase(){
        return this.getPriceOrigin() + this.getPriceConsumption();
    }

    get getPriceTotal(){
        return this.getPriceBase();
    }

    get getNameHomeAppliances(){
        return "Electrodomestico general"
    }

    get description(){
        return `${this.getNameHomeAppliances} -> 
            Origen : ${this.origin}
            Tipo consumo : ${this.consumption}`
    }


}