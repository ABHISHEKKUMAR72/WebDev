class person{
    private name: string;   
    private age: number;
    private salary: number;
    constructor(name: string, age: number, salary: number){
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    getSalary(){
        return this.salary;
    }
    getAge(){
        return this.age;
    }
    getName(){
        return this.name;
    }
}

const person1 = new person("mayank khan", 22, 30000);
console.log(person1.getName());
console.log(person1.getAge());
console.log(person1.getSalary());

const person2 = new person("Anhsu Ahemed", 23, 40000);
console.log(person2.getName());
console.log(person2.getAge());
console.log(person2.getSalary());