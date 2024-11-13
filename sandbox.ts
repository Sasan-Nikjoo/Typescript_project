let greet: Function;

greet = () =>{
    console.log("hello peter");
}

greet();


//c is optional and has a defualt value
const addfunc = (a: number, b: number, c: number| string = 10) =>{
    console.log(a + b);
    console.log(c);
}

addfunc(2, 3, 13)