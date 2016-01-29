$(document).ready(function () {

    $("#searchBussinessIcon").click(function () {
        var html = '<div class="col-xs-12 fontSizeClass lineSearchField" id="companyListNames">'
                + '<img src="img/icons/ir_esquerda.png" class="leftIconSearch" id="historyBackPage" />'
                + '<input type="text" placeholder="Insira sua busca aqui!" class="searchInput" id="fildSearchBussiness"/> '
                + '<span class="iconSearchJezzy" id="searchBussinessIcon" >'
                + '<img src="img/icons/pesquisa_marrom.png" class="marginTop5" />'
                + '</span>'
                + '</div>';
        $("#rowPageCompanys").html(html);
    });

    $(".container").on("click", "#searchBussinessIcon", function () {
        getBussinessList($("#fildSearchBussiness").val());
    });

    $("#divResultSearchBussiness").on("click", ".col-xs-10", function () {
        $.sessionStorage.set('bussiness_id', this.id);
        window.location.href = "detalhe_servico.html";
    });

    $("#rowPageCompanys").on('click', '#historyBackPage', function () {
        $.sessionStorage.remove('subclass_id', this.id);
        window.location.href = "subclass_list.html";
    });

    if ($.sessionStorage.isSet('subclass_id')) {
        getBussinessList("");
    }

});

function getBussinessList(searchParameter) {
    var obejctSend = {
        subclass_id: $.sessionStorage.get('subclass_id'),
        search: searchParameter};
    sendRequest(obejctSend, "bussiness", "get").done(function (result) {
        var objReturn = JSON.parse(result);
        if (objReturn.cod === 0) {
            var resultList = "";
            jQuery.each(objReturn.msg, function (index, value) {
                resultList = resultList +
                        '<div class="row colorLetter">' +
                        '    <div class="col-xs-2 ">' +
                        '        ' + index +
                        '    </div>' +
                        '    <div class="bottomLine"></div>  ' +
                        '</div>';
                jQuery.each(value, function (indexBussiness, valueBussiness) {
                    if (valueBussiness.logo == "") {
                        valueBussiness.logo = "img/icons/empresaSemLogo.png";
                    }
                    resultList = resultList +
                            '<div class="row">' +
                            '    <div class="col-xs-2 imgeProfessional marginTop10 ">' +
                            '        <img src="' + valueBussiness.logo + '" class="logoBussinessSize"/>' +
                            ' </div>' +
                            '   <div class="col-xs-10" id="' + valueBussiness.id + '">' +
                            '       <div class="row informationLine marginBotton10">' +
                            '            <div class="col-xs-12 marginTop15">' +
                            '                <b>' + valueBussiness.fancy_name + '</b>' +
                            '                <br />' +
                            '                ' + valueBussiness.description +
                            '           </div>' +
                            '       </div>' +
                            '    </div>' +
                            '    <div class="bottomLine"></div>  ' +
                            '</div>';
                });
            });
            $("#divResultSearchBussiness").html(resultList);
        } else {
            generateModalAlert(objReturn.msg);
            $('#mymodal').modal('show');
        }
    }).error(function (XMLHttpRequest, textStatus, errorThrown) {
        console.log(errorThrown);
    });
}