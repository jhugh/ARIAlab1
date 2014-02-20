
var doSum = function() {
  var totalAmt = parseInt(document.getElementById("num1").value)+parseInt(document.getElementById("num2").value);
  document.getElementById("tot").innerHTML = parseInt(totalAmt); 
}


var myObj = {
   myName: "John",
   sayHello: function() {
     document.getElementById("testname").innerHTML = ("Hi! My name is " + nextObj.myName );
     //document.getElementById("testname").innerHTML = ("Hi! My name is Michael Caine");
   }
}

var nextObj = {
   myName: "Jack"
}


     
