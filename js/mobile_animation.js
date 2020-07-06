$('.mobile-tab').hide();
$("#burg a").on("click",function () {
    $(".mobile-tab").slideToggle(1000);
});
function indexAdaptive(){
let screenWidth = document.documentElement.clientWidth;
    if(screenWidth>=769){
    screenWidth = document.documentElement.clientWidth;
    $("#index_h").height(($("#index_h").outerWidth())/2.5);
$("#index_h h1").css("padding-top",($("#index_h").outerWidth())/14);
$("#index_h h1").css("font-size",($("#index_h").outerWidth())/14);
$("#index_h h3").css("font-size",($("#index_h").outerWidth())/21);
$("#indexSection_1").css("height",($("#indexSection_1").outerWidth())/1.5);
$("#indexSection_2").height(($("#indexSection_1").outerHeight()));
$("#indexSection_1 p").css("padding",($("#indexSection_1").outerWidth())/15);
$("#indexSection_1 p").css("padding-bottom",0);
$("#indexSection_1 p").css("font-size",($("#indexSection_1").outerWidth())/43.46);
$("#indexSection_2 img").css("width",($("#indexSection_1").outerWidth())/2.5);
$("#indexSection_2 p").css("font-size",($("#indexSection_1").outerWidth())/15);
$("#indexSection_3 h1").css("font-size",($("#indexSection_1").outerWidth())/20);
$(".alsoItem").css("margin-bottom",($("#indexSection_1").outerWidth())/35);
$(".alsoItem").css("padding-bottom",($("#indexSection_1").outerWidth())/14);
$(".alsoItem").css("padding-top",($("#indexSection_1").outerWidth())/17);
$(".alsoItem h3").css("font-size",($("#indexSection_1").outerWidth())/27);
$(".alsoItem").css("font-size",($("#indexSection_1").outerWidth())/45);
$("#index_also_3").css("margin-bottom","0"); 
}else{
    screenWidth = document.documentElement.clientWidth;
    $("h3").css("font-size","35px");
    $("p").css("font-size","25px")
       $("#index_h").height(($("#index_h").outerWidth())/2.5);
$("#index_h h1").css("padding-top",($("#index_h").outerWidth())/14);
$("#index_h h1").css("font-size",($("#index_h").outerWidth())/14);
$("#index_h h3").css("font-size",($("#index_h").outerWidth())/21);
$("#indexSection_1 p").css("padding",($("#indexSection_1").outerWidth())/15);
$("#indexSection_1 p").css("padding-bottom",0);
$("#indexSection_2 img").css("width",($("#indexSection_1").outerWidth())/2.5);
$(".alsoItem").css("margin-bottom",($("#indexSection_1").outerWidth())/35);
$(".alsoItem").css("padding-bottom",($("#indexSection_1").outerWidth())/14);
$(".alsoItem").css("padding-top",($("#indexSection_1").outerWidth())/17);
$("#index_also_3").css("margin-bottom","0");
$("#indexSection_3 div").css("background-size","275% auto");
$("#indexSection_1").css("height","auto");
}};
indexAdaptive();
$(window).resize(function(){
    indexAdaptive();
});
