//Preparar los colores que van en los cuadros (azar) y taparlos ( array desordenado)
//------los colores los pongo en una clase y el background va a ser negro

//cuando el user le de click a un cuadro lo muestra y guarda el color en una variable
//cuando da click de vuelta muestra otro cuandro y compara el color
//---- si es igual cambia el background
//-------si es diferente espera 2 segundos y da vuelta los colores.

// hay que hacer que cuando de el segundo click no pueda hacer click por 2 seg mas.
let $contador = document.getElementById("contador");
let $cuadros = document.querySelectorAll(".cuadro");
let color;
let comparate = [];
let $segundoCuadro;
let contador=0;
let hiddenSquare=0;

preparateGame();
game();


function game() {
        if (comparate.length === 2) {
        blockinput()
        compare()
        } else {
        userTurn()
        }
        if (comparate.length === 0) {
        endGame()
        }
}
function preparateGame(){
    const colorsArray = ["red","red","blue","blue","yellow","yellow","grey","grey","green","green","orange","orange","pink","pink","purple","purple"]
    let colorsArrayDisorder = desordenar(colorsArray);
    colorsArrayDisorder.forEach(function(currentValue,index){
        document.querySelector(`#cuadro-${index}`).classList.add(currentValue);
        document.querySelector(`#cuadro-${index}`).style.backgroundColor = "#212F3C";
    })
}
function blockinput() {
    $cuadros.forEach(cuadro => {
        cuadro.onclick = function (e) {
            console.log("!!!!!!!!!!!!!!!!!!!!!!")
            
        }
    })
}
function desordenar(array){ // esta función me desordena un array
    array = array.sort(function() {return Math.random() - 0.5});
    return array;  
}
function userTurn(){
    $cuadros.forEach(function(currentValue){
        currentValue.onclick=function(currentValue){
            firstMovement(currentValue);
        }       
    });
}
let $primerCuadro;
function firstMovement(e){
    comparate.push(e.target);
    $primerCuadro = comparate[0];
    $segundoCuadro = comparate[1];
    show($primerCuadro);
    game();
}   
function compare(){
    if($primerCuadro === $segundoCuadro){ //si elige la misma figura.
        contador++;
        setTimeout(function(){ 
            hide($primerCuadro)
            $contador.innerText="CONTADOR : "+ contador; 
            reset();
            game();
        },400);          
        //escondo el cuadro y le sumo al contador por huevon
    }else if ($primerCuadro.className === $segundoCuadro.className){
        contador++;
        show($segundoCuadro);
        setTimeout(function(){ 
            removeSquare($primerCuadro);
            removeSquare($segundoCuadro);
            $contador.innerText="CONTADOR : "+ contador; 
            hiddenSquare += 2;
            reset();
            game();
        },600);           
        // Espero 1 segundo y le pongo fondo trasparente a los cuadros descubridos 
        //----------- TENGO QUE ELIMINARLOS!----------------
    }else{
        show($segundoCuadro);
        setTimeout(function(){ 
            hide($primerCuadro);
            hide($segundoCuadro);
            $contador.innerText="CONTADOR : "+ contador; 
            reset();
            game();
        },600);           
        // Espero 1 s
        // Espero 1 segundo y le pongo fondo negro a los cuadros descubridos 
       
        contador++;
    }
}
function show(cuadro){
    color = cuadro.className;
    color = color.replace("cuadro",'').trim();
    return cuadro.style.backgroundColor=color;
}
function hide(cuadro){
    color = "#212F3C";
    return cuadro.style.backgroundColor=color;
}
function reset(){
    return comparate = [];
}
function removeSquare(cuadro){
    return cuadro.style.visibility="hidden";
}
function endGame(){
    if($cuadros.length === hiddenSquare){
    // alert("Felicitaciones! , TE LLEVO "+ contador+ " INTENTOS");
    Swal.fire({
        icon: 'success',
        title: "GANASTE , TE TOMO "+contador+" MOVIMIENTOS"
        }).then((result) => {
            if (result.isConfirmed) {
                return location.reload();
            }else{
                location.reload();   
            } 
        })
    };
}