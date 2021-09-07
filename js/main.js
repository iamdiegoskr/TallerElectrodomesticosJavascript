import Fridge  from "./models/Fridge.js";
import Tv from "./models/Tv.js";
import HomeAppliances from "./models/HomeAppliances.js";
import { renderFormGeneral, renderFromFridge, renderFormTv } from "./utils/render.js";
import Inventory from "./models/Inventory.js";

const buttonSaveProduct = document.querySelector(".btn-save");
const formData = document.querySelector('#form-data')

let list = document.querySelector(".list-content");
let priceTotalSpan = document.querySelector(".price-total");

let radioGeneral = document.querySelector("#general");
let radioTv = document.querySelector("#tv");
let radioFridge = document.querySelector("#fridge");




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


//Productos agregados
let misELectrodomesticos = [];


function saveProduct(){

    if(radioGeneral.checked){
        registerGeneral();
    }else if(radioFridge.checked){
        registerFridge();
    }else{
        registerTv();
    }
}

function registerTv(){

    let consumption = getValueComsuption();
    let origin = getValueOrigin()

    let inches = document.getElementById("inches").value;

    let tdt = document.getElementById("tdt");

    let isTdt = (tdt.checked)?true:false;

    let tv = new Tv(consumption,origin,inches,isTdt);
    misELectrodomesticos.push(tv);

    renderList();

}

function registerFridge(){
    let consumption = getValueComsuption();
    let origin = getValueOrigin()
    let capacity = document.getElementById("capacity").value;

    let fridge = new Fridge(consumption, origin, capacity)
    misELectrodomesticos.push(fridge);

    renderList();

}

function registerGeneral(){

    let consumption = getValueComsuption();
    let origin = getValueOrigin();


    let appliances = new HomeAppliances(consumption,origin);
    misELectrodomesticos.push(appliances)

    renderList()

}

function getValueOrigin(){
    let national = document.getElementById("nacional");
    return (national.selected)? "nacional": "importado";
}

function getValueComsuption(){

    let consumptionA = document.getElementById("a");
    let consumptionB = document.getElementById("b");

    if(consumptionA.selected){
        return "A";
    }else if(consumptionB.selected){
        return "B";
    }else{
        return "C";
    }

}





//Renderizar la lista en la pantalla.
const renderList = ()=>{

    list.innerHTML = "";

    misELectrodomesticos.forEach((product, index)=>{

        let productItem =
            `<li class='item-list'>
                <h3 class='title-product'>Electrodomestico ${index+1}</h3>
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


buttonSaveProduct.addEventListener('click',saveProduct)
radioGeneral.addEventListener('change',changeRenderForm);
radioTv.addEventListener('change',changeRenderForm);
radioFridge.addEventListener('change',changeRenderForm);

changeRenderForm();
renderList(misELectrodomesticos);