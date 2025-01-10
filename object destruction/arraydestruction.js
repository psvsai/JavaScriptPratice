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

var num1 = [2,4,6,8,9,1];
num1 = [3,5,10,8,9,1];
console.log(num1);


var a = [3,4,5,6,7,8,9];
for (var i=0;i<a.length;i++){
  console.log(a[i]*2);
}

var int = [1,2,3,4,5,6];
int = [3,5,1,6,2,4];
console.log(int);

var num = [9,8,7,6,5,4,3];
[num[0],num[1],num[2],num[3],num[4],num[5],num[6]]= [1,2,3,4,5,6,7];
console.log(num);

var int = ["Hello","Hi","Hola","Ohayo"];
var [first,second,third] = int;
console.log(first);
console.log(second);
console.log(third);


// Use array destructuring to assign the first three elements of an array to separate variables

var array = [10,20,34,45,67,89,91];
var [first,second,third,fourth,fiveth,sixth,seventh]= array;
console.log(third);
console.log(sixth);
console.log(first);

var numx = [98,87,76,65,54,43,32,21];
var numy = [22,33,44,55,66,77,88,99];
var numz = [...numx, ...numy];
console.log(numz);
var fil = numz.filter((numz)=>numz>=50);
var map = fil.map((data)=>console.log(data));
console.log(fil);

