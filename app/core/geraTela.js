angular.module('app.core')
    .factory('GeraTela', geraTela);
function geraTela() {
    var service = {
        relatorioFinanceiro: relatorioFinanceiro,
    };
    return service;

    function relatorioFinanceiro(obj) {
        var textCima = " <div class='col-md-12'><fieldset> ";
        var textBaixo = "</fieldset></div>";
        var html = '';
        var tamanho = obj.Campo.length / 2;
        if (tamanho % 1 === 0.5) {
            tamanho = tamanho + 0.5;
            for (var i = 1; i <= tamanho; i++) {
                if (tamanho === i) {
                    html += textCima + retornaData(obj.Nome[i], obj.Tipo[i], obj.Campo[i]) + textBaixo;
                } else {
                    html += textCima + retornaData(obj.Nome[i - 1], obj.Tipo[i - 1], obj.Campo[i - 1]) + retornaData(obj.Nome[i], obj.Tipo[i], obj.Campo[i]) + textBaixo;
                }
            }
        }
        else {
            for (var i = 1; i <= tamanho; i++) {
                html += textCima + retornaData(obj.Nome[i - 1], obj.Tipo[i - 1], obj.Campo[i - 1]) + retornaData(obj.Nome[i], obj.Tipo[i], obj.Campo[i]) + textBaixo;
            }
        }
        return html;
    }

    function retornaData(nome, tipo,nomeCampo) {
        var nome = nome;
        var ngModel = 'form.' + nome;
        if (tipo === 'Data') {
            return "  <div class='form-group col-md-6'>" +
                "   <label for='" + nome + "' class='col-lg-3 control-label'>"+nomeCampo+":</label>" +
                "<div class='col-lg-9'>" +
                "<input id='" + nome + "'  ng-model='" + ngModel + "' placeholder='Selecione Data' class='form-control' ng-click='open($event)' is-open='debug." + nome + "' type='text' datepicker-popup='dd/M/yyyy' /> " +
                "</div>" +
                "</div>";
        }
        else if (tipo === 'Texto') {
            return "  <div class='form-group col-md-6'>" +
                "   <label for='" + nome + "' class='col-lg-3 control-label'>"+nomeCampo+":</label>" +
                "<div class='col-lg-9'>" +
                "<input id='" + nome + "'  ng-model='" + ngModel + "' placeholder='Digite o "+nomeCampo+"' class='form-control'  type='text'/> " +
                "</div>" +
                "</div>";
        }
    }
}
