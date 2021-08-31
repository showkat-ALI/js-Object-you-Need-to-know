/* ------------ ways to create object -----------
1. Object literal
2. new Object()
3. Object.create(a object that have been declared before)
4. with class

5. Syntactical sugar(withFunction)

  */

/* ----------- 4 ---------- */
class People{
    constructor(name,age){
        this.name= name
        this.age= age
    }
}
const people = new People('ali',18)
// console.log(people);
/* --- 5--- */
function Creat(name, balance){
    this.name= name;
    this.balance= balance;
}
const isWealthy= new Creat('Michle',1000)
// console.log(isWealthy);