// Day 7
// Task 1
let book=
{
    title:'let us c',
    author:'unkonwn',
    year:2000,
    info:function()
    {
        console.log(book.title,book.author);
    },
    update:function(newyear)
    {
        this.year=newyear;
        console.log(book.year);
    },
    rtn:function()
    {
        return `${this.title} (${this.year})`;
    }
};
console.log(book);

// Task 2
console.log(book.title);
console.log(book['author']);

// Task 3
book.info();

// Task 4
book.update(2001);

// Task 5
const lib=
{
    name:'central',
    book
};
console.log(lib);

// task 6
console.log(lib.name,lib.book.title);

// Task 7
console.log(book.rtn());

// Task 8
for(key in book)
{
    console.log(`${key}: ${book['key']}`);
}