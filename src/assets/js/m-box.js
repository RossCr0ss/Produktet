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
    //$('html').css('font-size', size + "%");

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

    /* the video */
    // Get a handle to the player
    player       = document.getElementById('video-element');
    btnPlayPause = document.getElementById('btnPlayPause');
    btnMute      = document.getElementById('btnMute');
    progressBar  = document.getElementById('progress-bar');
    volumeBar    = document.getElementById('volume-bar');
  
    // Update the video volume
    volumeBar.addEventListener("change", function(evt) {
      player.volume = evt.target.value;
    });
    document.getElementById('btnFullScreen').disabled = false;
    // Add a listener for the timeupdate event so we can update the progress bar
    player.addEventListener('timeupdate', updateProgressBar, false);
    
    // Add a listener for the play and pause events so the buttons state can be updated
    player.addEventListener('play', function() {
      // Change the button to be a pause button
      changeButtonType(btnPlayPause, 'pause');
    }, false);
    
    player.addEventListener('pause', function() {
      // Change the button to be a play button
      changeButtonType(btnPlayPause, 'play');
    }, false);
    
    player.addEventListener('volumechange', function(e) { 
      // Update the button to be mute/unmute
      if (player.muted) changeButtonType(btnMute, 'unmute');
      else changeButtonType(btnMute, 'mute');
    }, false);	
    
    player.addEventListener('ended', function() { this.pause(); }, false);	
    
    progressBar.addEventListener("click", seek);



}, 1000);



  
    function seek(e) {
        var percent = e.offsetX / this.offsetWidth;
        player.currentTime = percent * player.duration;
        e.target.value = Math.floor(percent / 100);
        e.target.innerHTML = progressBar.value + '% played';
    }
  
    function playPauseVideo() {
      if (player.paused || player.ended) {
        // Change the button to a pause button
        changeButtonType(btnPlayPause, 'pause');
        player.play();
      }
      else {
        // Change the button to a play button
        changeButtonType(btnPlayPause, 'play');
        player.pause();
      }
    }
    
    // Stop the current media from playing, and return it to the start position
    function stopVideo() {
      player.pause();
      if (player.currentTime) player.currentTime = 0;
    }
    
    // Toggles the media player's mute and unmute status
    function muteVolume() {
      if (player.muted) {
        // Change the button to a mute button
        changeButtonType(btnMute, 'mute');
        player.muted = false;
      }
      else {
        // Change the button to an unmute button
        changeButtonType(btnMute, 'unmute');
        player.muted = true;
      }
    }
    
    // Replays the media currently loaded in the player
    function replayVideo() {
      resetPlayer();
      player.play();
    }
    
    // Update the progress bar
    function updateProgressBar() {
      // Work out how much of the media has played via the duration and currentTime parameters
      var percentage = Math.floor((100 / player.duration) * player.currentTime);
      // Update the progress bar's value
      progressBar.value = percentage;
      // Update the progress bar's text (for browsers that don't support the progress element)
      progressBar.innerHTML = percentage + '% played';
    }
    
    // Updates a button's title, innerHTML and CSS class
    function changeButtonType(btn, value) {
      btn.title     = value;
      btn.innerHTML = value;
      btn.className = value;
    }
    
    function resetPlayer() {
      progressBar.value = 0;
      // Move the media back to the start
      player.currentTime = 0;
      // Set the play/pause button to 'play'
      changeButtonType(btnPlayPause, 'play');
    }  
    
    function exitFullScreen() {
      if (document.exitFullscreen) {
          document.exitFullscreen();
      } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
      } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
      }
    }
    
    function toggleFullScreen() {
      //var player = document.getElementById("player");
  
      if (player.requestFullscreen)
          if (document.fullScreenElement) {
              document.cancelFullScreen();
          } else {
              player.requestFullscreen();
          }
          else if (player.msRequestFullscreen)
          if (document.msFullscreenElement) {
              document.msExitFullscreen();
          } else {
              player.msRequestFullscreen();
          }
          else if (player.mozRequestFullScreen)
          if (document.mozFullScreenElement) {
              document.mozCancelFullScreen();
          } else {
              player.mozRequestFullScreen();
          }
          else if (player.webkitRequestFullscreen)
          if (document.webkitFullscreenElement) {
              document.webkitCancelFullScreen();
          } else {
              player.webkitRequestFullscreen();
          }
      else {
          alert("Fullscreen API is not supported");
          
      }
    }

