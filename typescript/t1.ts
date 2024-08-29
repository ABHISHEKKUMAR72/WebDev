class person{
    private firstname: string;
    private lastname: string;

    constructor(firstname: string, lastname: string){
        this.firstname = firstname;
        this.lastname = lastname;
    }

    getFullName(): string{
        return `${this.firstname} ${this.lastname}`;
    }}

    const p = new person('Mayank', 'Pandey');
    console.log(p.getFullName());

    const p2 = new person('Anurag', 'Pandey');
    console.log(p2.getFullName());


    