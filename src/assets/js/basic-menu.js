
function include(filename, onload) {
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.src = filename;
    script.type = 'text/javascript';
    script.onload = script.onreadystatechange = function() {
        if (script.readyState) {
            if (script.readyState === 'complete' || script.readyState === 'loaded') {
                script.onreadystatechange = null;                                                  
                onload();
            }
        } 
        else {
            onload();          
        }
    };
    head.appendChild(script);
}

include('https://code.jquery.com/jquery-2.2.4.min.js', function() {
    $(document).ready(function() {
        $( document ).ready(function() {
            var height = window.innerHeight,
            x= 0, y= height/2,
            curveX = 10,
            curveY = 0,
            targetX = 0,
            xitteration = 0,
            yitteration = 0,
            menuExpanded = false;
            
            blob = $('#blob'),
            blobPath = $('#blob-path'),
        
            menu = $('#menu'),
            hamburger = $('.burger-menu-btn');
        
            $(this).on('mousemove', function(e){
                x = e.originalEvent.clientX - 100;      
                y = e.originalEvent.clientY;
            });
        
            $('.burger-menu-btn, .menu-inner').on('mouseenter', function(){
                $(this).parent().addClass('expanded');
                menuExpanded = true;
            });
        
            $('.menu-inner').on('mouseleave', function(){
                menuExpanded = false;
                $(this).parent().removeClass('expanded');
            });
        
            function easeOutExpo(currentIteration, startValue, changeInValue, totalIterations) {
                return changeInValue * (-Math.pow(2, -10 * currentIteration / totalIterations) + 1) + startValue;
            }
        
            var hoverZone = 150;
            var expandAmount = 20;
        
            function svgCurve() {
                if ((curveX > x-1) && (curveX < x+1)) {
                    xitteration = 0;
                } else {
                    if (menuExpanded) {
                        targetX = 0;
                    } else {
                        xitteration = 0;
                        if (x > hoverZone) {
                            targetX = 0;
                        } else {
                            targetX = -(((60+expandAmount)/100)*(x-hoverZone));
                        }			
                    }
                    xitteration++;
                }
        
                if ((curveY > y-1) && (curveY < y+1)) {
                    yitteration = 0;
                } else {
                    yitteration = 0;
                    yitteration++;	
                }
        
                curveX = easeOutExpo(xitteration, curveX, targetX-curveX, 100);
                curveY = easeOutExpo(yitteration, curveY, y-curveY, 100);
        
                var anchorDistance = 200;
                var curviness = anchorDistance - 40;
        
                var newCurve2 = "M60,"+height+"H0V0h60v"+(curveY-anchorDistance)+"c0,"+curviness+","+curveX+","+curviness+","+curveX+","+anchorDistance+"S60,"+(curveY)+",60,"+(curveY+(anchorDistance*2))+"V"+height+"z";
        
                blobPath.attr('d', newCurve2);     
                blob.width(curveX+60);     
                blobPath.css("fill", menu.css("backgroundColor"));
        
                hamburger.children().css("backgroundColor", menu.css("color"));
                hamburger.css('transform', 'translate('+curveX+'px, '+curveY+'px)');
        
                window.requestAnimationFrame(svgCurve);
            }
        
            $("#menu").css("opacity", "1");
            window.requestAnimationFrame(svgCurve);
                
        });
    });
});






 
    
  