$(document).ready(function () {

    $(".resizeDiv").height($("#homeCardDivIcon").width() + 30);
    $(".homeIconConf").css("margin-top", ((($("#homeCardDivIcon").width() + 30) / 2) - 15) + "px");

    $(".resizeDivDouble").height(($("#homeCardDivIcon").width() + 30) * 2);

    $(".calendarArea").height($("#imageServiceHomeId").height());
    $(".offerArea").height($("#imageServiceHomeId").height());
    $(".homeIconConfRight").css("margin-top", (($("#imageServiceHomeId").height() / 2) - 15) + "px");
   
    $("#calendarServicesOptions").click(function (){
        window.location.href = "class_list.html";
    });
    
    $("#servicesHistoryLink").click(function (){
        window.location.href = "services_history.html";
    });
    
    $("#homeCardDivIcon").click(function (){
        window.location.href = "offer_history.html";
    });
    
    $("#offerIconDisplay").click(function (){
        window.location.href = "offer_display.html";
    });
    
    $("#userOptonsIcon").click(function (){
        window.location.href = "index.html";
    });
});
