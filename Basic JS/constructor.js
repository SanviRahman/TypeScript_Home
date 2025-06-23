//create a object
const persion={
    name: "Shanto",
    age:25
}


function Persion(name,age){
    this.name=name;
    this.age=age;
}

let naam= new Persion("Amir",20);
console.log(naam.name,naam.age);