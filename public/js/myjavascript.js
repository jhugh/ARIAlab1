
var doSum = function() {
  var totalAmt = parseInt(document.getElementById("num1").value)+parseInt(document.getElementById("num2").value);
  document.getElementById("tot").innerHTML = parseInt(totalAmt); 
}

var nextObj = {
   myName: "Jack"
}

var myObj = {
   sayHello: function() {
     document.getElementById("testname").innerHTML = ("Hi! My name is " + myName );
     //document.getElementById("testname").innerHTML = ("Hi! My name is Michael Caine");
   },
   myName: "John"
}


     
