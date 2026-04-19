/* ⭐Utilizando un plan de viajero frecuente, un cliente de una aerolínea desea consultar donde puede viajar gratis con las millas acumuladas hasta el momento.
Las opciones son las siguientes:
60.000 millas - Europa (destino lejano)
30.000 millas - América del Norte (destino intermedio)
15.000 millas — América del Sur (destino cercano)
Si el viajero es parte del plan "Plus" sus millas rinden el doble.
Dado un ingreso de millas acumuladas y el ingreso de si es parte del plan Plus (s-sí, n-no), indicarle al usuario cual es el destino más lejano al que puede viajar de manera gratuita, o indicarle  que no dispone de millas suficientes en caso que no alcance los mínimos.
Tengo 17.000 millas y soy parte del plan plus - > puedo viajar a América del Norte como destino más lejano. */


let verificar = document.querySelector("#btnVerificar")
verificar.addEventListener("click", function () {
    let millas = document.querySelector("#numMillas").value
    let nM= Number(millas)
    let plus = document.querySelector("#sltPlus").value
    let totalesMillas = 0
    respuesta = ""

    switch(plus){
        case "siPlus":
            totalesMillas = nM * 2
            break
        case "noPlus":
            totalesMillas = nM
            break
    }

    if (millas === ""|| isNaN(nM)){

    } else if (totalesMillas >= 60000){
        respuesta = "El destino mas lejano al que podes viajar es a Europa"

    }else if (totalesMillas >= 30000){
        respuesta = "El destino mas lejano al que podes viajar es a América del Norte"

    } else if(totalesMillas >= 15000){
        respuesta = "El destino mas lejano al que podes viajar es a América del Sur"

    }else{
         respuesta = `por el momento con ${totalesMillas} millas no tenemos destinos disponibles`

    }

    let resultado = document.querySelector("#pResultado")
    resultado.innerHTML = respuesta

    
})

/*  <label>ingrese sus millas</label>
    <input id="numMillas" type="number">
    <label> sos parte del plan Plus</label>
    <select id="sltPlus">
        <option value="noPlus">No</option>
        <option value="siPlus">Si</option>
    </select>
    <button id="btnVerificar">Verificar</button>
    <p id="pResultado"></p>
    
 */