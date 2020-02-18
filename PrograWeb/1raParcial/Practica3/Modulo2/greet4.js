function Greet() {
    this.greeting = 'Hello world!!';
    this.greet = function () {
        console.log(this.greeting);
    }
}
//Modulo que exporta una clase
module.exports = Greet;