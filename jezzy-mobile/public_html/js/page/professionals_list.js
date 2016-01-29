$(document).ready(function () {

    $("#historyBackPage").click(function () {
        $.sessionStorage.remove('service_id');
        window.history.back();
    });

    $("#professionalListDiv").on('click', '.row', function () {
        $.sessionStorage.set('professional_id', this.id);
        window.location.href = "schedule_page.html";
    });


    if ($.sessionStorage.isSet('service_id')) {

        var obejctSend = {
            subclass_id: $.sessionStorage.get('subclass_id'),
            bussiness_id: $.sessionStorage.get('bussiness_id'),
            service_id: $.sessionStorage.get('service_id')};
        sendRequest(obejctSend, "profissional", "get").done(function (result) {
            var objReturn = JSON.parse(result);
            if (objReturn.cod === 0) {
                var html = "";
                jQuery.each(objReturn.msg, function (index, value) {
                    console.log(value.service_secondary_users.secondary_user_id);
                    html = html
                            + '<div class="row" id="' + value.service_secondary_users.secondary_user_id + '">'
                            + '  <div class="col-xs-2 imgeProfessional">'
                            + '    <img src="img/icons/funcionario_sem_imagem.PNG" />'
                            + '  </div>'
                            + '  <div class="col-xs-10">'
                            + '    <div class="row profissionalName">'
                            + '        <div class="col-xs-12">'
                            + '            ' + value.secondary_users.name
                            + '        </div>'
                            + '    </div>'
                            + '    <div class="row informationLine">'
                            + '        <div class="col-xs-12">'
                            + '            ' + value.companies.fancy_name
                            + '        </div>'
                            + '    </div>'
                            + '    <div class="row informationLine">'
                            + '        <div class="col-xs-12">'
                            + '            Serviço selecionado:'
                            + '        </div>'
                            + '    </div>'
                            + '    <div class="row informationLine marginBotton6px">'
                            + '        <div class="col-xs-12">'
                            + '            ' + value.subclasses.name
                            + '        </div>'
                            + '    </div>'
                            + '  </div>'
                            + '      <div class="bottomLine"></div>  '
                            + '</div>';

                });
                $("#professionalListDiv").html(html);
            } else {
                generateModalAlert(objReturn.msg);
                $('#mymodal').modal('show');
            }
        }).error(function (XMLHttpRequest, textStatus, errorThrown) {
            console.log(errorThrown);
        });
    }


});
