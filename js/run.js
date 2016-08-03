function fizzBuzz () {
var finalAnswer = "";
  for(var i = 1; i <= 100; i++){
    if(i % 3 === 0 && i % 5 === 0){
      finalAnswer += "FizzBuzz\n";
    }else if(i % 3 === 0){
      finalAnswer += "Fizz\n";
    }else if(i % 5 === 0){
      finalAnswer += "Buzz\n";
    }else{
      finalAnswer += i + "\n";
    }
  }
  return finalAnswer;
}
