class Student {
       constructor(sId,sName,){
           this.id = sId ;
           this.name = sName ;
           this.school = "xyz school"
       }
}

const student1 = new Student(12,"Mr x");
const student2 = new Student(12,"mr Y");
console.log(student1,student2);