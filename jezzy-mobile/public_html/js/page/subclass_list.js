$(document).ready(function () {

    if ($.sessionStorage.isSet('class_id')) {

        var obejctSend = {class: $.sessionStorage.get('class_id')};
        sendRequest(obejctSend, "subclass", "get").done(function (result) {
            var objReturn = JSON.parse(result);
            if (objReturn.cod === 0) {
                console.log("classe id : " + $.sessionStorage.get('class_id')); 
                var html = "";
                jQuery.each(objReturn.msg, function (index, value) {
                    $("#className").html(value.classes.name);
                    html = html + '<div class="row">'
                        + ' <div class="col-xs-12">'
                        + value.subclasses.name + '<img src="img/icons/ir_direita.png" id="'+value.subclasses.id+'" class="plusIcon" />'
                        + '<div class="bottomLine"></div>'
                        + '</div>'
                        + '</div>';
                });
                $("#servicesListaWithSchedule").html(html);
            } else {
                generateModalAlert(objReturn.msg);
                $('#mymodal').modal('show');
            }
        }).error(function (XMLHttpRequest, textStatus, errorThrown) {
            console.log(errorThrown);
        });
    }

    $("#historyBackPage").click(function () {
        $.sessionStorage.remove('class_id');
        window.location.href = "class_list.html";
    });

    $("#servicesListaWithSchedule").on('click', '.plusIcon', function () {
        $.sessionStorage.set('subclass_id', this.id);
        window.location.href = "bussiness_list.html";
    });
});
