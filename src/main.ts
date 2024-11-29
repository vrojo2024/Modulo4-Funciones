import "./style.css"; //Importo los estilos del archivo CSS
 
const turnoAnterior = document.getElementById("boton-anterior");//Creo constante y obtengo elemento del html por id boton-anterior
const reseteoTurno = document.getElementById("boton-reseteo");//Creo constante y obtengo elemento del html por id boton-reseteo
const turnoSiguiente = document.getElementById("boton-siguiente");//Creo constante y obtengo elemento del html por id boton-siguiente
const entradaManual = document.getElementById("entrada-manual");//Creo constantes y obtengo elemento del html por id entradaManual
const turnoManual = document.getElementById("turno-manual");//Creo constante y obtengo elemento del html por id turno-manual
  
let turno: number = 0; //Declaro una variable turno que almacena el número de turno actual. Inicialmente es 0 y luego cambiará
 
function llamaTurno (turno: number) {//Actualizo el número de turno mostrado en la página. 
 
    const turnoDisplay = document.getElementById("display-turno");//creo constante y obtengo el elemento del html por id display-turno
    if (turnoDisplay instanceof HTMLDivElement && turnoDisplay !== null && turnoDisplay !== undefined) //Esta linea comprueba si la variable turnoDisplay existe en la páginay es un HTMLHeadingElement y no es null ni undefined
      {turnoDisplay.innerHTML //  Asigna un nuevo contenido HTML al elemento turnoDisplay, y actualiza en este caso el contenido para que muestre el turno actual
        = turno.toString() //Convierte el valor de la variable turno (que es un número) en una cadena de texto
        .padStart(2,'0');//, hago que tenga al menos 2 dígitos
    }
}
 
function anterior () {  
    turno = turno !== 0 ? --turno : 0; ////Disminuye el valor del turno (si no es cero)
    llamaTurno(turno); //actualiza el visor del número
}
 
function reseteo () { 
    turno = 0; //Resetea el turno a 0 
    llamaTurno(turno);//actualiza el visor del número
}
 
function siguiente () {  
    turno++; //Aumenta el valor del turno en 1
    llamaTurno(turno); //y actualiza el visor del número
}
 
function numeroManual (manTurno: string) { //Establece un turno manual que es el que ingresó el usuario, de tipo string
    const turnoNumerico = Number(manTurno);//Convierte el valor ingresado a un número.
    turno = turnoNumerico > 0 ? turnoNumerico : 0; //Me aseguro que este valor sea mayor que 0 ó 0 y nunca sea negativo
    if (turnoManual instanceof HTMLButtonElement && turnoManual !==null && turnoManual !==undefined) //Si el elemento turnoManual existe en la páginay es un HTMLHeadingElement y no es null ni undefined,
      {turnoManual.addEventListener("click", () => llamaTurno(turno));//agrego un "event listener" para escuchar el evento "click", Cuando el usuario haga click en el botón se ejecutará la función llamaTurno.
    }
}
 
if (turnoAnterior instanceof HTMLButtonElement && turnoAnterior !==null && turnoAnterior !==undefined) {//Si el elemento turnoAnterior  existe en la página y es un HTMLButtonElement y no es null ni undefined,
  turnoAnterior.addEventListener("click", anterior);//agrego un "event listener" para escuchar el evento "click", Cuando el usuario haga click en el botón se ejecutará la función anterior.
}
 
 
if (reseteoTurno instanceof HTMLButtonElement && reseteoTurno !==null && reseteoTurno !==undefined) { // Si el elemento reseteoTurno existe en la página y es un HTMLButtonElement y no es null ni undefined,
  reseteoTurno.addEventListener("click", reseteo); //agrego un "event listener" para escuchar el evento "click". Cuando el usuario haga click en el botón se ejecutará la función reseteo.
}
 
if (turnoSiguiente instanceof HTMLButtonElement && turnoSiguiente !==null && turnoSiguiente !==undefined) {// Si el elemento turnoSiguiente existe en la página y es un HTMLButtonElement y no es null ni undefined,
  turnoSiguiente.addEventListener("click", siguiente);//agrego un "event listener" para escuchar el evento "click". Cuando el usuario haga click en el botón se ejecutará la función siguiente.
}
 
if (entradaManual instanceof HTMLInputElement && entradaManual !==null && entradaManual !==undefined){ // Si el elemento ntradaManual existe en la página y es un HTMLInputElement y no es null ni undefined,
  entradaManual.addEventListener("change", () => numeroManual(entradaManual.value));//le agrego un "event listener" para el evento "change", que se activa cuando el valor del campo de entrada cambia, cuando el usuario escribe un nuevo número y luego hace clic fuera del campo.
//Cuando el evento ocurre, se ejecuta la función (entradaManual.value) => numeroManual(entradaManual.value). Aquí estoy pasando el valor ingresado por el usuario al método numeroManual(), que valida el número ingresado y actualiza el turno.
}
