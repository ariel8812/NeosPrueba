export class Bar{
    private nombre: string;//atributo
    private capacidad: number;//atributo
    
    constructor(nom:string, cap:number){
        this.nombre = nom;
        this.capacidad = cap;
    }
    public setNombre(nom: string):void{
        this.nombre = nom;
    }
    public setCapacidad(cap: number):void{
        this.capacidad = cap;
    }
    public getNombre(): string{
        return this.nombre;
    }
    public getCapacidad(): number{
        return this.capacidad;
    }
}
export class BarMan{
    private nombre: string;
    private apellido: string;
    
    constructor(nom: string, ape: string){
        this.nombre = nom;
        this.apellido = ape;
    }
    public setNombre(nom: string):void{
        this.nombre = nom;
    }
    public setApellido(ape: string):void{
        this.apellido = ape;
    }
    public getNombre(): string{
        return this.nombre;
    }
    public getApellido(): string{
        return this.apellido;
    }
}
export class Trago{
    private nombre: string;
    private color: string;
    private cantidad: number;
    
    constructor(nom:string, col: string, cant: number){
        this.nombre = nom;
        this.color = col;
        this.cantidad = cant;
    }
    public setNombre(nom: string):void{
        this.nombre = nom;
    }
    public setColor(col: string):void{
        this.color = col;
    }
    public setCantidad(cant: number):void{
        this.cantidad = cant;
    }
    public getNombre(): string{
        return this.nombre;
    }
    public getColor(): string{
        return this.color;
    }
    public getCantidad(): number{
        return this.cantidad;
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
//bar1.nombre = "pueblito"; forma incorrecta
bar1.setNombre("el Pueblito");
//console.log(bar1.nombre); forma incorrecta
console.log(bar1.getNombre());
console.log(barman1.getNombre());





