class Person{
    //properties
    private firstname: string;
    private lastname: string;

    // constructor
    constructor(firstname:string,lastname:string){
        this.firstname = firstname;
        this.lastname = lastname;
    }

    // method to get full name
    getfullname():string{
        return `${this.firstname} ${this.lastname}`;
    }
}

// Create instance of the person class
const Person1 = new Person("Archit","Goel");
const Person2 = new Person("Neeraj","Mittal");

// Display full name
console.log(Person1.getfullname());
console.log(Person2.getfullname());