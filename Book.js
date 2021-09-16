const Author = require("./Author.js")

class Book{
    constructor(title,author,edition){
        this.title = title
        this.author = author
        this.edition = edition
    }
    newEdition(){
        this.edition ++
        console.log(this.title + " by " + this.author.name + " is now on edition " + this.edition)
    }
}

let rowling = new Author('JK Rowling',1965)
let potter = new Book('Harry Potter',rowling,1)
potter.newEdition()