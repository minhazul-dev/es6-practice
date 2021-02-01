// function doubleIt(num){
//     return num*2 ;
// }



const doubleIt = num => num*2;
const res = doubleIt(50)
console.log(res);

const add = (x,y) => x+y;
const rest =add(5,5)
console.log(rest);

const give = () => 5 ;
const rest2 = give();
console.log(rest2);

const math = (x,y) =>{
    const sum = x+y;
    const sub = x-y;
    const result = sum*sub;
    return result;
}

const result3 = math(7,5);
console.log(result3);