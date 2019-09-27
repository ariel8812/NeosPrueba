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
    private docente: Docente[];

    public constructor(n: string, d: string, p: number, a: Docente[]){
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
let direccion1: Direccion = new Direccion("ciudad Rojo","barrio ligth","calle Oruro");
let direccion2: Direccion = new Direccion("ciudad Verde","barrio Dark","calle Brazil");
let direccion3: Direccion = new Direccion("ciudad Azul","barrio Wind","calle Sucre");
let direccion4: Direccion = new Direccion("ciudad Amarrillo","barrio Earth","calle España");
let direccion5: Direccion = new Direccion("ciudad Celeste","barrio Aqua","calle Bolivar");
let direccion6: Direccion = new Direccion("ciudad Gris","barrio Fire","calle Dorada");
let direccion7: Direccion = new Direccion("ciudad Morada","barrio Salvador","calle ciber");
console.log(direccion1);
console.log(direccion2);
console.log(direccion3);
console.log(direccion4);
console.log(direccion5);
console.log(direccion6);
console.log(direccion7);

let docenteAngel: Docente = new Docente("Angel","Antezana","angel@hotmail.com","Trainer",[direccion1,direccion2]);
let docenteJuan: Docente = new Docente("juan","Perez","juan@hotmail.con","QA",[direccion3,direccion1]);
let docentePedro: Docente = new Docente("Pedro","Rodriguez","pedro@hotmail.con","Programador",[direccion1,direccion4]);
let docenteDavid: Docente = new Docente("David","Perez","david@hotmail.con","Redes",[direccion4,direccion2]);
console.log(docenteAngel);
console.log(docenteJuan);
console.log(docentePedro);
console.log((docenteDavid));

let estudianteRed: Estudiante = new Estudiante("Red","Kanto","red@hotmail.com",[direccion5]);
let estudianteBlue: Estudiante = new Estudiante("Blue","Kanto","blue@hotmail.com",[direccion5]);
let estudianteGold: Estudiante = new Estudiante("Gold","Kanto","gold@hotmail.com",[direccion5]);
let estudianteRubi: Estudiante = new Estudiante("Rubi","Alola","rubi@hotmail.com",[direccion6]);
let estudianteZafiro: Estudiante = new Estudiante("Zafiro","Alola","zafiro@hotmail.com",[direccion6]);
let estudianteEsmeralda: Estudiante = new Estudiante("Esmeralda","Alola","gold@hotmail.com",[direccion6]);
let estudiantePerla: Estudiante = new Estudiante("Perla","Galar","perla@hotmail.com",[direccion7]);
let estudianteDiamante: Estudiante = new Estudiante("Diamante","Galar","diamante@hotmail.com",[direccion7]);
let estudiantePlatino: Estudiante = new Estudiante("Platino","Galar","platino@hotmail.com",[direccion7]);
let estudianteBlanca: Estudiante = new Estudiante("Blanca","Galar","blanca@hotmail.com",[direccion7]);
console.log(estudianteRed);
console.log(estudianteBlue);
console.log(estudianteGold);
console.log(estudianteRubi);
console.log(estudianteZafiro);
console.log(estudianteEsmeralda);
console.log(estudiantePerla);
console.log(estudianteDiamante);
console.log(estudiantePlatino);
console.log(estudianteBlanca);

let cursoProgramacion: Curso = new Curso("Programacion","leguaje de programacion",100,[docentePedro]);
let cursoInicialProgramacion: Curso = new Curso("Introduccion Programacion","curso basico",50,[docenteAngel]);
let cursoInicialRedes: Curso = new Curso("introduccion a Redes","curso basico",200,[docenteAngel]);
let cursoRedes: Curso = new Curso("Redes Avanzadas","curso avanzado",500,[docenteAngel,docenteDavid])
let cursoQA: Curso = new Curso("QA","curso intermedio",250,[docenteJuan]);
console.log(cursoProgramacion);
console.log(cursoInicialProgramacion);
console.log(cursoInicialRedes);
console.log(cursoRedes);
console.log(cursoQA);

let compraCurso1: CompraCurso = new CompraCurso(cursoInicialProgramacion,estudianteEsmeralda,"10 de agosto");
let compraCurso2: CompraCurso = new CompraCurso(cursoInicialRedes,estudianteRed,"10 de Enero");
let compraCurso3: CompraCurso = new CompraCurso(cursoRedes,estudianteBlanca,"10 de Marzo");
let compraCurso4: CompraCurso = new CompraCurso(cursoProgramacion,estudianteBlue,"10 de Junio");
let compraCurso5: CompraCurso = new CompraCurso(cursoQA,estudianteZafiro,"10 de Octubre");
let compraCurso6: CompraCurso = new CompraCurso(cursoProgramacion,estudiantePlatino,"10 de Junio");
let compraCurso7: CompraCurso = new CompraCurso(cursoInicialProgramacion,estudiantePerla,"10 de agosto");
let compraCurso8: CompraCurso = new CompraCurso(cursoInicialRedes,estudianteGold,"10 de Enero");
let compraCurso9: CompraCurso = new CompraCurso(cursoQA,estudianteRubi,"10 de Octubre");
let compraCurso10: CompraCurso = new CompraCurso(cursoInicialProgramacion,estudianteDiamante,"10 de agosto");
let compraCurso11: CompraCurso = new CompraCurso(cursoProgramacion,estudianteEsmeralda,"10 de junio");
let compraCurso12: CompraCurso = new CompraCurso(cursoRedes,estudianteRed,"10 de Marzo");
console.log(compraCurso1);
console.log(compraCurso2);
console.log(compraCurso3);
console.log(compraCurso4);
console.log(compraCurso5);
console.log(compraCurso6);
console.log(compraCurso7);
console.log(compraCurso8);
console.log(compraCurso9);
console.log(compraCurso10);
console.log(compraCurso11);
console.log(compraCurso12);





