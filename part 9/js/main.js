$(document).ready(function(){
    
   $(".btn1").click(function(){
       $("p:first").addClass("me you he");
   });
    
    $(".btn2").click(function(){
       $("p:last").removeClass("me you he");
   });
    
    
});