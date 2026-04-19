/* ⭐Ingresar dos valores y una operación ("S"-suma, "R"-resta, "M"-multiplicación, "D"-división) y presionar un botón, al presionar el botón, dependiendo de la operación ingresada hacer el cálculo correspondiente entre el primer valor y el segundo, mostrar el resultado. */

let calcular = document.querySelector("#btnCalcular")
calcular.addEventListener("click", function () {
    let valor1 = document.querySelector("#numValor1").value
    let valor2 = document.querySelector("#numValor2").value
    let n1 = Number(document.querySelector("#numValor1").value)
    let n2 = Number(document.querySelector("#numValor2").value)
    let operacion = document.querySelector("#sltop").value
    respuesta = ""

    if (valor2 ===""|| isNaN(valor2) && valor1 ===""|| isNaN(valor1)){
        respuesta = "verifique que el valor 1 y el valor 2 sean válidos"
        
    } else if (valor2 ===""|| isNaN(valor2)){
        respuesta = "verifique que el valor 2 sea válido"

    } else if (valor1 ===""|| isNaN(valor1)){
        respuesta = "verifique que el valor 1 sea válido"

    }else if (operacion === "S"){
        respuesta = `el resultado es ${n1 + n2}`

    }else if (operacion === "R"){
        respuesta = `el resultado es ${n1-n2}`

    }else if (operacion === "M"){
        respuesta = `el resultado es ${n1 * n2}`

    }else if (operacion === "D"){
        respuesta = `el resultado es ${n1 / n2}`

    }
    let resultado = document.querySelector("#pResultado")
    resultado.innerHTML = respuesta
})


/*     <label>valor 1</label>
    <input id="numValor1" type="number">
    <label>valor 2</label>
    <input id="numValor2" type="number">
    <button id="btnCalcular">Calcular</button>

    <label>operacion</label>
    <select id="sltop">
    <option value="S">Suma</option>
    <option value="R">Resta</option>
    <option value="M">multiplicación</option>
    <option value="D">división</option>
</select>
    <p id="pResultado"></p> */