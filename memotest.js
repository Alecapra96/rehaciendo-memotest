//Preparar los colores que van en los cuadros (azar) y taparlos ( array desordenado)
//------los colores los pongo en una clase y el background va a ser negro

//cuando el user le de click a un cuadro lo muestra y guarda el color en una variable
//cuando da click de vuelta muestra otro cuandro y compara el color
//---- si es igual cambia el background
//-------si es diferente espera 2 segundos y da vuelta los colores.

// hay que hacer que cuando de el segundo click no pueda hacer click por 2 seg mas.

let $cuadros = document.querySelectorAll(".cuadro");
let color;
let comparate = [];

let $segundoCuadro;
let contador;
preparateGame();
game();


function game() {
    console.log(comparate.length)
        if (comparate.length === 2) {
            console.log("entre")
            blockinput()
            compare()
        } else {
            userTurn()
        //}
        //if (comparacion.length === 0) {
        //    endGame()
        //}
    }

}
function preparateGame(){
    const colorsArray = ["red","red","blue","blue","yellow","yellow","grey","grey","green","green","orange","orange","pink","pink","purple","purple"]
    let colorsArrayDisorder = desordenar(colorsArray);
    console.log(colorsArrayDisorder);
    colorsArrayDisorder.forEach(function(currentValue,index){
        document.querySelector(`#cuadro-${index}`).classList.add(currentValue);
        document.querySelector(`#cuadro-${index}`).style.backgroundColor = "black";
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
    $primerCuadro === comparate[0];
    // $segundoCuadro == comparate[1];
    console.log($primerCuadro )
    // show($primerCuadro);
    game();
}   
function compare(){
    if($primerCuadro === $segundoCuadro){
        contador++; 
    }else if ($primerCuadro.className === $segundoCuadro.className){
        contador++;
<<<<<<< Updated upstream

=======
        show($segundoCuadro);
        setTimeout(function(){ 
            removerCuadro($primerCuadro);
            removerCuadro($segundoCuadro);
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
            reset();
            game();
        },600);           
        // Espero 1 s
        // Espero 1 segundo y le pongo fondo negro a los cuadros descubridos 
       
        contador++;
>>>>>>> Stashed changes
    }
}

function show(cuadro){
    color = cuadro.className;
    console.log(color)
    color = color.replace("cuadro",'').trim();
    return cuadro.style.backgroundColor=color;
}
function removerCuadro(cuadro){
    padre = cuadro.parentNode;
    return padre.removeChild(cuadro);
}