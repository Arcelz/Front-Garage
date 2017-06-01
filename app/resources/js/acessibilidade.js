
/// BLOCO PARA MOZILA
//Chrome
var nomeNavegador = get_browser();
$(document).ready(function () {

    // alert(nomeNavegador.name);
    $(document).keydown(function (e) { //Quando uma tecla é pressionada

        // BLOCO PARA O FIREFOX
        if (nomeNavegador.name = "Firefoxs") {
            var pressedCtrl = false;
            // ALT + SHIFT + 1 SOB ATE O TOPO
            if (e.which == 18) {
                alert("alt");
             //   pressedCtrl = true; //Informando que ALT está acionado
                if (e.keyCode == 16) {
                   // pressedCtrl = true;
                    if (e.keyCode == 49 || e.keyCode == 49) {
                        pressedCtrl == true
                        $('html, body').animate({ scrollTop: 0 }, 'slow');
                        return false;

                    }

                }

            }


            // FIM DO BLOCO

            // ALT + SHIFT + 2 VAI ATE O CORPO DA PAGINA
            if (e.which == 18) pressedCtrl = true; //Informando que ALT está acionado
            if (e.which == 16) pressedCtrl = true;
            if (e.which == 50 || e.keyCode == 50) {
                pressedCtrl == true
                $("html, body").animate({ scrollTop: $("#corpo").scrollTop() }, 'slow');
                return false;

            }
            // FIM DO BLOCO

            // ALT + SHIFT + 2 VAI ATE O FOOTER DA PAGINA
            if (e.which == 18) pressedCtrl = true; //Informando que ALT está acionado
            if (e.which == 16) pressedCtrl = true;
            if (e.which == 51 || e.keyCode == 51) {
                pressedCtrl == true
                $("html, body").animate({ scrollTop: $(document).height() - $(window).height() }, 'slow');
                return false;
            }
            // FIM DO BLOCO
        }
        // FIM

        // BLOCO PARA O CHROME
        if (nomeNavegador.name = "Chrome") {
            var pressedCtrl = false;
            // ALT  + 1 SOB ATE O TOPO
            if (e.which == 18) pressedCtrl = true; //Informando que ALT está acionado          
            if (e.which == 49 || e.keyCode == 49) {
                pressedCtrl == true
                $('html, body').animate({ scrollTop: 0 }, 'slow');
                return false;

            }
            // FIM DO BLOCO

            // ALT + 2 VAI ATE O CORPO DA PAGINA
            if (e.which == 18) pressedCtrl = true; //Informando que ALT está acionado            
            if (e.which == 50 || e.keyCode == 50) {
                pressedCtrl == true
                $("html, body").animate({ scrollTop: $("#corpo").scrollTop() }, 'slow');
                return false;

            }
            // FIM DO BLOCO

            // ALT  + 2 VAI ATE O FOOTER DA PAGINA
            if (e.which == 18) pressedCtrl = true; //Informando que ALT está acionado           
            if (e.which == 51 || e.keyCode == 51) {
                pressedCtrl == true
                $("html, body").animate({ scrollTop: $(document).height() - $(window).height() }, 'slow');
                return false;

            }
            // FIM DO BLOCO
        }
        // FIM

    });

});
/// FIM DO BLOCO







function get_browser() {
    var ua = navigator.userAgent, tem, M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if (/trident/i.test(M[1])) {
        tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
        return { name: 'IE', version: (tem[1] || '') };
    }
    if (M[1] === 'Chrome') {
        tem = ua.match(/\bOPR\/(\d+)/)
        if (tem != null) { return { name: 'Opera', version: tem[1] }; }
    }
    M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
    if ((tem = ua.match(/version\/(\d+)/i)) != null) { M.splice(1, 1, tem[1]); }
    return {
        name: M[0],
        version: M[1]
    };
};