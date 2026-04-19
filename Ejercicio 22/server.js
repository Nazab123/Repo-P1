/* ⭐⭐Una nueva ley descuenta un 4% al total de cada compra si el pago se efectúa con tarjeta de crédito o débito y el monto es inferior a los $10000. Dado un ingreso de total de compra y si es con tarjeta ("si" o "no"), calcular el total final de la compra.
Pago de $2000 con tarjeta, costo final -> $ 1920
Pago de $12000 con tarjeta, costo final -> $12000
Pago de $3000 sin tarjeta, costo final -> $3000 */

let calcular = document.querySelector("#btnVer")
calcular.addEventListener("click", function () {
    let compra = document.querySelector("#numPago").value
    let numCompra = Number(compra)
    let DescPos = document.querySelector("#sltDesc").value
    let valorTotal = 0
    let respuesta = ""


    if (compra === ""|| isNaN(numCompra)){
        respuesta = "verifique los valores"
    }else if (numCompra < 10000){
        switch(DescPos){
            case "si":
                valorTotal = numCompra * 0.96
                respuesta = `el total es ${valorTotal}`
            break
            default:
                valorTotal = numCompra
                respuesta = `el total es ${valorTotal}`
        }

    } else {
        valorTotal = numCompra
        respuesta = `el total es ${valorTotal}`

    }
    let resultado = document.querySelector("#pResultado")
    resultado.innerHTML=respuesta
})

/* 
    <label>pago</label>
    <input id="numPago" type="number">
    <select id="sltDesc"></select>
    <option value="si">debito o credito</option>
    <option value="no">otro</option>
    <button id="btnVer">Ver total</button>
    <p id="pResultado"></p>

 */