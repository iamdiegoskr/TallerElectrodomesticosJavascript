class HomeApliances{

    constructor(consumption,origin){
        this.consumption = consumption;
        this.origin = origin;
    }

    get  getPriceOrigin(){
        return (this.origin=="nacional")? 250000 : 350000;
    }

    get  getPriceConsumption(){
        switch(this.consumption){
            case 'A':
                return 450000;
            case 'B':
                return 350000;
            case 'C':
                return 250000;
            default:
                return 0
        }
    }

}