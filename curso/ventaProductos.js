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
/**
 * Resuelva el siguiente problema usando programacion orientada objetos
 * y herencia: se nesecita implementar un sistema para la venta de peliculas en formatos cd,dvd,blue rays
 * Donde debe estar involucrado el cliente.
 * Se debe guardar cds, dvds, blu-rays en una misma lista.
 * Se debe poder calcular el monto total percibido por la venta de dvds
 * Se debe poder calcular el monto total percibido por la venta cds
 * Se debe poder calcular el monto total percibido por la venta de blu-rays
 * Se debe poder calcular el monto total percibido por la venta de cds, dvds, y blu-rays
 * Los 3 tipos de discos deben guardar en una lista.
 * */
var Cliente = /** @class */ (function () {
    function Cliente(nom, ape) {
        this.nombreCliente = nom;
        this.apellidoCliente = ape;
    }
    return Cliente;
}());
exports.Cliente = Cliente;
var DiscoOptico = /** @class */ (function () {
    function DiscoOptico(nom, pre) {
        this.nombrePeli = nom;
        this.precioDisco = pre;
    }
    DiscoOptico.prototype.getPrecio = function () {
        return this.precioDisco;
    };
    return DiscoOptico;
}());
exports.DiscoOptico = DiscoOptico;
var Cd = /** @class */ (function (_super) {
    __extends(Cd, _super);
    function Cd(nom, pre) {
        return _super.call(this, nom, pre) || this;
    }
    return Cd;
}(DiscoOptico));
exports.Cd = Cd;
var Dvd = /** @class */ (function (_super) {
    __extends(Dvd, _super);
    function Dvd(nom, pre) {
        return _super.call(this, nom, pre) || this;
    }
    return Dvd;
}(DiscoOptico));
exports.Dvd = Dvd;
var BluRays = /** @class */ (function (_super) {
    __extends(BluRays, _super);
    function BluRays(nom, pre) {
        return _super.call(this, nom, pre) || this;
    }
    return BluRays;
}(DiscoOptico));
exports.BluRays = BluRays;
//(instancia de discoptico, instancia de cliente)
/**export class VentaDisco{
    private registro: DiscoOptico[];

    public constructor(re: DiscoOptico[]){
        this.registro = re;
    }
    public añadirDisco(dis: DiscoOptico): void{
        this.registro.push(dis);
    }
    public totalCdVendidos(): number{
        let acum: number = 0;
        for(let i:number = 0; i< this.registro.length; i++){
            if (this.registro[i].getFormatoDisco() == "cd") {
                acum = acum + this.registro[i].getPrecio();
            }else{
                acum;
            }
        }
        return acum;
    }
}
*/
//Tienda
//private registro: DiscoOptico[];
var VentaDisco = /** @class */ (function () {
    function VentaDisco(dis, cli, fe) {
        this.disco = dis;
        this.cliente = cli;
        this.fecha = fe;
    }
    VentaDisco.prototype.getDisco = function (num) {
        return this.disco[num];
    };
    VentaDisco.prototype.getTamañoDisco = function () {
        return this.disco.length;
    };
    return VentaDisco;
}());
exports.VentaDisco = VentaDisco;
var Tienda = /** @class */ (function () {
    function Tienda(nom, ven) {
        this.nombreTienda = nom;
        this.ventaDisco = ven;
    }
    Tienda.prototype.realizarVenta = function (ven) {
        this.ventaDisco.push(ven);
    };
    Tienda.prototype.totalCdsVendidos = function () {
        var acum = 0;
        for (var i = 0; i < this.ventaDisco.length; i++) {
            for (var j = 0; j < this.ventaDisco[i].getTamañoDisco(); j++) {
                if (this.ventaDisco[i].getDisco(j) instanceof Cd) {
                    acum = acum + this.ventaDisco[i].getDisco(j).getPrecio();
                }
                else {
                    acum;
                }
            }
        }
        return acum;
    };
    return Tienda;
}());
exports.Tienda = Tienda;
var roger = new Cliente("Roger", "Perez");
var cd1 = new Cd("aladin", 50);
var dvd1 = new Dvd("Tarzan", 60);
var cd2 = new Cd("Mulan", 40);
var BluRays1 = new BluRays("Rey Leon", 80);
var cd3 = new Cd("Dumbo", 40);
var venta1 = new VentaDisco([cd1, cd3], roger, "10 de octubre");
var venta2 = new VentaDisco([dvd1], roger, "12 de octubre");
var venta3 = new VentaDisco([cd2], roger, "13 de noviembre");
var venta4 = new VentaDisco([BluRays1], roger, "15 de noviembre");
console.log(venta1);
var tienda1 = new Tienda("juan", [venta1]);
console.log(tienda1);
tienda1.realizarVenta(venta2);
console.log(tienda1);
console.log(tienda1.totalCdsVendidos());
tienda1.realizarVenta(venta3);
tienda1.realizarVenta(venta4);
console.log(tienda1);
console.log(tienda1.totalCdsVendidos());
//console.log(tienda1.totalDvdsVendidos());
//console.log(tienda1.totalBluRaysVendidos());
//console.log(tienda1.totalDiscosVendidos());
