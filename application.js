$(function() {

  $('#video').YTPlayer({
    fitToBackground: true,
    videoId: 'm_5g_D_iP2s'
    
  });

  $('#city-form').submit(function(e) {
    e.preventDefault();
    $("#city-data").empty();
    var text =  $("#city-input").val();
    var url = 'http://autocomplete.wunderground.com/aq?query=' + text + '&cb=?';
    console.log(url);


//Example resposne API call http://api.wunderground.com/api/d99eb29a20700397/forecast/q/zmw:94125.1.99999.json

  $.ajax({
    dataType: "json",
    url: url,
    success: function(data) {
      var cities = data.RESULTS;
      console.log(cities)
      cities.forEach(function(city) {
        var key = "d99eb29a20700397";  
        $("#city-data").append("<li data-url='" + "http://api.wunderground.com/api/" + key + "/forecast" + city.l + ".json'>" + city.name + "</li>"); 
      });
    }
  });

  $("body").on('click', '[data-url]', function(){
    $('.weather-report').empty();
    $('.icon').empty();
    var url = $(this).attr("data-url");
      $.ajax({
        url: url,
        dataType: "jsonp",
        success: function(data) {
          console.log(data);
          $(".weather-report").append("<p>" + data.forecast.txt_forecast.forecastday[0].fcttext + "</p>");
          $(".icon").append("<img src=" + data.forecast.txt_forecast.forecastday[0].icon_url + ">");
        }
      })
  });



});


});






// $("<p>")
//   .attr('class', 'big')
//   .attr('id', 'whatever')
//   .data('url', '...')
//   .text('some text')
//   .hide()
//   .appendTo($('.container'))
//   .fadeIn()







