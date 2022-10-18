console.log('wellcome to js32.js');
let users=[]
class library{
    constructor(given_book_name1,given_book_name2,given_book_name3,given_book_name4){
        this.book_name1=given_book_name1;
        this.book_name2=given_book_name2;
        this.book_name3=given_book_name3;
        this.book_name4=given_book_name4;
    }
    
    get_book_list(){

        return lib;
    }
    issue_book(book_name,user_id){
        this.name=user_id;
        if(this.includes(book_name)){
            console.log(`the ${book_name} is sucessfully issued to ${user_id}`);
            users.push(`${this.name}`);
        }else{console.log(`${book_name} is already issued to ${this.name}`)}
    }
    return_book(book_name){
        console.log(`${book_name} returned succesfully`);
        users.filter(this.name);

    }
}
let lib = new library('book1','book2','book3','book4');
console.log(lib)