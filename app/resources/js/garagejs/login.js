/**
 * Created by Usuario on 22/04/2017.
 */

jQuery(document).ready(function(){
    jQuery(document).ready(function(){
        jQuery('#ajax_form').submit(function(){
            var dados = jQuery( this ).serialize();
            $.ajax({
                type: "POST",
                url: "http://localhost/PHP/GarageAPI/auth/login",
                data: dados,
                success: function( data )
                {
                    if (data.Codigo==0){
                        console.log( data );
                        var token = data.Token;
                        var decoded = jwt_decode(token);
                        console.log(decoded);
                        $.cookie("token",JSON.stringify(data.Token));
                        console.log( $.cookie("token") );
                        window.location.replace("http://localhost/PHP/GarageFrontEnd/front/index.html");
                    }
                    else
                    {
                        Materialize.toast(data.Resposta, 4000);
                    }
                },
            });
            return false;
        });
    });
});