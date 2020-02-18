//Exporto todo el modulo
var greet = require('./greet1')
greet();
//Exporto nada mas un metodo del modulo
var greet2 = require('./greet2').greet;
greet2();
//Exporto un objeto/clase
var greet3 = require('./greet3');
greet3.greet();
//Accedo al modulo en su direccion y lo edito
greet3.greeting = 'Changed hello world';
var greet3b = require('./greet3');
greet3b.greet();
//Creo intancias nuevas de un objeto/clase
var Greet4 = require('./greet4');
var gtr4 = new Greet4();
gtr4.greet();
//