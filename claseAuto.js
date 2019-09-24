"use strict";
exports.__esModule = true;
var Auto = /** @class */ (function () {
    function Auto(_ruedas, _color, _puertas, _marca, _modelo) {
        this.ruedas = _ruedas;
        this.color = _color;
        this.puertas = _puertas;
        this.marca = _marca;
        this.modelo = _modelo;
    }
    return Auto;
}());
exports.Auto = Auto;
var flota = new Auto(4, "rojo", 1, "Toyota", "x10");
console.log(flota);
