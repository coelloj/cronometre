window.onload = init;
function init(){
    document.querySelector(".inici").addEventListener("click",cronometrar);
    document.querySelector(".atura").addEventListener("click",parar);
    document.querySelector(".posaZero").addEventListener("click",reiniciar);
    h = 0;
    m = 0;
    s = 0;
    document.getElementById("mostraHoraMinSeg").innerHTML="00:00:00";
}         
function cronometrar(){
    mostraTemps();
    id = setInterval(mostraTemps,1000);
    document.querySelector(".inici").removeEventListener("click",cronometrar);
}
function mostraTemps(){
    var hAux, mAux, sAux;
    s++;
    if (s>59){m++;s=0;}
    if (m>59){h++;m=0;}
    if (h>24){h=0;}

    if (s<10){sAux="0"+s;}else{sAux=s;}
    if (m<10){mAux="0"+m;}else{mAux=m;}
    if (h<10){hAux="0"+h;}else{hAux=h;}

    document.getElementById("mostraHoraMinSeg").innerHTML = hAux + ":" + mAux + ":" + sAux; 
}
function parar(){
    clearInterval(id);
    document.querySelector(".inici").addEventListener("click",cronometrar);

}
function reiniciar(){
    clearInterval(id);
    document.getElementById("mostraHoraMinSeg").innerHTML="00:00:00";
    h=0;m=0;s=0;
    document.querySelector(".inici").addEventListener("click",cronometrar);
}