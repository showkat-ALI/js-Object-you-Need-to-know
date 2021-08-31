/* ----------- way to crate method in object ----- */
/* const rich = {
    name:"Elon Musk",
    age: undefined,
    business: function(company,revenue){
        return company +' '+" revenue is" + ' ' + revenue;
    }


    


} */
// console.log(rich.business("starlink",1));
/*  -- way to access property of an onject in method -- */

const rich = {
    name:"Elon Musk",
    age: undefined,
    business: function(company,revenue){
        return this.name +' '+ company +' '+" revenue is" + ' ' + revenue;
    }


    


}
console.log(rich.business("starlink",1));
