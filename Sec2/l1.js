function fizzBuzz(num){
    if((num % 3 == 0)&&(num % 5 == 0)){
        return "FizzBuzz";
    }
    if(num % 3 == 0){
        return "Fizz";
    }
    else if(num % 5 == 0){
        return "Buzz";
    }
    return num;
}

console.log(fizzBuzz(15));
console.log(fizzBuzz(9));
console.log(fizzBuzz(20));
console.log(fizzBuzz(4));