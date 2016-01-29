$(document).ready(function () {
    
    $(".row .plusIcon").click(function (){
        $.sessionStorage.set('class_id',this.id);
        window.location.href = "subclass_list.html";
    });
    
});


/**
 * var storage = $.cookieStorage;
    
    if(storage.isSet(['user_id'])){
        console.log("logado");
        var user_object = storage.get(['user_name']);
        console.log(user_object.user_name);
    }else{
        console.log("Não logado");
    }
 */