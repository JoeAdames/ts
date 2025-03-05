class Department {
    constructor(
        private readonly id: string, 
        public name: string,  
        private employees: string[] = []
    ) {} //how to write class properties in shorthand

    //using readonly will not allow you to make any changes to the item makes your intention clear the goal is not to change the readonly property



    describe(this: Department) {
                console.log(`Department: (${this.id}): (${this.name})`);
            }
        
            addEmployee(employee: string) {
                this.employees.push(employee);
            }
        
            printEmployeeInformation() {
                console.log(this.employees.length);
                console.log(this.employees);
            }
}

class ITDepartment extends Department {
    constructor(id: string, public admins: string[]) {
        super(id, 'IT');
    }
}

const accounting = new Department('1','Accounting', ['Guy', 'Person']);

accounting.addEmployee('Lorne');
accounting.addEmployee('Malvo');

accounting.describe();
accounting.printEmployeeInformation();

//This is the long hand version
// class Department { 
//     name: string;
//     private employees:string[] = [] //a property only accessible via the class due to private keyword modifier

//     constructor(n:string) {
//         this.name = n;
//     }

//     describe(this: Department) {
//         console.log('Deparment: ' + this.name);
//     }

//     addEmployee(employee: string) {
//         this.employees.push(employee);
//     }

//     printEmployeeInformation() {
//         console.log(this.employees.length);
//         console.log(this.employees);
//     }
// }

// const accounting = new Department('Accounting');

// accounting.addEmployee('Guy');
// accounting.addEmployee('Person');

// accounting.describe();
// accounting.printEmployeeInformation();