
var doSum = function() {
  var totalAmt = parseInt(document.getElementById("num1").value)+parseInt(document.getElementById("num2").value);
  document.getElementById("tot").innerHTML = parseInt(totalAmt); 
}

var nextObj = {
   myName: "Jack"
}

var myObj = {
   myName: "John",
   sayHello: function() {
     document.getElementById("testname").innerHTML = ("Hi! My name is " + myObj.myName );
     //document.getElementById("testname").innerHTML = ("Hi! My name is Michael Caine");
   }
}


     
