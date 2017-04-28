jQuery(document).ready(function () {

    $("#nome").text($.cookie("nome"));
    $("#cargo").text($.cookie("cargo"));

    jQuery(document).ready(function () {
        $.ajax({
            url: "http://ifg.redesbrasil.com/usuarios",
            headers : {
                'Authorization':$.cookie("token")
            },
            success: function (data) {
                console.log(data);
                // Use jQuery's each to iterate over the opts value
                $.each(data, function (i, d) {
                    // You will need to alter the below to get the right values from your json object.  Guessing that d.id / d.modelName are columns in your carModels data
                    $('#emptyDropdown').append('<option value="' + d.pk_funcionario + '">' + d.nome + '</option>');
                });
                $('select').material_select();
            },
            error: function (xhr, status, error) {
                var err = eval("(" + xhr.responseText + ")");
                alert(err.Message);
            }
        });
    });
    jQuery('#ajax_form').submit(function () {
        var dados = jQuery(this).serialize();
        $.ajax({
            type: "POST",
            url: "http://ifg.redesbrasil.com/auth/login",
            data: dados,
            success: function (data) {
                if (data.Codigo == 0) {
                    console.log(data);
                    var token = data.Token;
                    var decoded = jwt_decode(token);
                    console.log(decoded);
                    $.cookie("token", data.Token);
                    $.cookie("nome", decoded.Nome);
                    $.cookie("cargo", decoded.Cargo);
                    console.log($.cookie("token"));
                    var hostname = window.location.hostname;
                    window.location.href = '/sammy/';
                }
                else {
                    Materialize.toast(data.Resposta, 4000);
                }
            },
        });
        return false;
    });
});