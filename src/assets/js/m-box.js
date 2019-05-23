/* If you use any of this, it'd be nice to mention my name.

Andrew Tunnecliffe - 2014

JS is only for the circles, not for the loading or hover animations.
*/

// Basic queue / FILO implementation. 

var element, circle, d, x, y;
var i = 1;
var queue = [];

setTimeout(function(){ 

  var menuitem = document.getElementsByClassName("menuitem");
  var menuitemclosebtn = document.getElementById("item-close-btn");
  var contentcontainer = document.getElementById("box-container");
  
  var openitem = null;


  var pageLoad = function() {
      openitem = this;
      this.classList.remove('itemclosed');
      this.classList.add('itemopen');
      contentcontainer.classList.add('content-open');
  };
  for (var i = 0; i < menuitem.length; i++) {
    menuitem[i].addEventListener('click', pageLoad, false);
  }

  var closePage = function() {
    if(openitem != null){
      openitem.classList.remove('itemopen');    
      openitem.classList.add('itemclosed');
      contentcontainer.classList.remove('content-open');
    }
  };

  menuitemclosebtn.addEventListener('click', closePage, false);
  
  // font handeling
  $(function () {
    initfontsize();
  });
  window.addEventListener("resize", function () {
    initfontsize();
  }, false);

  function initfontsize() {
    var bwidth = $("body").width();
    var size = size = 100;
    if (bwidth < 768) {
        size = 40;
    }
    //console.log(size);
    $('html').css('font-size', size + "%");

  }


    $(function() {
      setTimeout(function(){ 
        $('body').addClass("pageready");
       }, 3000);
    });
  

    $(".inner").click(function(e){
        element = $(this);
        
        // remove old items from queue and DOM
        // allow max 5 to be loaded
        if (queue.length > 5) {
          $("._" + queue.shift()).remove();
        }
        
        // Assume user can't click more than 1000 times / second
        //terrible overflow protection.
        if (i > 1000) {
          i = 0;
        }
        
        // add next item to queue
        i++;
        queue.push(i);
        
        // Build element
        element.append("<span class='circle _" + i + "'></span>");
        circle = element.find("._" + i);
          
        // Make it big enough to cover whole parent
        if(!circle.height() && !circle.width()) {
          d = Math.max(element.outerWidth(), element.outerHeight());
          circle.css({height: d, width: d});
        }
          
        // Get origin
        x = e.pageX - element.offset().left - circle.width() / 2;
        y = e.pageY - element.offset().top - circle.height() / 2 ;
          
        // Set location and animate
        circle.css({top: y+'px', left: x+'px'}).addClass("animate");
      })

}, 1000);

