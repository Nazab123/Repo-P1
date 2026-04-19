/* ⭐⭐Para elaborar galletas se necesita 1 taza de azúcar, 100 gr. de harina, 1 cucharada de aceite y una taza de agua. Pedirle al usuario ingreso de cantidad de cada ingrediente disponible e informarle cuantas recetas de galletas podrá elaborar.
Se debe tener en cuenta que se podrán hacer tantas recetas como las que permita el ingrediente que esté en menor cantidad.
 */
let calcular = document.querySelector("#btnCalcular")
calcular.addEventListener("click", function () {
    let respuesta = ""
    let resultado = document.querySelector("#pResultado")
    let azucar = document.querySelector("#numAzucar").value
    let harina = document.querySelector("#numHarina").value
    let aceite = document.querySelector("#numAceite").value
    let agua = document.querySelector("#numAgua").value

    let nAzucar = Number(azucar)
    let nHarina = Number(harina)
    let HarinaNum = nHarina/100
    let nAceite = Number(aceite)
    let nAgua = Number(agua)

    let receta = Number.MAX_SAFE_INTEGER


    if (azucar === ""|| isNaN(nAzucar)||harina === ""|| isNaN(HarinaNum)||aceite === ""|| isNaN(nAceite)|| agua === ""|| isNaN(nAgua)){ respuesta = "verifique que ningun valor este vacio y sean numeros"
        
    }else if( nAzucar < receta){ 
        receta = nAgua

        if (HarinaNum < receta){
        receta = HarinaNum

        } 
        if(nAceite < receta){
        receta = nAceite
        }
    }
respuesta = `se pueden hacer ${receta}`


resultado.innerHTML = respuesta
    
})

/*  <label>Azucar (tazas)</label>
    <input id="numAzucar" type="number">
    <label>harina (g)</label>
    <input id="numHarina" type="number">
    <label>aceite (cucharadas)</label>
    <input id="numAceite" type="number">
    <label>agua (tazas)</label>
    <input id="numAgua" type="number">
    <button id="btnCalcular">Calcular cantidad de recetas</button>
    <p id="pResultado"></p> */
