import Fridge  from "./models/Fridge.js";
import Tv from "./models/Tv.js";
import HomeAppliances from "./models/HomeAppliances.js";
import { renderFormGeneral, renderFromFridge, renderFormTv } from "./utils/render.js";



const buttonSaveProduct = document.querySelector(".btn-save");
const formData = document.querySelector('#form-data')

let list = document.querySelector(".list-content");
let priceTotalSpan = document.querySelector(".price-total");

let radioGeneral = document.querySelector("#general");
let radioTv = document.querySelector("#tv");
let radioFridge = document.querySelector("#fridge");


buttonSaveProduct.addEventListener('click',()=>{
    saveProduct()
})


radioGeneral.addEventListener('change',changeRenderForm);
radioTv.addEventListener('change',changeRenderForm);
radioFridge.addEventListener('change',changeRenderForm);

function changeRenderForm(){

    clearForm(formData);

    if(radioGeneral.checked){
        renderFormGeneral(formData);
    }else if(radioFridge.checked){
        renderFromFridge(formData);
    }else{
        renderFormTv(formData);
    }
}

function clearForm(element){
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}


let misELectrodomesticos = [];

// let electrodomestico = new HomeAppliances("a","nacional")
// misELectrodomesticos.push(electrodomestico)

// let nevera = new Fridge("a","importado",140)
// misELectrodomesticos.push(nevera)


// let tv = new Tv("b","nacional",60,true);
// misELectrodomesticos.push(tv)

// let nevera2 = new Fridge("a","nacional",180);
// misELectrodomesticos.push(nevera2);


function saveProduct(){
    console.log("Enviando form")

}





//Renderizar la lista en la pantalla.
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


//Obtener el precio total de todos los productos
const totalAllProduces = (ProductsCollection)=> {
    let total = 0;
    ProductsCollection.forEach((product)=>{
        total+= product.getPriceTotal;
    })

    return total;
}

changeRenderForm();
renderList(misELectrodomesticos);