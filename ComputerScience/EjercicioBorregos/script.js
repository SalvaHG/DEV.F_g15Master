var borregos = 100;

function contar() {

    for(var libreta = 1; libreta <= borregos; libreta++) {

        document.getElementById("corral").innerHTML += '<div class="alert alert-success" role="alert">Entró un borrego</div>';
        
        if (libreta % 5 == 0) {
            document.getElementById("corral").innerHTML += '<div class="alert alert-danger" role="alert">Tomar un descanso</div>'
        }
    
    };

};