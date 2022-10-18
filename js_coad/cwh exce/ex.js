console.log("aman");

function flour(egg,baking_soda,sugar){
    this.egg=egg,
    this.baking_soda=baking_soda,
    this.sugar=sugar
}
flour.prototype.slogan= function(){
    return `this is best cake`;
}
let make = new flour(2,"60gm", "500gm");
console.log(make);
function cake(egg,baking_soda,sugar,water,oven){
    flour.call(this,egg,baking_soda,sugar)
    this.water=water,
    this.oven=oven
}
cake.prototype=Object.create(flour.prototype);
cake.prototype.constructor=cake;
let cook=new cake(4,'60mg','600gm','1L','one oven for cock');
console.log(cook)



