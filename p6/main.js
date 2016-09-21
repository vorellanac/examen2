

    var i = 4;

    $("#agregar").on('click',function(){
        //Aca va la captura del evento.
       
        $('div').append('<li>' + i + '</li>');
        i++;

    });

    