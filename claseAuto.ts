export class Auto{
    ruedas: number;
    color: string;
    puertas: number;
    marca: string;
    modelo: string;
    constructor(_ruedas,_color,_puertas,_marca,_modelo){
        this.ruedas = _ruedas;
        this.color = _color;
        this.puertas = _puertas;
        this.marca =_marca;
        this.modelo =_modelo;
    }
}
let flota: Auto = new Auto(4,"rojo",1,"Toyota","x10");
console.log(flota);
