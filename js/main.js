import Fridge  from "./models/Fridge.js";
import Tv from "./models/Tv.js";
import HomeAppliances from "./models/HomeAppliances.js";

let content = document.querySelector(".section-content");
let list = document.querySelector(".list-content");
let priceTotalSpan = document.querySelector(".price-total");

let misELectrodomesticos = [];

let electrodomestico = new HomeAppliances("a","nacional")
misELectrodomesticos.push(electrodomestico)

let nevera = new Fridge("a","importado",140)
misELectrodomesticos.push(nevera)


let tv = new Tv("b","nacional",60,true);
misELectrodomesticos.push(tv)


misELectrodomesticos.forEach(product => console.log(product));


const renderList = ()=>{

    let count=0

    misELectrodomesticos.forEach((product)=>{

        count++;

        let productItem =
            `<li class='item-list'>
                <h3 class='title-product'>Electrodomestico ${count}</h3>
                <h4>${product.getNameHomeAppliances}</h4>
                <p>${product.description}</p>
                <p>Precio : <span> $ ${product.getPriceTotal}</span></p>
            </li>`;
        list.insertAdjacentHTML('beforeend', productItem);
    })

    priceTotalSpan.innerHTML = `$ ${totalAllProduces(misELectrodomesticos)}`;

}

const totalAllProduces = (ProductsCollection)=> {
    let total = 0;
    ProductsCollection.forEach((product)=>{
        total+= product.getPriceTotal;
    })

    return total;
}

renderList(misELectrodomesticos);