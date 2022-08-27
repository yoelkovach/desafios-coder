
let computadora = prompt("si quieren o necesitan un consejo para tarjetas graficas puede ingresar un minimo de 200 usd y un maximo de 800usd")  

if(computadora <= 200){ 
    alert("no hay tarjetas menor a "+ computadora)
}else if(computadora <= 400 ){
    alert("quizas te interece una 1650 o quizas una 6500")
}else if(computadora <= 600){
    alert("quizas te interece una 3060 o 3050")
}else if(computadora <= 800){
    alert("te podriamos aconsejar una 6800 o una muy recomendada 3080 ")
}

