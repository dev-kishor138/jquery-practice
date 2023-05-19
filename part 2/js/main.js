$(document).ready(function(){
    
    $(".btn").click(function(){
        $(".lorem").show(3000);
    });
    
    $("button").click(function(){
        $(".lorem").stop();
    });

});