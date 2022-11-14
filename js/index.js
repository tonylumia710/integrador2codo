const cantidadEntradas = document.getElementById('cantidadEntrada')

const botonCalcular = document.getElementById('botonCalcular')

const categoria = document.getElementById('inputState')

botonCalcular.addEventListener('click',resumen)

const botonBorrar = document.getElementById('botonBorrar')

botonBorrar.addEventListener('click', borrar)


function resumen(){

  totalPagar =  calcularImporte(categoria.value, cantidadEntradas.value);

  if(cantidadEntradas.value == 0 || cantidadEntradas.value == ''){
    alert("DEBE INGRESAR LA CANTIDAD DE ENTRADAS QUE DESEA ADQUIRIR")
  }

  totalCompra.innerHTML=  `Total a Pagar: $ ${totalPagar}`

}

const calcularImporte = (categoria, cantidad) => {
  valorTicket = 200;
  totalPagar = 0;

  descuentos = {
    estudiante: 0.8,
    trainee: 0.5,
    junior: 0.15
  }

  descuentoTotal = valorTicket * descuentos[`${categoria}`] * cantidad;

  return totalPagar = valorTicket * cantidad - descuentoTotal

}

function borrar () {
  totalCompra.innerHTML=  `Total a Pagar: $ 0`
}