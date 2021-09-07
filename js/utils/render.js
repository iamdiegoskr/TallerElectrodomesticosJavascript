
export function renderFormGeneral(formData){
    let htmlForm = baseForm();

    formData.insertAdjacentHTML('beforeend',htmlForm);

}


export function renderFromFridge(formData){
    let htmlForm = baseForm();

    htmlForm+= `
    <br>
    <br>
    <label for="capacity">Ingrese la capacidad de la nevera en kilogramos :</label>
    <input type="number" id="capacity" name="capacity"><br><br>
    `;

    formData.insertAdjacentHTML('beforeend',htmlForm);
}

export function renderFormTv(formData){

    let htmlForm =  baseForm();

    htmlForm+=`
    <br>
    <br>
    <label for="inches">Ingrese las pulgadas del televisor:</label>
    <input type="number" id="inches" name="inches"><br><br>

    <label>Tiene tdt ?</label><br>
    <input type="radio" id="tdt" name="fav_language" value="1">
    <label for="tdt">Si tiene</label><br>
    <input type="radio" id="notdt" name="fav_language" value="2">
    <label for="notdt">No</label><br>

    `;

    formData.insertAdjacentHTML('beforeend',htmlForm);

}

function baseForm(){
    return `
    <label>Seleccione el origen del electrodomestico</label>
    <select name="comsuption" id="comsuption">
        <option value="A" id="a">A</option>
        <option value="B" id="b">B</option>
        <option value="C" id="c">C</option>
    </select>
    <br>
    <label>Seleccione el origen del electrodomestico</label>
    <select name="origin" id="origin">
        <option value="nacional" id='nacional'>Nacional</option>
        <option value="importado" id='importado'>Importado</option>
    </select>
    `;
}