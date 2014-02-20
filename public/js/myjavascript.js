
var doSum = function() {
  var totalAmt = parseInt(document.getElementById("num1").value)+parseInt(document.getElementById("num2").value);
  document.getElementById("tot").innerHTML = parseInt(totalAmt); 
  return;
}

var nextObj = {
   myName: "Jack"
}

var myObj = {
   myName: "John"
   sayHello: function() {
     document.getElementById("test").innnerHTML = ("Hi! My name is " + this.myName );
   }
}


     
