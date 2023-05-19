$(document).ready(function(){
    
    $(".btn").click(function(){
        $(".lorem").slideToggle('slow');
    });
    
    $(".ctn").click(function(){
        $(".box1").fadeToggle(1000);
        $(".box2").fadeToggle(2000);
        $(".box3").fadeToggle(3000);
        $(".box4").fadeToggle(4000);
    });
    
    $(".atn").click(function(){
        $(".box5").animate({left: '500px'});
    });
    
    $(".dtn").click(function(){
        $(".box6").animate({
            left: '500px',
            width: '200px',
            height: '200px',
            opacity: '0.5'
        });
    });
    
    $(".etn").click(function(){
        $(".box7").animate({
            left: '500px',
            width: '+=100px',
            height: '+=100px',
            opacity: '0.5'
        });
    });
    
    $(".ftn").click(function(){
        $(".box8").animate({
            left: '500px',
            width: '-=100px',
            height: '-=100px',
            opacity: '0.5'
        });
    });
    
    $(".gtn").click(function(){
        $(".box9").animate({
            width: 'toggle'
        });
    });
    
    $(".htn").click(function(){
        $(".box10").animate({
            height: 'toggle'
        });
    });
    
    $(".itn").click(function(){
        var moshiur = $(".box11");
        moshiur.animate({height: '300px', opacity: '0.3'}, 'slow');
        moshiur.animate({width: '300px', opacity: '0.5'}, 'slow');
        moshiur.animate({height: '100px', opacity: '0.7'}, 'slow');
        moshiur.animate({width: '100px', opacity: '1'}, 'slow');
        
    });
    
    $(".jtn").click(function(){
        var kishor = $(".box12");
        kishor.animate({left: '500px'}, 'slow');
        kishor.animate({width: '300px'}, 'slow');
        kishor.animate({height: '300px'}, 'slow');
        kishor.animate({fontSize: '30px'}, 'slow');
        
    });



});