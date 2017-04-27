


function cliqueBotao(event){
	event.preventDefault();
	var id = $("#input-usuario-nome").val();				
	
	$.ajax({
		type: 'GET',		
		contentType : 'application/json',
		url: 'http://10.1.6.20/api/teste/pessoas',
		success: exibe,
		beforeSend: aguardar,
		error: console.log('error')
		
		
		
	});

}

$(document).ready(function(){
	$("#enviar").on('click', cliqueBotao);	

});