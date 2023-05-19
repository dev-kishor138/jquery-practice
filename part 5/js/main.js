$(document).ready(function(){
    
   $("#btn1").click(function(){
       alert("text: " + $("#lorem").text());
   });
    
   $("#btn2").click(function(){
       alert("text: " + $("#lorem").html());
   });
    
    $("#btn3").click(function(){
        alert($("#me").val());
    });
    
    $("#btn4").click(function(){
        alert($("#you").altr("href"));
    });   
});