const person ={names:'jack',age:17,job:"x",phone:141}

// const {names,age, phone} = person;
// console.log(names,age,phone);
const friends = ['x','y','u','i','o']
const[...restFriends]= friends;
console.log(restFriends);

const complexObject = {
    names:"abc",
    info:{
         address:'anything',
         salary:'nothing'
    }
}

const {salary}= complexObject.info
console.log(salary);