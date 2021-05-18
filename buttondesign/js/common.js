window.onload = function(){
  var oChart = document.getElementById('chart').getElementsByTagName('li');
  console.log(oChart);

  for(i = 0; i < oChart.length; i++){
    var oColor = window.getComputedStyle(oChart[i]).backgroundColor;
    console.log(oColor);
    oChart[i].innerHTML = oColor;
  }
}