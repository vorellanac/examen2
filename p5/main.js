var contador = 50;

 $(document).keydown(function(tecla){ 
            if (tecla.keyCode == 37) { 
                $('.a').css({ 'left' : contador + 'px' });
                contador --; 

            }else if(tecla.keyCode == 39) { 
                $('.a').css({ 'left' : contador + 'px' }); 
                contador ++;
            } 
        });
