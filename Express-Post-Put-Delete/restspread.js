//crest spreas operator
const emp={
    id:1,
    name:"raghav",
    salary:50000,
    address:"delhi",
    age:24,
    department:"Marketing"
};
//is object ko copy karna hai spread operator se
const emp2={...emp};
const{id,
    name,
    salary,
    ...otherinfo  //rest operator
}=emp;
console.log(otherinfo);
console.log(emp2);

//updating address field using spread operator  
const emp3={...emp,address:"noida"};
console.log(emp3);