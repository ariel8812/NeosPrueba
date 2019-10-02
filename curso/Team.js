"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Miembro = /** @class */ (function () {
    function Miembro(nom, edad) {
        this.nombre = nom;
        this.edad = edad;
    }
    return Miembro;
}());
exports.Miembro = Miembro;
var Jugador = /** @class */ (function (_super) {
    __extends(Jugador, _super);
    function Jugador(nom, edad, pos) {
        var _this = _super.call(this, nom, edad) || this;
        _this.posicion = pos;
        return _this;
    }
    return Jugador;
}(Miembro));
exports.Jugador = Jugador;
var Administrador = /** @class */ (function (_super) {
    __extends(Administrador, _super);
    function Administrador(nom, edad, ca) {
        var _this = _super.call(this, nom, edad) || this;
        _this.cargo = ca;
        return _this;
    }
    return Administrador;
}(Miembro));
exports.Administrador = Administrador;
var Coach = /** @class */ (function (_super) {
    __extends(Coach, _super);
    function Coach(nom, edad, ex) {
        var _this = _super.call(this, nom, edad) || this;
        _this.experiencia = ex;
        return _this;
    }
    return Coach;
}(Miembro));
exports.Coach = Coach;
var miembro1 = new Jugador("Miracle", 22, "hardCarry");
var miembro2 = new Jugador("Matubaman", 20, "caryy");
var miembro3 = new Jugador("Dendi", 23, "suport");
var miembro4 = new Coach("andreN", 25, "5 años");
var miembro5 = new Administrador("Roger", 30, "Financiero");
var teamLiquid = [];
teamLiquid.push(miembro1, miembro2, miembro3, miembro4, miembro5);
console.log(teamLiquid);
var listaJugadores = [];
var listaAdministradores = [];
var listaCoach = [];
for (var i = 0; i < teamLiquid.length; i++) {
    if (teamLiquid[i] instanceof Jugador) {
        listaJugadores.push(teamLiquid[i]);
    }
    else {
        if (teamLiquid[i] instanceof Coach) {
            listaCoach.push(teamLiquid[i]);
        }
        else {
            listaAdministradores.push(teamLiquid[i]);
        }
    }
}
console.log(listaJugadores);
console.log(listaAdministradores);
console.log(listaCoach);
