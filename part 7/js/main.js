$(document).ready(function(){
    
   $("#btn1").click(function(){
       $("#lorem1").append("<b>Hello</b>");
   });
    
    $("#btn2").click(function(){
       $("#lorem2").prepend("<b>Hello</b>");
   });
    
    $("#btn3").click(function(){
       $("img").before("<b>Hello</b>");
   });
    
    $("#btn4").click(function(){
       $("img").after("<b>Hello</b>");
   });
    
});