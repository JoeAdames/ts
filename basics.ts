function add( n1: number, n2: number ) { //you want to assign the types here because your function expects specific types for it to run
    console.log(typeof n1);
    return n1 + n2;
}

const number1 = 5 
// const number1: number = 5 typescript can infer the type from the variable or const but its bad practice.
const number2 = 2.8

const resultPhrase = 'Result:' //typescrupt knows that this is a string because we are setting it as a string


const result = add(number1, number2);

console.log(result);