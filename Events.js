window.onload = function () {
  document.getElementById("myInput").onkeyup = eventSearch;

  $(document).ready(function() {
    $("#eventList li").click(function() {
        var url = $(this).children("a").attr("title") + ".json";


        // .getJSON to fetch our files
        $.getJSON(url, function(data) {
            $.each(data.events, function(key, value) {
                $(".right h1").html(value.name);
                $(".right a").attr("href", value.url);
                $(".right h3").html(value.entrants + "<br>" + value.date);
                $(".right p").html(value.singles + "<br>" +value.doubles);
            });
        });
    });
});
  
}

//This function is based on the w3schools filter list howto, but adapted to not have embedded js in the html file
//The original code can be found here https://www.w3schools.com/howto/howto_js_filter_lists.asp
//This was originally going to be based on a jquery plugin, but decided to instead leave it as this filter list
function eventSearch() {
  
  var input = document.getElementById("myInput");
  var filter = input.value.toUpperCase();
  var events = document.getElementById("eventList");
  var list = events.getElementsByTagName("li");
  for (i = 0; i < list.length; i++) {
      var item = list[i].getElementsByTagName("a")[0];
      var txtValue = item.textContent || item.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
          list[i].style.display = "";
      } else {
          list[i].style.display = "none";
      }
  }
}