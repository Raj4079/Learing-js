let num = 30;

console.log(typeof num);             //number

let value="33";
console.log(typeof value);           //string

let num2 = "232";
let num3 = Number(num2);

console.log(num3);                  //232
console.log(typeof num3);           //number

let num4 = "23wr";
let num5 = Number(num4);            

console.log(num5);                  //NaN stands for not a number which is a type of number(datatype)
console.log(typeof num5);           //number

let score = null;

console.log(score);                 //null
console.log(typeof score);          //object

let num6 = undefined;
let numb=Number(num6);

console.log(num6);                  //undefined
console.log(typeof num6);           //undefined
console.log(numb);                  //NaN

let num7 = true;
let num8=Number(num7);

console.log(num7);                  //true
console.log(typeof num7);           //boolean
console.log(num8);                  //1 ; for false it will retrun 0;

let num9 = -56;
let num10=Boolean(num9);

console.log(num10);                     //true;so except 0 and "" it will always converted to true;

let num11= 33;
let stringnum=String(num11);

console.log(stringnum);             //33
console.log(typeof stringnum);          //string