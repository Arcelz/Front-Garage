angular.module('app.core')
    .factory('GeraTela', geraTela);
function geraTela() {
    var service = {
        relatorioFinanceiro: relatorioFinanceiro,
        tabelaRelatorio: tabelaRelatorio
    };
    return service;

    function tabelaRelatorio(obj) {
        var tTabela = '';
        var vTabela = '';
        for (var i = 0; i < obj.Nome.length; i++) {
            tTabela += "<th>"+obj.Nome[i]+"</th>";
            vTabela += "<td>{{lembrete."+obj.Valor[i]+"}}</td>";
        }
        return " <table class='table datatable-basic export-table'>" +
            "<thead>" +
            "<tr>" +
            tTabela+
            "</tr>" +
            "</thead>" +
            "<tbody>" +
            "<tr ng-repeat='lembrete in lembretes'>" +
            vTabela+
            "</td>" +
            "</tr>" +
            "</tbody>" +
            "</table>";
        ;
    }

    function relatorioFinanceiro(obj) {
        var textCima = " <div class='col-md-12'><fieldset> ";
        var textBaixo = "</fieldset></div>";
        var html = '';
        var tamanho = obj.Campo.length / 2;
        if (tamanho % 1 === 0.5) {
            tamanho = tamanho + 0.5;
            var increment = false;
            var valor = 0;
            var valor1 = 1;
            for (var i = 0; i < tamanho; i++) {
                if (tamanho === i + 1) {
                    html += textCima + retornaData(obj.Nome[i + valor1], obj.Tipo[i + valor1], obj.Campo[i + valor1]) + textBaixo;
                } else {
                    if (increment) {
                        valor++;
                        valor1++;
                        html += textCima + retornaData(obj.Nome[i + valor], obj.Tipo[i + valor], obj.Campo[i + valor]) + retornaData(obj.Nome[i + valor1], obj.Tipo[i + valor1], obj.Campo[i + valor1]) + textBaixo;
                    }
                    else {
                        html += textCima + retornaData(obj.Nome[i], obj.Tipo[i], obj.Campo[i]) + retornaData(obj.Nome[i + 1], obj.Tipo[i + 1], obj.Campo[i + 1]) + textBaixo;
                        increment = true;
                    }
                }
            }
        }
        else if (tamanho % 1 === 0) {
            var increment = false;
            var valor = 0;
            var valor1 = 1;
            for (var i = 0; i < tamanho; i++) {
                if (increment) {
                    valor++;
                    valor1++;
                    html += textCima + retornaData(obj.Nome[i + valor], obj.Tipo[i + valor], obj.Campo[i + valor]) + retornaData(obj.Nome[i + valor1], obj.Tipo[i + valor1], obj.Campo[i + valor1]) + textBaixo;
                }
                else {
                    html += textCima + retornaData(obj.Nome[i], obj.Tipo[i], obj.Campo[i]) + retornaData(obj.Nome[i + 1], obj.Tipo[i + 1], obj.Campo[i + 1]) + textBaixo;
                    increment = true;
                }
            }
        }
        return html;
    }

    function retornaData(nome, tipo, nomeCampo) {
        var nome = nome;
        var ngModel = 'form.' + nome;
        if (tipo === 'Data') {
            return "  <div class='form-group col-md-6'>" +
                "   <label for='" + nome + "' class='col-lg-3 control-label'>" + nomeCampo + ":</label>" +
                "<div class='col-lg-9'>" +
                "<input id='" + nome + "'  ng-model='" + ngModel + "' placeholder='Selecione Data' class='form-control' ng-click='open($event)' is-open='debug." + nome + "' type='text' datepicker-popup='dd/M/yyyy' /> " +
                "</div>" +
                "</div>";
        }
        else if (tipo === 'Texto') {
            return "  <div class='form-group col-md-6'>" +
                "   <label for='" + nome + "' class='col-lg-3 control-label'>" + nomeCampo + ":</label>" +
                "<div class='col-lg-9'>" +
                "<input id='" + nome + "'  ng-model='" + ngModel + "' placeholder='Digite " + nomeCampo + "' class='form-control'  type='text'/> " +
                "</div>" +
                "</div>";
        }
        else if (tipo === "Numero") {
            return "  <div class='form-group col-md-6'>" +
                "   <label for='" + nome + "' class='col-lg-3 control-label'>" + nomeCampo + ":</label>" +
                "<div class='col-lg-9'>" +
                "<input id='" + nome + "'  ng-model='" + ngModel + "' placeholder='Digite " + nomeCampo + "' class='form-control'  type='text'/> " +
                "</div>" +
                "</div>";
        }
    }
}
