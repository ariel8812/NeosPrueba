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
    return Curso;
}());
exports.Curso = Curso;
var CompraCurso = /** @class */ (function () {
    function CompraCurso(c, e, f) {
        this.curso = c;
        this.estudiante = e;
        this.fecha = f;
    }
    return CompraCurso;
}());
exports.CompraCurso = CompraCurso;
