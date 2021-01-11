// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: -25.344, lng: 131.036 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }

  $(document).ready(function(){



    $("#navigation li a").click(function(e){
        e.preventDefault();

        var elementToGo = $(this).attr("href");
        var position = $(elementToGo).offset().top;
        $("html, body").animate({scrollTop: position - 30}, "slow");
         
    });

    const nav_sticky = $("#navigation");
    const nav_sticky_top = nav_sticky.offset().top;

    $(window).on("scroll",stickyNav);

    function stickyNav() {
        var body = $("body");
        if ($(window).scrollTop() >= nav_sticky_top) {
            body.css("padding-top", nav_sticky.outerHeight()+"px");
            body.addClass("fixedPos");
        }else{
            body.css("padding-top", 0);
            body.removeClass("fixedPos");
        }
    }


});