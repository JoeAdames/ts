"use strict";
class Department {
    constructor(id, name, employees = []) {
        this.id = id;
        this.name = name;
        this.employees = employees;
    }
    describe() {
        console.log(`Department: (${this.id}): (${this.name})`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const accounting = new Department('1', 'Accounting', ['Guy', 'Person']);
accounting.addEmployee('Lorne');
accounting.addEmployee('Malvo');
accounting.describe();
accounting.printEmployeeInformation();
//# sourceMappingURL=app.js.map