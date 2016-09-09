
	var textarea = document.getElementById('json');

	function filter(tag) {
		// body...
		textarea.value="";
		var resultado = [];

		resultado=  _.filter(categorias, {'tags':[tag]});

		if (resultado.length > 0) {

			resultado = JSON.stringify(resultado, undefined, 4);
			textarea.value = resultado;
		}else{
			textarea.value= "no encontrado.";
		}
		

		
	}

	function search(q) {
		// body...
		textarea.value="";
		var resultado = [];
		
		resultado =  _.find(categorias, q);

		if (resultado != undefined) {

			resultado = JSON.stringify(resultado, undefined, 4);
			textarea.value = resultado;
		}else{
			textarea.value= "no encontrado.";
		}

	}


