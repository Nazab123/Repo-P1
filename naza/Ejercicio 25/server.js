/* ⭐⭐Programar un sistema que administrará pedidos de compras de cámaras fotográficas. Al inicio de la aplicación se ingresa el stock inicial de cámaras disponibles para la venta. A continuación se comienzan a recibir solicitudes de pedidos del producto. El cliente ingresará su nombre y a continuación la cantidad de unidades que desea. Mientras haya stock disponible se seguirán procesando solicitudes. Si el pedido supera la cantidad de stock disponible restante, se deberá informar del problema y esa solicitud no se tendrá en cuenta. Al vaciar el stock, deshabilitar el botón de compra. Informar el nombre del cliente que compró más cantidad de cámaras en un pedido. Informar la cantidad de pedidos que se procesaron en total.
 */



let nStock = 0
let botonStock = document.querySelector("#btnStock")
botonStock.addEventListener ("click", function () {
    let stock = document.querySelector("#numStock").value
    nStock = Number(stock)
    let respuestaStock = ""

    if (stock === "" || isNaN(nStock)|| nStock <= 0){
        respuestaStock = "ingrese un valor valido"
    } else{
        respuestaStock = `el stock disponible inicial es de ${nStock}`
        botonStock.setAttribute("disabled", "")

    }
    let resultadoStock = document.querySelector("#pStock")
    resultadoStock.innerHTML = respuestaStock
})

    let premium = 0
    let clientePremium = ""
    let contador = 0
let botonCantidad = document.querySelector("#btnCantidad")
botonCantidad.addEventListener("click", function () {
    let nombreCliente = document.querySelector("#txtNombre").value
    let cantidadPedido = document.querySelector("#cantidadCliente").value
    let numCantidadPedido = Number(cantidadPedido)
    let respuestaPedido = ""

    if (cantidadPedido === "" || isNaN(numCantidadPedido) || numCantidadPedido <= 0){
        respuestaPedido = "verifique el valor ingresado"
    } else { 
        if (numCantidadPedido <= nStock){
            nStock -= numCantidadPedido
            contador ++
            respuestaPedido = `se envio tu pedido ${nombreCliente} el stock actual es de ${nStock}`
            if (premium < numCantidadPedido){
            premium = numCantidadPedido
            clientePremium = nombreCliente 
            
        }} else if (numCantidadPedido > nStock){
            respuestaPedido = `no hay suficiente stock disponible para realizar ese pedido`
    }
    }

    if (nStock === 0){
        botonCantidad.setAttribute("disabled", "")
        respuestaPedido = (respuestaPedido + `, el que compro mas camaras fue ${clientePremium} que compro ${premium}, se hicieron ${contador} pedidos`) 
    }

    let resultadoPedido = document.querySelector("#pResultado")
    resultadoPedido.innerHTML = respuestaPedido

})

/*     <label>ingrese el stock</label>
    <input id="numStock" type="number">
    <button id="btnStock">Cargar Stock</button>
    <p id="pStock"></p>



    <label> Nombre </label>
    <input id="txtNombre">
    <label> Cantidad deseada </label>
    <input id="cantidadCliente" type="number">
    <button id="btnCantidad">Pedir</button>
    <p id="pResultado"></p> */
