$(document).ready(function(){
    console.log($(document).width());
    
     $("nav").on("click", "li", function() {
        // here I want to get the clicked id of the li (e.g. bakkerLink)
        console.log(this);
        $("nav").attr("data-context", "level1");
        $("nav ul").attr("data-context", "level1");
        $('nav li').not(this).attr("data-style", "small");
        $(this).attr("data-style", "main");
        
//        $(this).attr("data-position", "main");
//        $(this).attr("data-context", "main");
$("#welcome").attr("data-context", "level1");
if(!$("header").length){
    $("body").prepend("<header>");
}

    });
    
    
    
});

