interface Shape{
    area():number;
    perimeter():number;
}

class Rectangle implements Shape{
    
    perimeter(): number {
        return 2 * (this.width + this.height);
    }
    width: number;
    height: number;

    constructor(width: number, height: number){
        this.width = width;
        this.height = height;
    }
    area(): number{
        return this.width * this.height;
    }

}
const rectangle = new Rectangle(10, 20);
console.log("Rectanle Area",rectangle.area());
console.log("Reactangle Perimeter",rectangle.perimeter());
