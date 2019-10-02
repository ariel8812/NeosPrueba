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
export class Cliente{
    protected nombreCliente: string;
    protected apellidoCliente: string;

    public constructor(nom: string, ape: string){
        this.nombreCliente = nom;
        this.apellidoCliente = ape;
    }
}
export class DiscoOptico{
    protected nombrePeli: string;
    protected precioDisco: number;
   
    public constructor(nom: string, pre: number){
        this.nombrePeli = nom;
        this.precioDisco = pre;
    }
    public getPrecio(): number{
        return this.precioDisco
    }
}
export class Cd extends DiscoOptico{
    public constructor(nom: string, pre: number){
        super(nom,pre);
    }
}
export class Dvd extends DiscoOptico{
    public constructor(nom: string, pre: number){
        super(nom,pre);
    }
}
export class BluRays extends DiscoOptico{
    public constructor(nom: string, pre: number){
        super(nom,pre);
    }
}
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
export class VentaDisco{
    private disco: DiscoOptico[];
    private cliente: Cliente;
    private fecha: string

    public constructor(dis: DiscoOptico[], cli: Cliente, fe: string){
        this.disco = dis;
        this.cliente = cli;
        this.fecha = fe;
    }
    public getDisco(num): DiscoOptico{
        return this.disco[num];
    }
    public getTamañoDisco(): number{
        return this.disco.length;
    }
}
export class Tienda{
    private nombreTienda: string;
    private ventaDisco: VentaDisco[];

    public constructor(nom: string,ven: VentaDisco[]){
        this.nombreTienda = nom;
        this.ventaDisco = ven;
    }
    public realizarVenta(ven: VentaDisco): void{
        this.ventaDisco.push(ven);
    }
    public totalCdsVendidos():number {
        let acum: number = 0;
        for(let i: number = 0; i < this.ventaDisco.length;i++){
            for(let j: number = 0; j < this.ventaDisco[i].getTamañoDisco();j++){
                if(this.ventaDisco[i].getDisco(j) instanceof Cd){
                   acum = acum + this.ventaDisco[i].getDisco(j).getPrecio();
                }else{
                    acum;
                }
            }
        }
        return acum;
    }
    /**public totalDvdsVendidos():number {
        let acum: number = 0;
        for(let i: number = 0; i < this.ventaDisco.length;i++){
            if(this.ventaDisco[i].getDisco() instanceof Dvd){
                acum = acum + this.ventaDisco[i].getDisco().getPrecio();
            }else{
                acum;
            }
        }
        return acum;
    }
    public totalBluRaysVendidos():number {
        let acum: number = 0;
        for(let i: number = 0; i < this.ventaDisco.length;i++){
            if(this.ventaDisco[i].getDisco() instanceof BluRays){
                acum = acum + this.ventaDisco[i].getDisco().getPrecio();
            }else{
                acum;
            }
        }
        return acum;
    }
    public totalDiscosVendidos():number {
        let acum: number = 0;
        for(let i: number = 0; i < this.ventaDisco.length;i++){
                acum = acum + this.ventaDisco[i].getDisco().getPrecio();
        }
        return acum;
    }
*/
}
let roger: Cliente = new Cliente ("Roger","Perez")
let cd1: DiscoOptico = new Cd ("aladin",50);
let dvd1: DiscoOptico = new Dvd("Tarzan",60);
let cd2: DiscoOptico = new Cd("Mulan",40);
let BluRays1: DiscoOptico = new BluRays("Rey Leon",80);
let cd3: DiscoOptico = new Cd("Dumbo",40)
let venta1: VentaDisco = new VentaDisco([cd1,cd3],roger,"10 de octubre");
let venta2: VentaDisco = new VentaDisco([dvd1],roger,"12 de octubre");
let venta3: VentaDisco = new VentaDisco([cd2],roger,"13 de noviembre");
let venta4: VentaDisco = new VentaDisco([BluRays1],roger,"15 de noviembre");
console.log(venta1);
let tienda1: Tienda = new Tienda("juan",[venta1]);
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












