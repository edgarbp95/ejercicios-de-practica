

// EVENTOS DE LOS NUMEROS Y SELECCION DE LOS ELEMENTOS HTML
let textoPantalla = document.querySelector(".texto-pantalla");
let resultadoPantalla = document.querySelector(".resultado-pantalla");
const numeroUno = document.getElementById("numero-uno").addEventListener("click", ()=>{
    if(operacionRealizada == false){
        textoPantalla.innerHTML += 1;
    } else{
        textoPantalla.innerHTML = " ";
        resultadoPantalla.innerHTML = 0;
        grupoUno = 0;
        grupoDos = 0;
        textoPantalla.innerHTML += 1;
        operacionRealizada = false;
    }
});
const numeroDos = document.getElementById("numero-dos").addEventListener("click", ()=>{
    if(operacionRealizada == false){
        textoPantalla.innerHTML += 2;
    } else{
        textoPantalla.innerHTML = " ";
        resultadoPantalla.innerHTML = 0;
        grupoUno = 0;
        grupoDos = 0;
        textoPantalla.innerHTML += 2;
        operacionRealizada = false;
    }
});
const numeroTres = document.getElementById("numero-tres").addEventListener("click", ()=>{
    if(operacionRealizada == false){
        textoPantalla.innerHTML += 3;
    } else{
        textoPantalla.innerHTML = " ";
        resultadoPantalla.innerHTML = 0;
        grupoUno = 0;
        grupoDos = 0;
        textoPantalla.innerHTML += 3;
        operacionRealizada = false;
    }
});
const numeroCuatro = document.getElementById("numero-cuatro").addEventListener("click", ()=>{
    if(operacionRealizada == false){
        textoPantalla.innerHTML += 4;
    } else{
        textoPantalla.innerHTML = " ";
        resultadoPantalla.innerHTML = 0;
        grupoUno = 0;
        grupoDos = 0;
        textoPantalla.innerHTML += 4;
        operacionRealizada = false;
    }
});
const numeroCinco = document.getElementById("numero-cinco").addEventListener("click", ()=>{
    if(operacionRealizada == false){
        textoPantalla.innerHTML += 5;
    } else{
        textoPantalla.innerHTML = " ";
        resultadoPantalla.innerHTML = 0;
        grupoUno = 0;
        grupoDos = 0;
        textoPantalla.innerHTML += 5;
        operacionRealizada = false;
    }
});
const numeroSeis = document.getElementById("numero-seis").addEventListener("click", ()=>{
    if(operacionRealizada == false){
        textoPantalla.innerHTML += 6;
    } else{
        textoPantalla.innerHTML = " ";
        resultadoPantalla.innerHTML = 0;
        grupoUno = 0;
        grupoDos = 0;
        textoPantalla.innerHTML += 6;
        operacionRealizada = false;
    }
});
const numeroSiete = document.getElementById("numero-siete").addEventListener("click", ()=>{
    if(operacionRealizada == false){
        textoPantalla.innerHTML += 7;
    } else{
        textoPantalla.innerHTML = " ";
        resultadoPantalla.innerHTML = 0;
        grupoUno = 0;
        grupoDos = 0;
        textoPantalla.innerHTML += 7;
        operacionRealizada = false;
    }
});
const numeroOcho = document.getElementById("numero-ocho").addEventListener("click", ()=>{
   
    if(operacionRealizada == false){
        textoPantalla.innerHTML += 8;
    } else{
        textoPantalla.innerHTML = " ";
        resultadoPantalla.innerHTML = 0;
        grupoUno = 0;
        grupoDos = 0;
        textoPantalla.innerHTML += 8;
        operacionRealizada = false;
    }
});
const numeroNueve = document.getElementById("numero-nueve").addEventListener("click", ()=>{
    
    if(operacionRealizada == false){
        textoPantalla.innerHTML += 9;
    } else{
        textoPantalla.innerHTML = " ";
        resultadoPantalla.innerHTML = 0;
        grupoUno = 0;
        grupoDos = 0;
        textoPantalla.innerHTML += 9;
        operacionRealizada = false;
    }
});
const numeroCero = document.getElementById("numero-0").addEventListener("click", ()=>{
    
    if(operacionRealizada == false){
        textoPantalla.innerHTML += 0;
    } else{
        textoPantalla.innerHTML = " ";
        resultadoPantalla.innerHTML = 0;
        grupoUno = 0;
        grupoDos = 0;
        textoPantalla.innerHTML += 0;
        operacionRealizada = false;
    }
});
const botonSuma = document.getElementById("suma");
const botonResta = document.getElementById("resta");
const botonDivision = document.getElementById("division");
const botonMultiplicar = document.getElementById("multiplicacion");
const funcionExp = document.getElementById("funcion-exp");
const botonPunto = document.getElementById("punto").addEventListener("click", ()=>{
    textoPantalla.innerHTML += ".";
});
const botonCE = document.getElementById("boton-CE").addEventListener("click", ()=>{
    textoPantalla.innerHTML = " ";
    resultadoPantalla.innerHTML = 0;
    grupoUno = 0;
    grupoDos = 0;    
});
const botonIgual = document.getElementById("igual");

let operacionRealizada = false;
let grupoUno, grupoDos;
let operacion = " ";

// FUNCIONES DE OPERACION
const suma = (num1,num2)=>{
    return num1 + num2;
}

const resta = (num1,num2)=>{
    return num1 - num2;
}

const multiplicacion = (num1,num2)=>{
    return num1 * num2;
}

const division = (num1,num2)=>{
    return parseFloat(num1) / parseFloat(num2);
}

const exponencial = (num1,exp)=>{
    return num1**exp;
}



// EVENTOS DE LOS OPERADORES

    botonSuma.addEventListener("click",()=>{
       if(operacion == " "){
            grupoUno = textoPantalla.innerHTML;
            textoPantalla.innerHTML= " ";
            resultadoPantalla.innerHTML = grupoUno + " +";
            operacion = "suma";
            operacionRealizada = false;
        } else if (operacion == "suma"){
            grupoDos = textoPantalla.innerHTML;
            let resultado= suma(parseFloat(grupoUno),parseFloat(grupoDos))
            resultadoPantalla.innerHTML= resultado + " +";
            textoPantalla.innerHTML = " ";
            operacion = "suma";
            operacionRealizada = false;
            grupoUno = resultado;
        } else if (operacion == "resta"){
            grupoDos = textoPantalla.innerHTML;
            let resultado= resta(parseFloat(grupoUno),parseFloat(grupoDos))
            resultadoPantalla.innerHTML= resultado + " +";
            textoPantalla.innerHTML = " ";
            operacion = "suma";
            operacionRealizada = false;
            grupoUno = resultado;
        } else if (operacion == "division"){
            grupoDos = textoPantalla.innerHTML;
            let resultado= division(parseFloat(grupoUno),parseFloat(grupoDos))
            resultadoPantalla.innerHTML= resultado + " +";
            textoPantalla.innerHTML = " ";
            operacion = "suma";
            operacionRealizada = false;
            grupoUno = resultado;
        } else if (operacion == "multiplicacion"){
            grupoDos = textoPantalla.innerHTML;
            let resultado= multiplicacion(parseFloat(grupoUno),parseFloat(grupoDos))
            resultadoPantalla.innerHTML= resultado + " +";
            textoPantalla.innerHTML = " ";
            operacion = "suma";
            operacionRealizada = false;
            grupoUno = resultado;
        } else if (operacion == "exp"){
            grupoDos = textoPantalla.innerHTML;
            let resultado= exponencial(parseFloat(grupoUno),parseFloat(grupoDos))
            resultadoPantalla.innerHTML= resultado + " +";
            textoPantalla.innerHTML = " ";
            operacion = "suma";
            operacionRealizada = false;
            grupoUno = resultado;
            }



    })

    botonResta.addEventListener("click",()=>{
        if(operacion == " "){
            grupoUno = textoPantalla.innerHTML;
            textoPantalla.innerHTML= " ";
            resultadoPantalla.innerHTML = grupoUno + " +";
            operacion = "resta";
            operacionRealizada = false;
        } else if (operacion == "resta"){
            grupoDos = textoPantalla.innerHTML;
            let resultado= resta(parseFloat(grupoUno),parseFloat(grupoDos))
            resultadoPantalla.innerHTML= resultado + " -";
            textoPantalla.innerHTML = " ";
            operacion = "resta";
            operacionRealizada = false;
            grupoUno = resultado;
        } else if (operacion == "suma"){
            grupoDos = textoPantalla.innerHTML;
            let resultado= suma(parseFloat(grupoUno),parseFloat(grupoDos))
            resultadoPantalla.innerHTML= resultado + " -";
            textoPantalla.innerHTML = " ";
            operacion = "resta";
            operacionRealizada = false;
            grupoUno = resultado;
        } else if (operacion == "division"){
            grupoDos = textoPantalla.innerHTML;
            let resultado= division(parseFloat(grupoUno),parseFloat(grupoDos))
            resultadoPantalla.innerHTML= resultado + " -";
            textoPantalla.innerHTML = " ";
            operacion = "resta";
            operacionRealizada = false;
            grupoUno = resultado;
        } else if (operacion == "multiplicacion"){
            grupoDos = textoPantalla.innerHTML;
            let resultado= multiplicacion(parseFloat(grupoUno),parseFloat(grupoDos))
            resultadoPantalla.innerHTML= resultado + " -";
            textoPantalla.innerHTML = " ";
            operacion = "resta";
            operacionRealizada = false;
            grupoUno = resultado;
        } else if (operacion == "exp"){
            grupoDos = textoPantalla.innerHTML;
            let resultado= exponencial(parseFloat(grupoUno),parseFloat(grupoDos))
            resultadoPantalla.innerHTML= resultado + " -";
            textoPantalla.innerHTML = " ";
            operacion = "resta";
            operacionRealizada = false;
            grupoUno = resultado;
            }
    
    })

    botonDivision.addEventListener("click",()=>{
        if(operacion == " "){
            grupoUno = textoPantalla.innerHTML;
            textoPantalla.innerHTML= " ";
            resultadoPantalla.innerHTML = grupoUno + " /";
            operacion = "division";
            operacionRealizada = false;
        } else if (operacion == "division"){
            grupoDos = textoPantalla.innerHTML;
            let resultado= division(parseFloat(grupoUno),parseFloat(grupoDos))
            resultadoPantalla.innerHTML= resultado + " /";
            textoPantalla.innerHTML = " ";
            operacion = "division";
            operacionRealizada = false;
            grupoUno = resultado;
        } else if (operacion == "resta"){
            grupoDos = textoPantalla.innerHTML;
            let resultado= resta(parseFloat(grupoUno),parseFloat(grupoDos))
            resultadoPantalla.innerHTML= resultado + " /";
            textoPantalla.innerHTML = " ";
            operacion = "division";
            operacionRealizada = false;
            grupoUno = resultado;
        } else if (operacion == "suma"){
            grupoDos = textoPantalla.innerHTML;
            let resultado= suma(parseFloat(grupoUno),parseFloat(grupoDos))
            resultadoPantalla.innerHTML= resultado + " /";
            textoPantalla.innerHTML = " ";
            operacion = "division";
            operacionRealizada = false;
            grupoUno = resultado;
        } else if (operacion == "multiplicacion"){
            grupoDos = textoPantalla.innerHTML;
            let resultado= multiplicacion(parseFloat(grupoUno),parseFloat(grupoDos))
            resultadoPantalla.innerHTML= resultado + " /";
            textoPantalla.innerHTML = " ";
            operacion = "division";
            operacionRealizada = false;
            grupoUno = resultado;
        } else if (operacion == "exp"){
            grupoDos = textoPantalla.innerHTML;
            let resultado= exponencial(parseFloat(grupoUno),parseFloat(grupoDos))
            resultadoPantalla.innerHTML= resultado + " /";
            textoPantalla.innerHTML = " ";
            operacion = "division";
            operacionRealizada = false;
            grupoUno = resultado;
            }
    
    })

    botonMultiplicar.addEventListener("click",()=>{
        if(operacion == " "){
            grupoUno = textoPantalla.innerHTML;
            textoPantalla.innerHTML= " ";
            resultadoPantalla.innerHTML = grupoUno + " *";
            operacion = "multiplicacion";
            operacionRealizada = false;
        } else if (operacion == "multiplicacion"){
            grupoDos = textoPantalla.innerHTML;
            let resultado= multiplicacion(parseFloat(grupoUno),parseFloat(grupoDos))
            resultadoPantalla.innerHTML= resultado + " *";
            textoPantalla.innerHTML = " ";
            operacion = "multiplicacion";
            operacionRealizada = false;
            grupoUno = resultado;
        } else if (operacion == "resta"){
            grupoDos = textoPantalla.innerHTML;
            let resultado= resta(parseFloat(grupoUno),parseFloat(grupoDos))
            resultadoPantalla.innerHTML= resultado + " *";
            textoPantalla.innerHTML = " ";
            operacion = "multiplicacion";
            operacionRealizada = false;
            grupoUno = resultado;
        } else if (operacion == "suma"){
            grupoDos = textoPantalla.innerHTML;
            let resultado= suma(parseFloat(grupoUno),parseFloat(grupoDos))
            resultadoPantalla.innerHTML= resultado + " *";
            textoPantalla.innerHTML = " ";
            operacion = "multiplicacion";
            operacionRealizada = false;
            grupoUno = resultado;
        } else if (operacion == "division"){
            grupoDos = textoPantalla.innerHTML;
            let resultado= division(parseFloat(grupoUno),parseFloat(grupoDos))
            resultadoPantalla.innerHTML= resultado + " *";
            textoPantalla.innerHTML = " ";
            operacion = "multiplicacion";
            operacionRealizada = false;
            grupoUno = resultado;
        } else if (operacion == "exp"){
            grupoDos = textoPantalla.innerHTML;
            let resultado= exponencial(parseFloat(grupoUno),parseFloat(grupoDos))
            resultadoPantalla.innerHTML= resultado + " *";
            textoPantalla.innerHTML = " ";
            operacion = "multiplicacion";
            operacionRealizada = false;
            grupoUno = resultado;
            }
    
    })

    funcionExp.addEventListener("click",()=>{
        if(operacion == " "){
            grupoUno = textoPantalla.innerHTML;
            textoPantalla.innerHTML= " ";
            resultadoPantalla.innerHTML = grupoUno + " /";
            operacion = "exp";
            operacionRealizada = false;
        } else if (operacion == "exp"){
            grupoDos = textoPantalla.innerHTML;
            let resultado= exponencial(parseFloat(grupoUno),parseFloat(grupoDos))
            resultadoPantalla.innerHTML= resultado + " ^";
            textoPantalla.innerHTML = " ";
            operacion = "exp";
            operacionRealizada = false;
            grupoUno = resultado;
        } else if (operacion == "resta"){
            grupoDos = textoPantalla.innerHTML;
            let resultado= resta(parseFloat(grupoUno),parseFloat(grupoDos))
            resultadoPantalla.innerHTML= resultado + " ^";
            textoPantalla.innerHTML = " ";
            operacion = "exp";
            operacionRealizada = false;
            grupoUno = resultado;
        } else if (operacion == "suma"){
            grupoDos = textoPantalla.innerHTML;
            let resultado= suma(parseFloat(grupoUno),parseFloat(grupoDos))
            resultadoPantalla.innerHTML= resultado + " ^";
            textoPantalla.innerHTML = " ";
            operacion = "exp";
            operacionRealizada = false;
            grupoUno = resultado;
        } else if (operacion == "multiplicacion"){
            grupoDos = textoPantalla.innerHTML;
            let resultado= multiplicacion(parseFloat(grupoUno),parseFloat(grupoDos))
            resultadoPantalla.innerHTML= resultado + " ^";
            textoPantalla.innerHTML = " ";
            operacion = "exp";
            operacionRealizada = false;
            grupoUno = resultado;
        } else if (operacion == "division"){
            grupoDos = textoPantalla.innerHTML;
            let resultado= division(parseFloat(grupoUno),parseFloat(grupoDos))
            resultadoPantalla.innerHTML= resultado + " ^";
            textoPantalla.innerHTML = " ";
            operacion = "exp";
            operacionRealizada = false;
            grupoUno = resultado;
            }
    })


// EVENTOS DEL BOTON DE IGUAL
botonIgual.addEventListener("click",()=>{
    if(operacion == "suma"){
        grupoDos = textoPantalla.innerHTML;
        resultadoPantalla.innerHTML+=grupoDos;
        let resultadoSuma= suma(parseFloat(grupoUno),parseFloat(grupoDos))
        textoPantalla.innerHTML = resultadoSuma;
        operacion = " ";
        operacionRealizada = true;
    } else if(operacion == "resta"){
        grupoDos = textoPantalla.innerHTML;
        resultadoPantalla.innerHTML+=grupoDos;
        let resultadoResta= resta(parseFloat(grupoUno),parseFloat(grupoDos))
        textoPantalla.innerHTML = resultadoResta;
        operacion = " ";
        operacionRealizada = true;
    } else if(operacion == "division"){
        grupoDos = textoPantalla.innerHTML;
        resultadoPantalla.innerHTML+=grupoDos;
        let resultadoDivision= division(parseFloat(grupoUno),parseFloat(grupoDos))
        textoPantalla.innerHTML = resultadoDivision;
        operacion = " ";
        operacionRealizada = true;
    } else if(operacion == "multiplicacion"){
        grupoDos = textoPantalla.innerHTML;
        resultadoPantalla.innerHTML+=grupoDos;
        let resultadoMultiplicacion= multiplicacion(parseFloat(grupoUno),parseFloat(grupoDos))
        textoPantalla.innerHTML = resultadoMultiplicacion;
        operacion = " ";
        operacionRealizada = true;
    } else if(operacion == "exp"){
        grupoDos = textoPantalla.innerHTML;
        resultadoPantalla.innerHTML+=grupoDos;
        let resultadoExp= exponencial(parseFloat(grupoUno),parseFloat(grupoDos))
        textoPantalla.innerHTML = resultadoExp;
        operacion = " ";
        operacionRealizada = true;
    }


})

    
