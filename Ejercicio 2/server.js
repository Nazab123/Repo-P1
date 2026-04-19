/* ⭐Ingresar un número y dar aviso, si el número es mayor a 10 mostrar un aviso, "mayor que diez".
 */
let verificar = document.querySelector("#BtnVerificar")
verificar.addEventListener("click", function () {
    let Valor1 = document.querySelector("#NumValor1").value
    let resultado = ""
    let numValor1= Number(Valor1)

    if (Valor1=""|| isNaN(Valor1)){
        resultado = "Ingrese un numero valido"
    }else if (numValor1>10) {
        resultado = `${numValor1} es mayor que 10`
    } else {
        resultado = `${numValor1} es menor o igual que 10`
    }

    let mostrar = document.querySelector("#PResultado")
    mostrar.innerHTML = resultado
})

/*     <label>Numero para saber si es mayor a 10</label>
    <input id="NumValor1" type="number">
    <button id="BtnVerificar">Verificar</button>
    <p id="PResultado"></p> */