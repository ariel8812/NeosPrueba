"use strict";
exports.__esModule = true;
var Bar = /** @class */ (function () {
    function Bar(nom, cap) {
        this.nombre = nom;
        this.capacidad = cap;
    }
    return Bar;
}());
exports.Bar = Bar;
var BarMan = /** @class */ (function () {
    function BarMan(nom, ape) {
        this.nombre = nom;
        this.apellido = ape;
    }
    return BarMan;
}());
exports.BarMan = BarMan;
var Trago = /** @class */ (function () {
    function Trago(nom, col, cant) {
        this.nombre = nom;
        this.color = col;
        this.cantidad = cant;
    }
    return Trago;
}());
exports.Trago = Trago;
var bar1 = new Bar("Nueva Era", 50);
var bar2 = new Bar("El patio", 200);
var barman1 = new BarMan("juan", "perez");
var trago1 = new Trago("singani", "azul", 300);
console.log(bar1);
console.log(bar2);
console.log(barman1);
console.log(trago1);
