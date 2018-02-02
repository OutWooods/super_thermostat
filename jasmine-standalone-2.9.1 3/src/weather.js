//0c91b001fdf357050e582d30d408e1ba
//<span id = 'weather'></span>, Temp is: <span id = 'localTemp'>
console.log("hello")

$(document).ready(function() {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=Paris&units=metric&appid=0c91b001fdf357050e582d30d408e1ba', function(data) {
    console.log(data.weather[0].main)
  $('#weather').text(data.weather[0].main)
  $('#localTemp').text(data.main.temp)
  }
  )

});
