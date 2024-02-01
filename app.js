let numeroSecreto = 0; //variable de alcance global
let intentos = 0; //contador
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento); //tomar este valor y asignarlo a una variable
    elementoHTML.innerHTML = texto;
    return;
}

//Capturar valor del input
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento("p",`Acertaste el número en ${intentos} ${(intentos==1) ? 'vez': 'veces'}`); //podemos llamar función para ejecutarla
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        //el usuario no acertó.
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento("p", "El número secreto es menor")
        } else{
            asignarTextoElemento("p","El número secreto es mayor")
        }//mayor
        intentos++; //se coloca aquí porque si no se cumplen estas condiciones, aumenta en 1
        limpiarCaja();//llamo a la función
    }
    return;
}

function limpiarCaja (){
    document.querySelector('#valorUsuario').value = '';//selector genérico, #para ID
    
}


//Generar un número aleatorio
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()* numeroMaximo)+1; //variable de bloque
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    // Si ya sorteamos los números
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los números')
    } else{
        //Si el número generado está en la lista, 
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de números
    condicionesIniciales();
    //generar el número aleatorio
    //deshabilitar botón nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', true);
    //inicializar el número de intentos
}

condicionesIniciales();
