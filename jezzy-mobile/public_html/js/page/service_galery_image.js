$(document).ready(function () {

    var html =
            '<div class="row" id="">'
            + '<div class="col-xs-4"><img src="img/services/massagem.jpg" class="" id="" /></div>'
            + '<div class="col-xs-4"><img src="img/services/massagem.jpg" class="" id="" /></div>'
            + '<div class="col-xs-4"><img src="img/icons/Icon_-_Imagem_indisponivel.png" class="iconNoImage" id="" /></div>'
            + '</div>';

//    html =
//            '<div class="row" id="">'
//            + '<div class="col-xs-12 text-center marginTop20 listColorsAndFont">Sem imagem para este serviço</div>'
//            + '</div>';
    
    $("#images").html(html+html);

    $("#historyBackPage").click(function (){
        history.back();
    });

});
