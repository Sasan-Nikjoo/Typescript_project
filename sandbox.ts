//8
// let greet: Function;

// greet = () =>{
//     console.log("hello peter");
// }

// greet();


// //c is optional and has a defualt value
// const addfunc = (a: number, b: number, c: number| string = 10) =>{
//     console.log(a + b);
//     console.log(c);
// }

// addfunc(2, 3, 13)

//---------------------------------------------------
//9

//use the types beside writing the selected types all the time
// type StringOrNum = string | number;
// type ObjWithName = {name: string, uid: StringOrNum};

// const logDetails = (uid: StringOrNum, item: string)=>{
//     console.log('${item} has a uid of ${uid}');
// }

// const greet = (user: ObjWithName) =>{
//     console.log('${user.name} says hello')
// }

// logDetails(4012262061, "book");
// greet({name: "sasan", uid:4012262061});

//---------------------------------------------------
//10
// Function Signatures

//ex1
let greet: (a: string, b:string)=> void;
greet = (name: string, greeting: string)=>{
    console.log('${name} says ${greeting}')
}

//ex2
let sumie: (a: number, b: number, c: number) => number;

sumie = (num1: number, num2: number, num3: number) =>{
    return num1 + num2 + num3;
}

//ex3
type Person = {name: string, age: number};

let logDetails: (obj: Person) => void;

logDetails = (person: Person) =>{
    console.log("${person.name} is ${person.age} years old");
}