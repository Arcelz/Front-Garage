app.controller('Home', function ($scope, $state, $rootScope, $localStorage, DataService) {


    //Entradas
    DataService.realizarGet('relatorios/13').then(function (data) {
       
        $scope.receitas = data.data[0].receitas;
    });

    //Saidas
    DataService.realizarGet('relatorios/12').then(function (data) {

        $scope.saidas = data.data[0].despesas;
    });

    DataService.realizarGet('relatorios/12').then(function (data) {

        $scope.saidas = data.data[0].despesas;
    });

    DataService.realizarGet('relatorios/14').then(function (data) {
        $scope.saldo = data.data[0].saldo;
     
    });

     DataService.realizarGet('relatorios/17').then(function (data) {
        $scope.countClinetes = data.data[0].count;
     
    });
     DataService.realizarGet('relatorios/19').then(function (data) {
        $scope.countGaragem = data.data[0].garagem;
       
    });

     DataService.realizarGet('relatorios/18').then(function (data) {
        $scope.countVendidos = data.data[0].vendido;
       
    });


    
    //GRAFICO DE VENDA POR MES
    DataService.realizarGet('relatorios/15').then(function(data){
        console.log(data);
        var meses = [];
        var valores = [];
        data.data.forEach(function(obj) {
                meses.push(obj.meses);
                valores.push(obj.saldo);
                
        }, this);
       // console.log(valores);
        valores.push("19000.00");
         meses.push("Agosto");
      //  valores.sort(function(a,b){return b-a});

        var ctx = document.getElementById('vendasPorMes').getContext('2d');
        var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'line',

            // The data for our dataset
            data: {
                labels: meses,
                datasets: [{
                    label: "Vendas por Mês",
                    backgroundColor: 'rgba(30,148,210,0.5)',
                    borderColor: 'rgba(30,148,210,1)',
                    pointBackgroundColor: "#fff",
                    data: valores,
                }]
            },

            // Configuration options go here
            options: {}
        });
    });
    // ----------- FIM ---------

    //GRAFICO DE VENDEDORES 
    DataService.realizarGet('relatorios/16').then(function(data){
        console.log(data);
        var nome = [];
        var valores = [];
        data.data.forEach(function(obj) {
                nome.push(obj.nome);
                valores.push(obj.saldo);
                
        }, this);     

        var ctx = document.getElementById('faturamentoVendedores').getContext('2d');
        var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'bar',

            // The data for our dataset
            data: {
                labels: nome,
                datasets: [{
                    label: "Vendas por Vendedor",
                    backgroundColor: 'rgba(30,148,210,0.5)',
                    borderColor: 'rgba(30,148,210,1)',
                    pointBackgroundColor: "#fff",
                    data: valores,
                }]
            },

            // Configuration options go here
            options: {}
        });
    });
    // ----------- FIM ---------

});