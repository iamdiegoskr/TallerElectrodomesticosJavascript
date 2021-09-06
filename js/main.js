import Fridge  from "./models/Fridge.js";
import Tv from "./models/Tv.js";
import HomeAppliances from "./models/HomeAppliances.js";

let content = document.querySelector(".section-content");
let list = document.querySelector(".list-content");

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
                <h2 class='title-product'>Electrodomestico ${count}</h2>
                <h3>${product.getNameHomeAppliances}</h3>
                <p>${product.description}</p>
                <p>Precio : <span> $ ${product.getPriceTotal}</span></p>
            </li>`;
        list.insertAdjacentHTML('beforeend', productItem);
    })


}

renderList(misELectrodomesticos);