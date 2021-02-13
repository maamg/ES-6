class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.college = 'Bir Shesthra Munshi Abdur Rouf Public College'
    }

}

const student1 = new Student(1,'Abdul Aziz');
const student2 = new Student(2, 'Abdul Jabbar');
console.log(student1, student2);