// const person: {
//     name: string;
//     age: number
// } dont do this. bad practice.
const person = {
        name: 'Guy',
        age: 30,
        hobbies: ['cooking', 'yoga']
    }

    let favoriteActivities: string[];

console.log(person);

//in the event that the inference doesnt work with what you want, setting an object with specific type assignment does work


const person2: { 
    name: string,
    age: number,
    hobbies: string[],
    role: [number, string] //this is stating that role should have 2 elements - this is a tuple fixed length array
} = {
    name: 'Guy',
    age: 40,
    hobbies: ['cooking', 'yoga'],
    role: [2, 'line-cook']
}

enum Role {ADMIN, READ_ONLY, AUTHOR}; //custom type that will create numbered items, can be assinged

const person3 = {
    name: 'Guy',
    age: 40,
    hobbies: ['cooking', 'yoga'],
    role: Role.ADMIN
}

enum Roles {ADMIN = 5, READ_ONLY, AUTHOR = 'Author'};  //assigned number or string if you want


let randomArr: any[];
randomArr = ['SomethingHere'] // using any jumps out of TS and just makes it so youre writing normal js..