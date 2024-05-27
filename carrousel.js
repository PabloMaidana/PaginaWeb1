//Arreglos con imágenes:
const estrenos = []
estrenos[0] = "imagenes/8633-el-planeta-de-los-simios-nuevo-reino.jpg";
estrenos[1] = "imagenes/9759-amigos-imaginarios.jpg";
estrenos[2] = "imagenes/9567-garfield-fuera-de-casa.jpg";
estrenos[3] = "imagenes/4450-kung-fu-panda-4.jpg";
estrenos [4] = "imagenes/9401-desafiantes.jpg";
estrenos [5] = "imagenes/9618-profesion-peligro.jpg";
estrenos [6] = "imagenes/9715-tarot-de-la-muerte.jpg";
estrenos [7] = "imagenes/9735-monkey-man-el-despertar-de-la-bestia.jpg";
estrenos [8] = "imagenes/9754-lo-mejor-esta-por-venir.jpg";
estrenos [9] = "imagenes/9502-godzilla-y-kong-el-nuevo-imperio.jpg";

const proximamente = [];
proximamente[0] = "imagenes/9760-haikyu-la-batalla-del-basurero.jpg";
proximamente[1] = "imagenes/9773-una-jungla-de-locura.jpg";
proximamente[2] = "imagenes/7865-intensamente-2.jpg";
proximamente[3] = "imagenes/9111-mi-villano-favorito-4.jpg";
proximamente[4] = "imagenes/9506-observados.jpg";
proximamente[5] = "imagenes/9632-complices-del-engano.jpg";
proximamente[6] = "imagenes/9568-bad-boys-hasta-la-muerte.jpg";
proximamente[7] = "imagenes/9618-profesion-peligro.jpg";
proximamente[8] = "imagenes/9783-la-inocencia.jpg";

//Recuperar listas:
let listaEstrenos = document.getElementById("lista-estrenos");
let listaProx = document.getElementById("lista-prox");

//Recuperar botones izquierdos y derechos 
let estrenoIzq = document.getElementById("estrenoIzq");
let estrenoDer = document.getElementById("estrenoDer");

let proxIzq = document.getElementById("proxIzq");
let proxDer = document.getElementById("proxDer");

//Recuperar los elementos imágenes de Estrenos
let eImg0 = document.getElementById("eImg0");
let eImg1 = document.getElementById("eImg1");
let eImg2 = document.getElementById("eImg2");
let eImg3 = document.getElementById("eImg3");
let eImg4 = document.getElementById("eImg4");
let eImg5 = document.getElementById("eImg5");
let eImg6 = document.getElementById("eImg6");
let eImg7 = document.getElementById("eImg7");

//Recuperar los elementos imágenes de Proximamente
let pImg0 = document.getElementById("pImg0");
let pImg1 = document.getElementById("pImg1");
let pImg2 = document.getElementById("pImg2");
let pImg3 = document.getElementById("pImg3");
let pImg4 = document.getElementById("pImg4");
let pImg5 = document.getElementById("pImg5");
let pImg6 = document.getElementById("pImg6");
let pImg7 = document.getElementById("pImg7");

//Inicializar posiciones de las imágenes de Estrenos 
let posEstrenoPrimero = 0;
let posEstrenoAnterior = 9;
let posEstrenoPosterior = 6;

 let posEstrenoSegundo = 1;
 let posEstrenoTercero = 2;
 let posEstrenoCuarto = 3;
 let posEstrenoQuinto = 4;
 let posEstrenoSexto = 5;

//Inicializar posiciones del las imágenes de Proximamente
let posProxPrimero = 0;
let posProxAnterior = 8;
let posProxPosterior = 6;

let posProxSegundo = 1;
let posProxTercero = 2;
let posProxCuarto = 3;
let posProxQuinto = 4;
let posProxSexto = 5;

//Función cargar imágenes de Estrenos
function cargarImagenesEstreno(){
    eImg0.src = estrenos[posEstrenoAnterior];
    eImg1.src = estrenos[posEstrenoPrimero];
    eImg2.src = estrenos[posEstrenoSegundo];
    eImg3.src = estrenos[posEstrenoTercero];
    eImg4.src = estrenos[posEstrenoCuarto];
    eImg5.src = estrenos[posEstrenoQuinto];
    eImg6.src = estrenos[posEstrenoSexto];
    eImg7.src = estrenos[posEstrenoPosterior];

    listaEstrenos.style.animationName = "nada";
}

//Función cargar imágenes de Proximamente
function cargarImagenesProximamente(){
    pImg0.src = proximamente[posProxAnterior];
    pImg1.src = proximamente[posProxPrimero];
    pImg2.src = proximamente[posProxSegundo];
    pImg3.src = proximamente[posProxTercero];
    pImg4.src = proximamente[posProxCuarto];
    pImg5.src = proximamente[posProxQuinto];
    pImg6.src = proximamente[posProxSexto];
    pImg7.src = proximamente[posProxPosterior];

    listaProx.style.animationName = "nada";
}

//Función Mover Izquierda Proximamente
function moverIzqProx(){
    listaProx.style.animationName ="anterior"; 
    if (posProxPrimero == 0) {
        posProxPrimero = 8;
    } else {
        posProxPrimero--;
    }
    if (posProxSegundo == 0){
        posProxSegundo = 8;
    } else {
        posProxSegundo--;
    }

    if (posProxTercero == 0){
        posProxTercero = 8;
    } else {
        posProxTercero--;
    }
    if (posProxCuarto == 0){
        posProxCuarto = 8;
    } else {
        posProxCuarto--;
    }
    if (posProxQuinto == 0){
        posProxQuinto = 8;
    } else {
        posProxQuinto--;
    }
    if (posProxSexto == 0){
        posProxSexto = 8;
    } else {
        posProxSexto--;
    }
    if (posProxAnterior == 0){
        posProxAnterior = 8;
    } else {
        posProxAnterior--;
    }
    if (posProxPosterior == 0){
        posProxPosterior = 8;
    } else {
        posProxPosterior--;
    }
        setTimeout(cargarImagenesProximamente, 2000);   
}
//Función Mover Derecha Proximamente
function moverDerProx(){
    listaProx.style.animationName = "siguiente";
    let aux = posProxPrimero;
        if(posProxPrimero < 8){
            posProxPrimero++;
        } else {
            posProxPrimero = 0;
        }
        posProxAnterior = aux;
        if(posProxSegundo == 8){
            posProxSegundo = 0;
        } else {   
            posProxSegundo++;
        }
        if(posProxTercero == 8){
            posProxTercero = 0;
        } else {
            posProxTercero++;
        }
        if(posProxCuarto == 8){
            posProxCuarto = 0;
        } else {  
            posProxCuarto++;
        }
        if(posProxQuinto == 8){
            posProxQuinto = 0;
        } else {
            posProxQuinto++;
        }
        if(posProxSexto == 8){
            posProxSexto = 0;
        } else {
            posProxSexto++;
        }
        if(posProxPosterior == 8){
            posProxPosterior = 0;
        } else {
            posProxPosterior++;
        }  

    setTimeout(cargarImagenesProximamente, 2000);
}
//Función Mover Izquierda Estrenos
function moverIzqEstreno(){
    listaEstrenos.style.animationName ="anterior";
        if (posEstrenoPrimero == 0) {
            posEstrenoPrimero = 9;
        } else {
            posEstrenoPrimero--;
        }
        if (posEstrenoSegundo == 0){
            posEstrenoSegundo = 9;
        } else {
            posEstrenoSegundo--;
        }

        if (posEstrenoTercero == 0){
            posEstrenoTercero = 9;
        } else {
            posEstrenoTercero--;
        }
        if (posEstrenoCuarto == 0){
            posEstrenoCuarto = 9;
        } else {
            posEstrenoCuarto--;
        }
        if (posEstrenoQuinto == 0){
            posEstrenoQuinto = 9;
        } else {
            posEstrenoQuinto--;
        }
        if (posEstrenoSexto == 0){
            posEstrenoSexto = 9;
        } else {
            posEstrenoSexto--;
        }
        if (posEstrenoAnterior == 0){
            posEstrenoAnterior = 9;
        } else {
            posEstrenoAnterior--;
        }
        if (posEstrenoPosterior == 0){
            posEstrenoPosterior = 9;
        } else {
            posEstrenoPosterior--;
        }
        setTimeout(cargarImagenesEstreno, 2000);   
}
//Función Mover Derecha Estrenos
function moverDerEstreno(){
    listaEstrenos.style.animationName = "siguiente";
    let aux = posEstrenoPrimero;
        if(posEstrenoPrimero < 9){
         posEstrenoPrimero++;
        } else {
            posEstrenoPrimero = 0;
        }
        posEstrenoAnterior = aux;
        if(posEstrenoSegundo == 9){
            posEstrenoSegundo = 0;
        } else {   
            posEstrenoSegundo++;
        }
        if(posEstrenoTercero == 9){
            posEstrenoTercero = 0;
        } else {
            posEstrenoTercero++;
        }
        if(posEstrenoCuarto == 9){
            posEstrenoCuarto = 0;
        } else {  
            posEstrenoCuarto++;
        }
        if(posEstrenoQuinto == 9){
            posEstrenoQuinto = 0;
        } else {
            posEstrenoQuinto++;
        }
        if(posEstrenoSexto == 9){
            posEstrenoSexto = 0;
        } else {
            posEstrenoSexto++;
        }
        if(posEstrenoPosterior == 9){
            posEstrenoPosterior = 0;
        } else {
            posEstrenoPosterior++;
        }  
    setTimeout(cargarImagenesEstreno, 2001);
}

//Event listeners
document.addEventListener('DOMContentLoaded', (event) => {
    cargarImagenesEstreno();
    cargarImagenesProximamente();
    estrenoDer.addEventListener("click",moverDerEstreno);
    estrenoIzq.addEventListener("click",moverIzqEstreno);
    proxDer.addEventListener("click",moverDerProx);
    proxIzq.addEventListener("click",moverIzqProx);
});