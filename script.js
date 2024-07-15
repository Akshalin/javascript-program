//program 1
for(let i=1;i<=100;i++){
    if(i%3==0 && i%5==0){
        console.log("Fizz Bus");
    }
    else if(i%3==0){
        console.log("Fizz");
    }
    else if(i%5==0){
        console.log("Bus");
    }
}



//program2
function Palindrome(str) {
    if(str=== str.split('').reverse().join('')){
        console.log("Palindrome");
    }
    else{
        console.log("Not a Palindrome");
    }
  }
  
Palindrome("radar"); 
Palindrome("hiijefita");  


//program3
function largestnumber(arr){
    let newarr=arr.sort();
    let len=newarr.length;
    return (newarr[len-1]);
}
let n=[50,42,55,47];
console.log(largestnumber(n));

//program4
function count(str1) {
   let Count = {};
    for (let i = 0; i < str1.length; i++) {
        let char = str[i];
        if (Count[char]) {
            Count[char]++;
        } 
        else {
            Count[char] = 1;
        }
    }
    return Count;
}
var str = "hello akshalin";
console.log(count(str));

//program5
function longstr(str){ 
    str = str.split(" ") 
    return str.sort((a, b) => b.length - a.length)[0];
} 
console.log(longstr("Akshalin Jefita RJ"));

//program6
function factorial(n){
let fact=1;
for(let i=1;i<=n;i++){
    fact=fact*i;
}
return fact;
}
console.log(factorial(5));

//program7
function temperature(celsius){
    let fahrenheit=(celsius*9/5)+32;
    return fahrenheit;
}
console.log(temperature(50));

