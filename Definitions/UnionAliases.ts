type Combinable = number | string;
type ConversionDescription = 'as-number' | 'as-text' //literal types + union types as type alias or custom type

function combine( 
    input1: Combinable, 
    input2: Combinable, 
    resultType: ConversionDescription
) {  //union type 
    let result;
    if( typeof input1 === 'number' && typeof input2 === 'number' || resultType === 'as-number') { //literal types
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    // if( resultType === 'as-number') {
    //     return +result;
    // } else {
    //     return resultType.toString();
    // }

    return result;
}

const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges);

const combinedNames = combine('guy', 'steve', 'as-text');
console.log(combinedNames);