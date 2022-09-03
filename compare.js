// // const obj ={a:1, b:7, c:3, length:2};
// // console.log(Object.keys(obj).length);

// // const obj1= {module: 35, video:2}; const obj2= {module: 35, video:2};
// // console.log(obj1 === obj2);

// const getGirlFriend= (name = "chokina")=>"name"; 
// console.log(getGirlFriend());

// const number =[10,20,30,40];
// const lageNumber =Math.max(...number);
// console.log(lageNumber)

const fish={
    name:'Hasib',
    subject:'english',
    age:23,
    isTeacher:false,
}
// for function of distructuring........
const getName=()=>{
    return ['abdullah','hasibul','hello']
}

const [a,b,c]=getName();
console.log(c,a);