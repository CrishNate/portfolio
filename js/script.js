jQuery("document").ready(function($) {

    var nav = $('.header');

    $(window).scroll(function() {
        if ($(this).scrollTop() > 136) {
            nav.addClass("header__active");
        } else {
            nav.removeClass("header__active");
        }
    });

});

var $page = $('html, body');
$('a[href*="#portfolio"],a[href*="#skills"],a[href*="#featured"],a[href*="#footer"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});

$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.menu__body').toggleClass('active');
    });
});

$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger').toggleClass('active');
        $('body').toggleClass('lock');
    });
});


$(document).ready(function(){
    $("a[href*=#]").on("click", function(e){
        var anchor = $(this);
        trigger1 = $('.menu__body'),
 
 wrapper = $('body');
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 777);
        e.preventDefault();
         trigger1.removeClass('active');
         wrapper.removeClass('lock');
 
        return false;
    });
});

// Cache selectors
var lastId,
    topMenu = $(".menu__body"),
    topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 300);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;
   
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("menu__list_active")
         .end().filter("[href='#"+id+"']").parent().addClass("menu__list_active");
   }                   
});