  setTimeout(function(){ 

    var openitem = null;
    $('body').addClass("pageready");
  
    $(".menuitem").on("click", function() {
      //console.log($(this));
      openitem = this;
      console.log("click");
      $(this).removeClass('itemclosed');
      $(this).addClass('itemopen');
      $('#box-container').addClass('content-open');
      console.log("after functions");
    });
    
    $("#item-close-btn").on("click", function() {
  
        $(openitem).removeClass('itemopen');    
        $(openitem).addClass('itemclosed');
        $('#box-container').removeClass('content-open');
    });
   }, 1000);


    /*
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
    //$('html').css('font-size', size + "%");

  }*/

