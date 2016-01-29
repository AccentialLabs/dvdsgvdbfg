$(document).ready(function () {

    $("#historyBackPage").click(function () {
        $.sessionStorage.remove('service_id');
        window.history.back();
    });

    $("#scheduleService").click(function () {
        window.location.href = "professionals_list.html";
//        window.location.href = "schedule_page.html";
    });
    
    if ($.sessionStorage.isSet('bussiness_id')) {
        console.log($.sessionStorage.get('subclass_id'));
        console.log($.sessionStorage.get('bussiness_id'));
        getServiceDetail("");
    }
});


function getServiceDetail(){
    var obejctSend = {
        subclass_id: $.sessionStorage.get('subclass_id'),
        bussiness_id: $.sessionStorage.get('bussiness_id')};
    sendRequest(obejctSend, "service", "detail").done(function (result) {
        var objReturn = JSON.parse(result);
        if (objReturn.cod === 0) {
            console.log(objReturn.msg['0']);
            $("#className").html(objReturn.msg['0']['classes'].name);
            $("#subclassName").html(objReturn.msg['0']['subclasses'].name);
            $("#serviceDescription").html(objReturn.msg['0']['subclasses'].description);
            
            $("#serviceValueOld").html(monetary(objReturn.msg['0']['services'].value));
            var discount = (objReturn.msg['0']['services'].value * objReturn.msg['0']['services'].discount ) / 100; 
            $("#serviceValueNew").html(monetary(objReturn.msg['0']['services'].value - discount));
            $("#serviceTime").html(objReturn.msg['0']['services'].time);
            $.sessionStorage.set('service_id', objReturn.msg['0']['services'].id);
        } else {
            generateModalAlert(objReturn.msg);
            $('#mymodal').modal('show');
        }
    }).error(function (XMLHttpRequest, textStatus, errorThrown) {
        console.log(errorThrown);
    });
}