"use strict";
exports.__esModule = true;
var Bar = /** @class */ (function () {
    function Bar(nom, cap) {
        this.nombre = nom;
        this.capacidad = cap;
    }
    Bar.prototype.setNombre = function (nom) {
        this.nombre = nom;
    };
    Bar.prototype.setCapacidad = function (cap) {
        this.capacidad = cap;
    };
    Bar.prototype.getNombre = function () {
        return this.nombre;
    };
    Bar.prototype.getCapacidad = function () {
        return this.capacidad;
    };
    return Bar;
}());
exports.Bar = Bar;
var BarMan = /** @class */ (function () {
    function BarMan(nom, ape) {
        this.nombre = nom;
        this.apellido = ape;
    }
    BarMan.prototype.setNombre = function (nom) {
        this.nombre = nom;
    };
    BarMan.prototype.setApellido = function (ape) {
        this.apellido = ape;
    };
    BarMan.prototype.getNombre = function () {
        return this.nombre;
    };
    BarMan.prototype.getApellido = function () {
        return this.apellido;
    };
    return BarMan;
}());
exports.BarMan = BarMan;
var Trago = /** @class */ (function () {
    function Trago(nom, col, cant) {
        this.nombre = nom;
        this.color = col;
        this.cantidad = cant;
    }
    Trago.prototype.setNombre = function (nom) {
        this.nombre = nom;
    };
    Trago.prototype.setColor = function (col) {
        this.color = col;
    };
    Trago.prototype.setCantidad = function (cant) {
        this.cantidad = cant;
    };
    Trago.prototype.getNombre = function () {
        return this.nombre;
    };
    Trago.prototype.getColor = function () {
        return this.color;
    };
    Trago.prototype.getCantidad = function () {
        return this.cantidad;
    };
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
//bar1.nombre = "pueblito"; forma incorrecta
bar1.setNombre("el Pueblito");
//console.log(bar1.nombre); forma incorrecta
console.log(bar1.getNombre());
console.log(barman1.getNombre());
