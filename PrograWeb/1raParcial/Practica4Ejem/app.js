//var b = {}; es un objeto vacio
//NOTE Objects literals
//JSON 
/*var objeto = {
    code: code, //Key values pairs 
    name: name,
    telephone: telephone
};*/
//JSON compuesto
/*var objeto2 = {
    code: "0001", //Key values pairs 
    name: "Mau",
    telephone: "3141091464",
    direccion={
        calle: "Madero",
        colonia: "Centro",
        codigoPostal: "2800"
    }
};*/
let person ={
    firstname: 'John',
    lastname: 'Doe',
    greet: function(){
        console.log(`Hola, esto es una variable ${person.firstname} ${person.lastname}`);
    }
}
//NOTE Atraer una key
//Notacion puntos 
console.log(person.greet());
//Con brakets
console.log(person['firstname']);
//Module Patterns
//APIS