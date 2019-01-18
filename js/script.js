(function(){
    document.addEventListener('DOMContentLoaded', function(){
	var buttons = document.getElementsByClassName("calc-button");
	var val = 0;
	var prevVal = 0;
	var display = 0;
	var operator = "";
	var concat = false;
	function updateDisplay(value) {
		var displayElement = document.getElementById("display");
		displayElement.value = value;
	}
	updateDisplay(display);
	Array.from(buttons).forEach(function(button) {
		button.addEventListener("click", function() {
			process(button.value);
		});
	});
	
	const calculate = function(num1, num2, op) {
	  var result = "";
	  if (op == "plus") {
		result = num1 + num2;
	  } else if (op == "minus") {
		result = num1 - num2;
		operator = "";
	  } else if (op == "times") {
		result = num1 * num2;
		operator = "";
	  } else if (op == "divide") {
		result = num1 / num2;
		operator = "";
	  } 
	  val = result;
	  return result;
	}
	
	function process(value) {
	  if(isNaN(value)){
		if (value == "clear") {
		  val = 0;
		  prevVal = 0;
		  operator = "";
		  updateDisplay(0);
		}
		else if (operator != "plus" && operator == "") {
		  operator = value;
		} else {
		  updateDisplay(calculate(val, prevVal, operator));
		}
		concat = false;
      }	else {
	    if (operator == "decimal") {
		  val = parseFloat(val.toString() + "." + value);
		  updateDisplay(val);
		  operator = "";
		} else if (operator == "") {
		  if (concat) {
		    val = parseFloat(val.toString() + value);
		  } else {
		    val = parseFloat(value);
		  }
		  updateDisplay(val);
		} else {
		  if (concat) {
		    prevVal = parseFloat(prevVal.toString() + value);
		  } else {
		    prevVal = parseFloat(value);
		  }
		  updateDisplay(prevVal);
		}
	    concat = true;
	  }
	}
    });
  })();
