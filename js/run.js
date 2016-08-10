function fizzBuzz () {
var finalAnswer = "";
  for(var i = 1; i <= 100; i++){
    if (i % 3 === 0 && i % 5 === 0){
      finalAnswer += "FizzBuzz<br>";
    } else if (i % 3 === 0){
      finalAnswer += "Fizz<br>";
    } else if (i % 5 === 0){
      finalAnswer += "Buzz<br>";
    } else {
      finalAnswer += i + "<br>";
    }
  }
  return finalAnswer;
}
