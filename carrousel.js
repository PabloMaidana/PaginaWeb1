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

//Deshabilitar botones izquierdos
estrenoIzq.disabled = true;
proxIzq.disabled = true;

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
let posEstrenoAnterior = 0;
let posEstrenoPosterior = 6;

//Inicializar posiciones del las imágenes de Proximamente
let posProxPrimero = 0;
let posProxAnterior = 0;
let posProxPosterior = 6;

//Función cargar imágenes de Estrenos
function cargarImagenesEstreno(){
    eImg0.src = estrenos[posEstrenoAnterior];
    eImg1.src = estrenos[posEstrenoPrimero];
    eImg2.src = estrenos[posEstrenoPrimero+1];
    eImg3.src = estrenos[posEstrenoPrimero+2];
    eImg4.src = estrenos[posEstrenoPrimero+3];
    eImg5.src = estrenos[posEstrenoPrimero+4];
    eImg6.src = estrenos[posEstrenoPrimero+5];
    eImg7.src = estrenos[posEstrenoPosterior];

    listaEstrenos.style.animationName = "nada";
}

//Función cargar imágenes de Proximamente
function cargarImagenesProximamente(){
    pImg0.src = proximamente[posProxAnterior];
    pImg1.src = proximamente[posProxPrimero];
    pImg2.src = proximamente[posProxPrimero+1];
    pImg3.src = proximamente[posProxPrimero+2];
    pImg4.src = proximamente[posProxPrimero+3];
    pImg5.src = proximamente[posProxPrimero+4];
    pImg6.src = proximamente[posProxPrimero+5];
    pImg7.src = proximamente[posProxPosterior];

    listaProx.style.animationName = "nada";
}

//Función Mover Izquierda Proximamente
function moverIzqProx(){
    proxDer.disabled = false;
    listaProx.style.animationName ="anterior"; 
        posProxPrimero--;
        if(posProxPrimero == 0) {
            posProxPosterior = 6;
            posProxAnterior = 0;
            proxIzq.disabled = true;
        } else {
            posProxAnterior--;
            if(posProxPrimero != 2 || posProxPosterior != 8){
                posProxPosterior--;
            }
        }      
        setTimeout(cargarImagenesProximamente, 2000);   
}
//Función Mover Derecha Proximamente
function moverDerProx(){
    proxIzq.disabled = false;
    listaProx.style.animationName = "siguiente";
    let aux = posProxPrimero;
        posProxPrimero++;
        if(posProxPrimero != 3){
            posProxPosterior++;
        } else {
            proxDer.disabled = true;
        }
    posProxAnterior = aux;
    setTimeout(cargarImagenesProximamente, 2000);
}
//Función Mover Izquierda Estrenos
function moverIzqEstreno(){
    estrenoDer.disabled = false;
    listaEstrenos.style.animationName ="anterior"; 
        posEstrenoPrimero--;
        if(posEstrenoPrimero == 0) {
            posEstrenoPosterior = 6;
            posEstrenoAnterior = 0;
            estrenoIzq.disabled = true;
        } else {
            posEstrenoAnterior--;
            if(posEstrenoPrimero != 3 ||posEstrenoPosterior != 9){
                posEstrenoPosterior--;
            }
        }  
            
        setTimeout(cargarImagenesEstreno, 2000);   
}
//Función Mover Derecha Estrenos
function moverDerEstreno(){
    estrenoIzq.disabled = false;
    listaEstrenos.style.animationName = "siguiente";
    let aux = posEstrenoPrimero;
        posEstrenoPrimero++;
        if(posEstrenoPrimero != 4){
            posEstrenoPosterior++;
        } else {
            estrenoDer.disabled = true;
        }
    posEstrenoAnterior = aux;
    setTimeout(cargarImagenesEstreno, 2000);
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