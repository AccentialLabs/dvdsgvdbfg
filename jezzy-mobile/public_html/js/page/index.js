$(document).ready(function() {
    $.removeAllStorages();
    $("#enterMobilebuttom").click(function() {
//        console.log("Botão entrar. E criar um sessao");
        sendRequest();

    });

});

function sendRequest() {
    
    var conditions = {
        'Mobile': {
            'property': {login: $("#nameInput").val(), pass: $("#passInput").val()}
        }
    };
    var postData = JSON.stringify(conditions);
   
    postData = {
        'params': postData
    };
    var url = 'http://localhost/jezzy/api/mobile/login/action/' + createToken();
   
    $.ajax({
        method: "POST",
        url: url,
        data: postData
    }).done(function(result) {
      
        var objReturn = JSON.parse(result);
//        console.log(objReturn.cod);
        if (objReturn.cod === 0) {
            $.cookieStorage.set(objReturn.msg);
//            console.log($.cookieStorage.keys());
//            console.log($.cookieStorage.get('User').id);
            if ($.cookieStorage.isSet('User')) {
                window.location.href = "home.html";
            } else {
                generateModalAlert("Erro ao entrar. Tente novamente");
                $('#mymodal').modal('show');
            }
        } else {
            generateModalAlert(objReturn.msg);
            $('#mymodal').modal('show');
        }
    }).error(function(XMLHttpRequest, textStatus, errorThrown) {
        alert(errorThrown);
    });

  
}

function createToken() {
    var arraySend = {
        'secureNumbers': Math.floor(new Date().getTime() / 1000)
    };
    var json = JSON.stringify(arraySend);
    return $.base64.btoa(json);
}

function generateModalAlert(mensagem) {
    if ($("#mymodal").length) {
        $("#messageModelGoesHere").html(mensagem);
    } else {
        $modalHtml =
                '<div class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" id="mymodal">'
                + '<div class="modal-dialog modal-sm">'
                + '<div class="modal-content" id="messageModelGoesHere">'
                + mensagem
                + '</div>'
                + '</div>'
                + '</div>';
        $("body").append($modalHtml);
    }
}