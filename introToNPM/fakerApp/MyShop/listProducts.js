var faker = require("faker"); 

console.log ("===================");
console.log ("WELCOME TO My SHOP")
console.log ("===================");

for(var i = 1; i <=10; i++){
console.log (faker.commerce.productName() + " - " + faker.commerce.price());
}
