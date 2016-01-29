$(document).ready(function () {
//    includeFilesJS("jquery.base64");

    if (!$.cookieStorage.isSet('User')) {
        window.location.href = "index.html";
    } else {
        console.log($.cookieStorage.get('User'));
    }

    $("#footerHomeIconClick").click(function () {
        $.sessionStorage.removeAll();
        window.location.href = "home.html";
    });

    $("#footerCalendarIconClick").click(function () {
        $.sessionStorage.removeAll();
        window.location.href = "class_list.html";
    });

    $('#footerOfferIconClick').click(function () {
        var msg = "<p>Funcionalidade em fase de implementação</p><p>Vamos te avisar que estiver pronto.</p>";
        generateModalAlert(msg);
        $('#mymodal').modal('show');
    });
    $('#footerCardIconClick').click(function () {
        var msg = "<p>Funcionalidade em fase de implementação</p><p>Vamos te avisar que estiver pronto.</p>";
        generateModalAlert(msg);
        $('#mymodal').modal('show');
    });
    $('#footerFeedIconClick').click(function () {
        var msg = "<p>Funcionalidade em fase de implementação</p><p>Vamos te avisar que estiver pronto.</p>";
        generateModalAlert(msg);
        $('#mymodal').modal('show');
    });
    $('#serarchIconTop').click(function () {
        var msg = "<p>Funcionalidade em fase de implementação</p><p>Vamos te avisar que estiver pronto.</p>";
        generateModalAlert(msg);
        $('#mymodal').modal('show');
    });


});

function includeFilesJS(fileName) {
//    console.log("chamando");
    $.getScript("lib/jquery/" + fileName + ".js", function (data, textStatus, jqxhr) {
        console.log(data); // Data returned
        console.log("load: " + textStatus); // Success
//        console.log(jqxhr.status); // 200
        console.log("Load was performed.");
    });
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

function createToken() {
    var arraySend = {
        'secureNumbers': Math.floor(new Date().getTime() / 1000)
    };
    var json = JSON.stringify(arraySend);
    return $.base64.btoa(json);
}

function sendRequest(objectSend, area, acao) {
    var conditions = {
        'Mobile': {
            'property': objectSend
        }
    };
    var postData = JSON.stringify(conditions);
    postData = {
        'params': postData
    };
    var url = 'http://54.94.182.35/jezzy/api/mobile/' + area + '/' + acao + '/' + createToken();
    return $.ajax({
        method: "POST",
        url: url,
        data: postData
    });
}

function monetary(value){
    return 'R$ ' +  parseFloat(value).toFixed(2).replace('.',',');
}