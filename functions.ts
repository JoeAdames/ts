function add(n1: number, n2:number) {
    return n1 + n2;
}

function printResult(num: number) { //contains void which means there is no return type, its not returning anything here so its void
    console.log('Result: ' + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
}
 
printResult(add(5, 12));

let combineValues: (a: number, b: number) =>  number; 

combineValues = add;

console.log(combineValues(8,8));


addAndHandle(10, 20, (result) => {
console.log(result);
})