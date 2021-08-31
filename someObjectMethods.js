/* --- Some commont methods have been shown----- */
const laptop= {
    name:'Dell',
    id:1223,
    productivity: function(){
        return this.name+' '+ "550 Hors Power"
    }
}
/* to acess all the property */
// console.log(Object.keys(laptop));

/* to acess all the vlaues */
// console.log(Object.values(laptop));

/* to acess all the key and vlaue pairs*/
// console.log(Object.entries(laptop));

/* to delete one  key*/
// delete laptop.id;
// console.log(laptop);

/* to prevent delete of an object we use object.seal but we can change the vlaue and we cannot 
add new property*/
Object.seal(laptop)
delete laptop.id;
laptop.price= '33';
console.log(laptop);
/* ___ the same way object.freeze work but it doesnt allow us to change any values */

