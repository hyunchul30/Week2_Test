$(document).ready(function() {
$("button#h").click(function(){
   $("body").addClass("green-background");
});
$("button#u").click(function(){
     $("body").addClass("red-background");
  });
  $("button#un").click(function(){
     $("body").addClass("orange-background");
});
});

var survey = $("input:radio[name=survey]:checked").val();
