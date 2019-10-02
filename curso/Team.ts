export class Miembro{
    protected nombre: string;
    protected edad: number;
    
    public constructor(nom: string,edad: number){
        this.nombre = nom;
        this.edad = edad;
    }
}
export class Jugador extends Miembro{
    private posicion: string;

    public constructor(nom: string,edad: number, pos:string){
        super(nom,edad);
        this.posicion = pos;
    }
}
export class Administrador extends Miembro{
    private cargo: string;

    public constructor(nom: string,edad: number,ca: string){
        super(nom,edad);
        this.cargo = ca;
    }
}
export class Coach extends Miembro{
    private experiencia: string;

    public constructor(nom: string,edad: number, ex: string){
        super(nom,edad);
        this.experiencia = ex;
    }
}
let miembro1: Miembro = new Jugador("Miracle",22,"hardCarry");
let miembro2: Miembro = new Jugador("Matubaman",20,"caryy");
let miembro3: Miembro = new Jugador("Dendi",23,"suport");
let miembro4: Miembro = new Coach("andreN",25,"5 años");
let miembro5: Miembro = new Administrador("Roger",30,"Financiero");
let teamLiquid: Miembro[] = [];
teamLiquid.push(miembro1,miembro2,miembro3,miembro4,miembro5);
console.log(teamLiquid);

let listaJugadores: Jugador[] = [];
let listaAdministradores: Administrador[] = [];
let listaCoach: Coach[] = [];
for(let i: number = 0; i < teamLiquid.length; i++){
    if (teamLiquid[i] instanceof Jugador) {
        listaJugadores.push(teamLiquid[i] as Jugador);
    }else{
        if (teamLiquid[i] instanceof Coach) {
            listaCoach.push(teamLiquid[i] as Coach);
        }else{
            listaAdministradores.push(teamLiquid[i] as Administrador);
        }
    }
}
console.log(listaJugadores);
console.log(listaAdministradores);
console.log(listaCoach);


 

