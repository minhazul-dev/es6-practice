function add (num1,num2=20){
    return num1 + num2 ;
}
const total = add(10,1);
console.log(total);


function createUser(name, age=18){

    const user = {};
    
    user.name = name;
    
    user.age = age;
    
    return user;
    
    }

const ans = createUser(10);
console.log(ans);