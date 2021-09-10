window.onload = function () {
  $(document).ready(function() {
      $("#about li").click(function() {
          var url = $(this).children("a").attr("title") + ".json";
  
          
  
          // .getJSON to fetch our files
          $.getJSON(url, function(data) {
              // Finding the speakers with data.speakers
              $.each(data.info, function(key, value) {
                  $("main #1").html(value.first);
                  $("main #2").html(value.second);
                  $("main #3").html(value.third);
              });
          });
      });
  });
}