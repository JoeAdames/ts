let userInput:  unknown; //unknown is when we dont know what will be returned not to be confused with any
let userName: string;



userInput = 5;
userInput = 'Guy';
// userName = userInput; this doesnt work because unknown doesnt allow you to assign an unknown to a string


//however if you typecheck the unknown you can assign to a fixed type
if(typeof userInput ===  'string') {
    userName = userInput;
}

function generateError(message: string, code: number): never { //will never return anything different from void the intend of this is to never return 
    throw {message: message, errorCode: code}
}

generateError('Error happened', 500);