/* ⭐⭐Una empresa de bienes raíces ofrece casas de interés social, bajo las siguientes condiciones: Si los ingresos del comprador son menores de $20.000, el primer pago será del 15% de costo de la casa y el resto se distribuirá en pagos mensuales a pagar en 7 años. Si los ingresos del comprador son de $20.000 o más la cuota inicial será del 30% del costo de la casa y el resto se distribuirá en pagos mensuales durante 1 año. La empresa quiere obtener cuánto debe pagar un comprador por concepto del primer pago y cuánto por cada pago parcial. */

let verificar = document.querySelector("#btnVerificar")
verificar.addEventListener("click", function () {
    numeroIngreso = document.querySelector("#numIngrsos").value
    numeroCasa = document.querySelector("#numCasa").value
    nCasa= Number(numeroCasa)
    nIngreso = Number(numeroIngreso)
    let respuesta = 0
    entrega = 0
    cuotas = 0


    if (numeroCasa === "" || isNaN(nCasa) || numeroIngreso === "" || isNaN(nIngreso) ){
        respuesta = "verifique los numeros ingresados"
    } else if (nIngreso < 20000){
        entrega = nCasa * 0.15
        cuotas = (nCasa * 0.85) / 84
        respuesta = `la entrega es de ${entrega} y 84 cuotas de ${cuotas}`

    }else if (nIngreso > 20000){
        entrega = nCasa * 0.30
        cuotas = (nCasa * 0.70) / 12
        respuesta = `la entrega es de ${entrega} y 12 cuotas de ${cuotas}`
    } else {
        respuesta = "inserte un valor positivo"
    }
    

    let resultado = document.querySelector("#pResultado")
    resultado.innerHTML = respuesta
    
})

/*     <label>Ingresar valor de la casa</label>
    <input id="numCasa" type="number">
    <label>ingresar ingresos</label>
    <input id="numIngrsos" type="number">
    <button id="btnVerificar"> Ver financiacion</button>
    <p id="pResultado"></p> */

/*  <label>ingresar ingresos</label>
    <input id="numIngrsos" type="number">
    <button id="btnVerificar"> Ver financiacion</button>
    <p id="pResultado"></p> */