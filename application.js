$(function() {

$('#cities').click(function() {
  $("#cityData").empty();
  var text =  $("#cityInput").val();
  var url = 'http://autocomplete.wunderground.com/aq?query=' + text + '&cb=?';
  console.log(url);

//Example resposne API call http://api.wunderground.com/api/d99eb29a20700397/forecast/q/zmw:94125.1.99999.json

  $.ajax({
    dataType: "json",
    url: url,
    success: function(data) {
      var cities = data.RESULTS;
      console.log(cities)
      for(var i = 0; i < cities.length; i++) {
        var city = cities[i]; 
        var key = "d99eb29a20700397";  
        $("#cityData").append("<li data-url='" + "http://api.wunderground.com/api/" + key + "/forecast" + city.l + ".json'>" + city.name + "</li>");  ;  
      }
    }
  });

  $("body").on('click', '[data-url]', function(){
    var url = $(this).attr("data-url");
      $.ajax({
        url: url,
        dataType: "jsonp",
        success: function(data) {
          console.log(data);
           $('.weatherReport').empty();
           $('.icon').empty();
          $(".weatherReport").append("<p>" + data.forecast.txt_forecast.forecastday[0].fcttext + "</p>");

          $(".icon").append("<img src=" + data.forecast.txt_forecast.forecastday[0].icon_url + ">");
        }
      })
  });



});


});











