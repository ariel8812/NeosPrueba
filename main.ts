export class Bar{
    nombre: string;//atributo
    capacidad: number;//atributo
    constructor(nom:string, cap:number){
        this.nombre = nom;
        this.capacidad = cap;
    }
}
export class BarMan{
    nombre: string;
    apellido: string;
    constructor(nom:string, ape:string){
        this.nombre = nom;
        this.apellido = ape;
    }
}
export class Trago{
    nombre: string;
    color: string;
    cantidad: number;
    constructor(nom:string, col: string, cant: number){
        this.nombre = nom;
        this.color = col;
        this.cantidad = cant;
    }
}
let bar1: Bar = new Bar("Nueva Era",50);
let bar2: Bar = new Bar("El patio",200);
let barman1: BarMan = new BarMan("juan","perez");
let trago1: Trago = new Trago("singani","azul",300)

console.log(bar1);
console.log(bar2);
console.log(barman1);
console.log(trago1);



