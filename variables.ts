let disabled: boolean = true;//true or false
console.log(disabled);
let firtsName: string = "angel";
console.log(firtsName);
let greeting: string = `hello ${firtsName}`;
console.log(greeting);
let list: Array<number> = [3, 7];
console.log(list);



let nombre = "Juan Perez";

function ejemplo() {
    let x: number = 100;
    for (let m = 0; m < 10; m++) {
        let y = 200;
        console.log("variable x dentro del for", x);
        console.log("variable y dentro del for", y);
    }
    console.log("variable x fuera del for", x);
    // console.log("variable y fuera del for",y); // error por el el tipo de declaracion
}
ejemplo()



// Template Strings
let name1: string = "Luis";
let sentence: string = "Hello, my name is " + name1;
let betterSentence: string = `Hello, 
    my name is ${ name1}.`
console.log(betterSentence);
