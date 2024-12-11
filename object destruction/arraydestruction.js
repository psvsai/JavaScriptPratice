// array destruction 
// we use "Square Bracket []" for array destruction
// syntax
// const [var1,var2,var3...varn]=  array;
a = 3;
b = 4;
[a,b] = [b,a]
console.log(a,b);

a = "Mahesh";
b = "Sai";
c = "Venkata";
d = "Sri";
e = "Pasupuleti";
[a,b,c,d,e]= [e,d,c,b,a];
console.log(a,b,c,d,e);

var num = [2,4,6,8,9,1];
num = [3,5,10,8,9,1];
console.log(num);

var int = ["Hello","Hi","Hola","Ohayo"];
var [first,second,third] = int;
console.log(first);
console.log(second);
console.log(third);


// Use array destructuring to assign the first three elements of an array to separate variables
