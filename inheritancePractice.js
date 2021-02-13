class Parent{
    constructor(){
        this.fatherName = 'Iliash Knachon';
    }
}
class Child extends Parent{
    constructor(name){
        super();
        this.name = name;

    }
}
const baby = new Child('Sakib Khan');
console.log(baby);