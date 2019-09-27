/**
 * se nesecita resolver el siguiente problema
 * usando programacion orientada a objetos,
 * se desea realizar un sistema de venta de cursos online
 * como por ejemplo Udemy, Platzi, etc
 * para ello se nesecita interactuar con estudiantes,
 * profesores de los mismos se nesecita registrar su 
 * informacion basica como nombre, apellido, correo, direccion;
 * por otra parte se necesita interactuar con los 
 * cursos que se impartiran de los mismos se nesecita
 * registrar su precio, nombre, descripcion; finalmente
 * se desea guardar el registro de los estudiante que compraron algun curso.
 * Un estudiante o profesor puede tener una o mas direcciones, al mismo 
 * tiempo una direccion esta compuesta por la siguiente informacion:
 * cuidad, barrio, calle
 */
export class Estudiante{
    private nombre: string;
    private apellido: string;
    private correo: string;
    private direccion: Direccion[];

    public constructor(nom: string,ape: string, cor: string, dir: Direccion[]){
        this.nombre = nom;
        this.apellido = ape;
        this.correo = cor;
        this.direccion = dir;
    }
}
export class Docente{
    private nombre: string;
    private apellido: string;
    private correo: string;
    private profecion: string;
    private direccion: Direccion[];

    public constructor(nom: string,ape: string, cor: string,pro: string, dir: Direccion[]){
        this.nombre = nom;
        this.apellido = ape;
        this.correo = cor;
        this.profecion = pro;
        this.direccion = dir;
    }
}
export class Direccion{
    private ciudad: string;
    private barrio: string;
    private calle: string;

    public constructor(c: string, b: string, a: string){
        this.ciudad = c;
        this.barrio = b;
        this.calle = a;
    }
}
export class Curso{
    private nombre: string;
    private descripcion: string;
    private precio: number;
    private docente: Docente;

    public constructor(n: string, d: string, p: number, a: Docente){
        this.nombre = n;
        this.descripcion = d;
        this.precio = p;
        this.docente = a;
    }
}
export class CompraCurso{
    private curso: Curso;
    private estudiante: Estudiante;
    private fecha : string;

    public constructor(c: Curso, e: Estudiante, f: string){
        this.curso = c;
        this.estudiante = e;
        this.fecha = f;
    }
}