/* ----------- way to crate method in object ----- */
const rich = {
    name:"Elon Musk",
    age: undefined,
    business: function(company,revenue){
        return company +' '+" revenue is" + ' ' + revenue;
    }


    


}
console.log(rich.business("starlink",1));