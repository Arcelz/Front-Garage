/**
 * Created by Usuario on 23/04/2017.
 */
jQuery(document).ready(function() {
    token=$.cookie("token");
    var decoded = jwt_decode(token);
    $("#nome").text(decoded.Nome);
    $("#cargo").text(decoded.Cargo);
});