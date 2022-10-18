console.log('aman js31')

class employ{
    constructor(name,exp,diision){
    this.name=name;
    this.exp=exp;
    this.div=diision;
}

slogan(){
    return `this is best cop., Regard ${this.name}`;
}
joiningYear(){
    return 2020-this.exp;
}
}
class programemr extends employ{
    constructor(name,exp,diision,laug){
        super(name,exp,diision);
        this.laug=laug;
    }
    fav_laug(){
        if(this.laug==="python"){
            return  `${this.name} love Python`;
        }else{return `${this.name} loves ${this.laug}`;}
    }
}
aman=new employ("aman",0,"fresher");
aman1 = new programemr('aman1',1, "it","java")
// console.log(aman.joiningYear())
console.log(aman1)
