
	// inicio la variable a partir del ultimo elemento.
    var i = 4;

    $("#agregar").on('click',function(){
        //Aca va la captura del evento.
       
        $('#agregar').append('<li>' + 'Elemento' + ' ' + i + '</li>');
        i++;

    });


    