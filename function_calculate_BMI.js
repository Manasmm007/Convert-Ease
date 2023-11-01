function calBMI(){
      var height = parseFloat(document.getElementById("height").value);
      var mass = document.getElementById("mass").value;

      var result4 = (mass*100)/(height*height);
      var a="";

      if(result4<18.5)
              a="Underweight"
      else if(result4<=25)
              a="Normal Weight"
      else if(result4<30)
              a="Overweight"
      else
              a="Obese"
      document.getElementById("result4").innerHTML = "Result: " + result4.toFixed(2) + " " + a;
}
