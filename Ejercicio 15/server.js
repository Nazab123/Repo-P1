/* ⭐Ingresar un código de departamento y mostrar en un párrafo el nombre del departamento que le corresponde.
A - Canelones
B - Maldonado
C - Rocha
D - Treinta y Tres
E - Cerro Largo
F - Rivera
G - Artigas
H - Salto
I - Paysandú
J - Rio Negro
K - Soriano
L - Colonia
M - San José
N - Flores
O - Florida
P - Lavalleja
Q - Durazno
R - Tacuarembó
S - Montevideo */

let verificar = document.querySelector("#btnVerificar")
verificar.addEventListener("click", function () {
    let depto = document.querySelector("#sltDepto").value
    let respuesta = ""

    switch(depto){
        case "Canelones":
            respuesta = `El departamento corresponde a ${depto}`
            break
        case "Maldonado":
            respuesta = `El departamento corresponde a ${depto}`
            break
        case "Rocha":
            respuesta = `El departamento corresponde a ${depto}`
            break
        case "Treinta y Tres":
            respuesta = `El departamento corresponde a ${depto}`
            break
        case "Cerro Largo":
            respuesta = `El departamento corresponde a ${depto}`
            break
        case "Rivera":
            respuesta = `El departamento corresponde a ${depto}`
            break
        case "Artigas":
            respuesta = `El departamento corresponde a ${depto}`
            break
        case "Salto":
            respuesta = `El departamento corresponde a ${depto}`
            break
        case "Paysandú":
            respuesta = `El departamento corresponde a ${depto}`
            break
        case "Rio Negro":
            respuesta = `El departamento corresponde a ${depto}`
            break
        case "Soriano":
            respuesta = `El departamento corresponde a ${depto}`
            break
        case "Colonia":
            respuesta = `El departamento corresponde a ${depto}`
            break
        case "San José":
            respuesta = `El departamento corresponde a ${depto}`
            break
        case "Flores":
            respuesta = `El departamento corresponde a ${depto}`
            break
        case "Florida":
            respuesta = `El departamento corresponde a ${depto}`
            break
        case "Lavalleja":
            respuesta = `El departamento corresponde a ${depto}`
            break
        case "Durazno":
            respuesta = `El departamento corresponde a ${depto}`
            break
        case "Tacuarembó":
            respuesta = `El departamento corresponde a ${depto}`
            break           
        case "Montevideo":
            respuesta = `El departamento corresponde a ${depto}`
            break           
        }

    let resultado = document.querySelector("#pResultado")
    resultado.innerHTML = respuesta
    
})


/*     <label> elegir departamento</label>
    <select id="sltDepto">
        <option value="A"> Canelones </option>
        <option value="B"> Maldonado </option>
        <option value="C"> Rocha </option>
        <option value="D"> Treinta y Tres </option>
        <option value="E"> Cerro Largo </option>
        <option value="F"> Rivera </option>
        <option value="G"> Artigas </option>
        <option value="H"> Salto </option>
        <option value="I"> Paysandú </option>
        <option value="J"> Rio Negro </option>
        <option value="K"> Soriano </option>
        <option value="L"> Colonia </option>
        <option value="M"> San José </option>
        <option value="N"> Flores </option>
        <option value="O"> Florida </option>
        <option value="P"> Lavalleja </option>
        <option value="Q"> Durazno </option>
        <option value="R"> Tacuarembó </option>
        <option value="S"> Montevideo </option>
    </select>
    <button id="btnVerificar"> Verificar </button>
    <p id="pResultado"></p> */