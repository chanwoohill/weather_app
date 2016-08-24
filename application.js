$(function() {

$('#cities').click(function() {
  $("ul").empty();
  var text =  $("#cityInput").val();
  var url = 'http://autocomplete.wunderground.com/aq?query=' + text + '&cb=?';
  var key = "e401293040a26d38"; 
  console.log(url);

  $.ajax({
    dataType: "json",
    url: url,
    success: function(data) {
      var cities = data.RESULTS;
      for(var i=0; i < cities.length; i++) {
        var city = cities[i];  
        $("ul").append("<li>" + city.name + "</li>");  
      }

    }

  });





});


});
