"use strict";
exports.__esModule = true;
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
var Estudiante = /** @class */ (function () {
    function Estudiante(nom, ape, cor, dir) {
        this.nombre = nom;
        this.apellido = ape;
        this.correo = cor;
        this.direccion = dir;
    }
    Estudiante.prototype.añadirNuevaDirEst = function (dir) {
        this.direccion.push(dir);
    };
    return Estudiante;
}());
exports.Estudiante = Estudiante;
var Docente = /** @class */ (function () {
    function Docente(nom, ape, cor, pro, dir) {
        this.nombre = nom;
        this.apellido = ape;
        this.correo = cor;
        this.profecion = pro;
        this.direccion = dir;
    }
    Docente.prototype.añadirNuevaDirDoc = function (dir) {
        this.direccion.push(dir);
    };
    return Docente;
}());
exports.Docente = Docente;
var Direccion = /** @class */ (function () {
    function Direccion(c, b, a) {
        this.ciudad = c;
        this.barrio = b;
        this.calle = a;
    }
    return Direccion;
}());
exports.Direccion = Direccion;
var Curso = /** @class */ (function () {
    function Curso(n, d, p, a) {
        this.nombre = n;
        this.descripcion = d;
        this.precio = p;
        this.docente = a;
    }
    Curso.prototype.getPrecio = function () {
        return this.precio;
    };
    return Curso;
}());
exports.Curso = Curso;
var CompraCurso = /** @class */ (function () {
    function CompraCurso(c, e, f) {
        this.curso = c;
        this.estudiante = e;
        this.fecha = f;
    }
    CompraCurso.prototype.getCurso = function () {
        return this.curso;
    };
    return CompraCurso;
}());
exports.CompraCurso = CompraCurso;
var PlataformaEducativa = /** @class */ (function () {
    function PlataformaEducativa(nom, regi) {
        this.nombre = nom;
        this.registroCursoComprado = regi;
    }
    PlataformaEducativa.prototype.registrarVenta = function (com) {
        this.registroCursoComprado.push(com);
    };
    PlataformaEducativa.prototype.totalIngreso = function () {
        var acum = 0;
        var compraCursoIndex;
        var cursoIndex;
        for (var i = 0; i < this.registroCursoComprado.length; i++) {
            compraCursoIndex = this.registroCursoComprado[i];
            cursoIndex = compraCursoIndex.getCurso();
            acum = acum + cursoIndex.getPrecio();
        }
        return acum;
    };
    return PlataformaEducativa;
}());
exports.PlataformaEducativa = PlataformaEducativa;
var direccion1 = new Direccion("ciudad Rojo", "barrio ligth", "calle Oruro");
var direccion2 = new Direccion("ciudad Verde", "barrio Dark", "calle Brazil");
var direccion3 = new Direccion("ciudad Azul", "barrio Wind", "calle Sucre");
var direccion4 = new Direccion("ciudad Amarrillo", "barrio Earth", "calle España");
var direccion5 = new Direccion("ciudad Celeste", "barrio Aqua", "calle Bolivar");
var direccion6 = new Direccion("ciudad Gris", "barrio Fire", "calle Dorada");
var direccion7 = new Direccion("ciudad Morada", "barrio Salvador", "calle ciber");
console.log(direccion1);
console.log(direccion2);
console.log(direccion3);
console.log(direccion4);
console.log(direccion5);
console.log(direccion6);
console.log(direccion7);
var docenteAngel = new Docente("Angel", "Antezana", "angel@hotmail.com", "Trainer", [direccion1, direccion2]);
var docenteJuan = new Docente("juan", "Perez", "juan@hotmail.con", "QA", [direccion3, direccion1]);
var docentePedro = new Docente("Pedro", "Rodriguez", "pedro@hotmail.con", "Programador", [direccion1, direccion4]);
var docenteDavid = new Docente("David", "Perez", "david@hotmail.con", "Redes", [direccion4, direccion2]);
console.log(docenteAngel);
console.log(docenteJuan);
console.log(docentePedro);
console.log((docenteDavid));
var estudianteRed = new Estudiante("Red", "Kanto", "red@hotmail.com", [direccion5]);
var estudianteBlue = new Estudiante("Blue", "Kanto", "blue@hotmail.com", [direccion5]);
var estudianteGold = new Estudiante("Gold", "Kanto", "gold@hotmail.com", [direccion5]);
var estudianteRubi = new Estudiante("Rubi", "Alola", "rubi@hotmail.com", [direccion6]);
var estudianteZafiro = new Estudiante("Zafiro", "Alola", "zafiro@hotmail.com", [direccion6]);
var estudianteEsmeralda = new Estudiante("Esmeralda", "Alola", "gold@hotmail.com", [direccion6]);
var estudiantePerla = new Estudiante("Perla", "Galar", "perla@hotmail.com", [direccion7]);
var estudianteDiamante = new Estudiante("Diamante", "Galar", "diamante@hotmail.com", [direccion7]);
var estudiantePlatino = new Estudiante("Platino", "Galar", "platino@hotmail.com", [direccion7]);
var estudianteBlanca = new Estudiante("Blanca", "Galar", "blanca@hotmail.com", [direccion7]);
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
var cursoProgramacion = new Curso("Programacion", "leguaje de programacion", 100, [docentePedro]);
var cursoInicialProgramacion = new Curso("Introduccion Programacion", "curso basico", 50, [docenteAngel]);
var cursoInicialRedes = new Curso("introduccion a Redes", "curso basico", 200, [docenteAngel]);
var cursoRedes = new Curso("Redes Avanzadas", "curso avanzado", 500, [docenteAngel, docenteDavid]);
var cursoQA = new Curso("QA", "curso intermedio", 250, [docenteJuan]);
console.log(cursoProgramacion);
console.log(cursoInicialProgramacion);
console.log(cursoInicialRedes);
console.log(cursoRedes);
console.log(cursoQA);
var compraCurso1 = new CompraCurso(cursoInicialProgramacion, estudianteEsmeralda, "10 de agosto");
var compraCurso2 = new CompraCurso(cursoInicialRedes, estudianteRed, "10 de Enero");
var compraCurso3 = new CompraCurso(cursoRedes, estudianteBlanca, "10 de Marzo");
var compraCurso4 = new CompraCurso(cursoProgramacion, estudianteBlue, "10 de Junio");
var compraCurso5 = new CompraCurso(cursoQA, estudianteZafiro, "10 de Octubre");
var compraCurso6 = new CompraCurso(cursoProgramacion, estudiantePlatino, "10 de Junio");
var compraCurso7 = new CompraCurso(cursoInicialProgramacion, estudiantePerla, "10 de agosto");
var compraCurso8 = new CompraCurso(cursoInicialRedes, estudianteGold, "10 de Enero");
var compraCurso9 = new CompraCurso(cursoQA, estudianteRubi, "10 de Octubre");
var compraCurso10 = new CompraCurso(cursoInicialProgramacion, estudianteDiamante, "10 de agosto");
var compraCurso11 = new CompraCurso(cursoProgramacion, estudianteEsmeralda, "10 de junio");
var compraCurso12 = new CompraCurso(cursoRedes, estudianteRed, "10 de Marzo");
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
console.log(docenteAngel);
docenteAngel.añadirNuevaDirDoc(direccion3);
console.log(docenteAngel);
console.log(estudianteRed);
estudianteRed.añadirNuevaDirEst(direccion1);
console.log(estudianteRed);
var plataforma1 = new PlataformaEducativa("Hero", [compraCurso3]);
console.log(plataforma1);
plataforma1.registrarVenta(compraCurso12);
var sum = plataforma1.totalIngreso();
console.log(plataforma1);
console.log(sum);
