jQuery(document).ready(function() {
    myFunction();
    function myFunction(obj) {
        $.ajax({
            type: "GET",
            url: "http://localhost/PHP/GarageAPI/funcionarios",
            success: function (data) {
                // Parse the returned json data
                console.log(data);
                // Use jQuery's each to iterate over the opts value
                $.each(data, function (i, d) {
                    // You will need to alter the below to get the right values from your json object.  Guessing that d.id / d.modelName are columns in your carModels data
                    $('#emptyDropdown').append('<option value="' + d.pk_funcionario + '">' + d.nome + '</option>');
                });
                $('#emptyDropdown').material_select();
                $('#status-select').material_select();
                $('.dropify').dropify();
            }
        });
    }
});