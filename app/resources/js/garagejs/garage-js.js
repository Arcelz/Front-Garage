/*jQuery(document).ready(function() {

       $("#nome").text($.cookie("nome"));
        $("#cargo").text($.cookie("cargo"));

    jQuery(document).ready(function() {
        $.ajax({
                    type: "GET",
                    url: "http://ifg.redesbrasil.com/funcionarios",
                     headers:{'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImp0aSI6IjEyM2FwaWdhcmFnZTQ1NiJ9.eyJpc3MiOiJhcGkuZ2FyYWdlIiwiYXVkIjoiYXBpLmdhcmFnZSIsImp0aSI6IjEyM2FwaWdhcmFnZTQ1NiIsImlhdCI6MTQ5MzE0MjE1MywibmJmIjoxNDkzMTQyMjEzLCJleHAiOjE0OTMxNDU3NTMsIlBlcm1pXHUwMGU3XHUwMGUzbyI6WyIxQyIsIjFWIiwiMUQiLCIyQyIsIjJWIiwiMkQiLCIzQyIsIjNWIiwiM0QiLCI0QyIsIjRWIiwiNEQiLCI1QyIsIjVWIiwiNUQiLCI2QyIsIjZWIiwiNkQiLCI3QyIsIjdWIiwiN0QiLCI4QyIsIjhWIiwiOEQiLCI5QyIsIjlWIiwiOUQiLCIxMEMiLCIxMFYiLCIxMEQiLCIxMUMiLCIxMVYiLCIxMUQiLCIxMkMiLCIxMlYiLCIxMkQiLCIxM0MiLCIxM1YiLCIxM0QiLCIxNEMiLCIxNFYiLCIxNEQiLCIxNUMiLCIxNVYiLCIxNUQiLCIxNkMiLCIxNlYiLCIxNkQiLCIxN0MiLCIxN1YiLCIxN0QiLCIxOEMiLCIxOFYiLCIxOEQiLCIxOUMiLCIxOVYiLCIxOUQiLCIyMEMiLCIyMFYiLCIyMEQiLCIyMUMiLCIyMVYiLCIyMUQiLCIyMkMiLCIyMlYiLCIyMkQiLCIyM0MiLCIyM1YiLCIyM0QiLCIyNEMiLCIyNFYiXSwiTm9tZSI6IkFETUlOIiwiQ2FyZ28iOiJBRE1JTiJ9.pFPGx_Ju34b1LTVTSX0oxhqtGyNkFrBeKA0uxOYCfvQ'},
                    success: function (data) {
                        console.log(data);
                        // Use jQuery's each to iterate over the opts value
                        $.each(data, function (i, d) {
                            // You will need to alter the below to get the right values from your json object.  Guessing that d.id / d.modelName are columns in your carModels data
                            $('#emptyDropdown').append('<option value="' + d.pk_funcionario + '">' + d.nome + '</option>');
                        });
                    },
                    error: function(xhr, status, error) {
                        var err = eval("(" + xhr.responseText + ")");
                        alert(err.Message);
                    }


                });
    });*/
 /*       jQuery('#ajax_form').submit(function () {
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
*/
 //});
/*jQuery(document).ready(function(){
            $.ajax({
                type: "GET",
                headers : {
                    Authorization : 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImp0aSI6IjEyM2FwaWdhcmFnZTQ1NiJ9.eyJpc3MiOiJhcGkuZ2FyYWdlIiwiYXVkIjoiYXBpLmdhcmFnZSIsImp0aSI6IjEyM2FwaWdhcmFnZTQ1NiIsImlhdCI6MTQ5MzMwNTQyOCwibmJmIjoxNDkzMzA1NDg4LCJleHAiOjE0OTMzMDkwMjgsIlBlcm1pXHUwMGU3XHUwMGUzbyI6WyIxQyIsIjFWIiwiMUQiLCIyQyIsIjJWIiwiMkQiLCIzQyIsIjNWIiwiM0QiLCI0QyIsIjRWIiwiNEQiLCI1QyIsIjVWIiwiNUQiLCI2QyIsIjZWIiwiNkQiLCI3QyIsIjdWIiwiN0QiLCI4QyIsIjhWIiwiOEQiLCI5QyIsIjlWIiwiOUQiLCIxMEMiLCIxMFYiLCIxMEQiLCIxMUMiLCIxMVYiLCIxMUQiLCIxMkMiLCIxMlYiLCIxMkQiLCIxM0MiLCIxM1YiLCIxM0QiLCIxNEMiLCIxNFYiLCIxNEQiLCIxNUMiLCIxNVYiLCIxNUQiLCIxNkMiLCIxNlYiLCIxNkQiLCIxN0MiLCIxN1YiLCIxN0QiLCIxOEMiLCIxOFYiLCIxOEQiLCIxOUMiLCIxOVYiLCIxOUQiLCIyMEMiLCIyMFYiLCIyMEQiLCIyMUMiLCIyMVYiLCIyMUQiLCIyMkMiLCIyMlYiLCIyMkQiLCIyM0MiLCIyM1YiLCIyM0QiLCIyNEMiLCIyNFYiXSwiTm9tZSI6IkFETUlOIiwiQ2FyZ28iOiJBRE1JTiJ9.FpiiZLD-ALSEpMOzuBJwIlT33FwGYwU3wmVqVC_mBIA'
                },
                contentType : 'application/x-www-form-urlencoded',
                url: "http://ifg.redesbrasil.com/cargos",
                success: function( data )
                {
                    console.log( data );
                }
            });

});*/