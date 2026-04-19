/* ⭐Ingresar un número y presionar un botón, al presionar el botón, si el número es mayor que 20 mostrar "es mayor que 20", sino mostrar "es menor o igual a 20". */

let Aceptar = document.querySelector("#BtnAceptar")
Aceptar.addEventListener("click", function () {
    let Valor1 = document.querySelector("#NumValor1").value
    let Resultado = ""
    let NumValor1 = Number(Valor1)

    if(Valor1 = "" || isNaN(Valor1)){
        Resultado = "Ingrese un numero valido"
    } else if (NumValor1 > 20){
        Resultado = `${NumValor1} es mayor que 20`
    }else{
        Resultado =`${NumValor1} es menor o igual que 20`
    }    
    
let Mostrar = document.querySelector("#PRespuesta")
Mostrar.innerHTML = Resultado
})


/*     <label> Ingresa un numero (ver si es mayor o menor de 20) </label>
    <input id="NumValor1" type="number">
    <button id="BtnAceptar">Aceptar</button>
    <p id="PRespuesta"></p> */