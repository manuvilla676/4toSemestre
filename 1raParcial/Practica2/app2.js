//function statements 
function greet() {
    console.log("hi");
}
greet();
//Funtions are first-class --Pasarlas como parametros
function logGreeting(fn) {
    fn();
}
logGreeting(greet);
//function expresion --Asignar a una variable
let greetMe = function(){
    console.log("Hello Mau!");
}
greetMe();
//NOTE Types Strings 
var a = 10;
var b = 15;
//
//Strings literals --${} ´´
console.log(`Hola, esto es una variable ${a} y la otra es ${b}`);


//NOTE Arrows function
let greet2 = () =>{
    console.log("Hi");
}
greet2();
//function Parameter --Funciones a parametros "Refactor"
let logGreeting2 = (fn) =>{
    fn();
}
logGreeting2(greet2);

//Funtion expression on the fly --Funcion anonima pasada como parametro
logGreeting2(() =>{
    console.log("Hi");
});

