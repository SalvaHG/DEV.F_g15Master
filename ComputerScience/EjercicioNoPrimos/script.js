const primeNumber = () => {

    if( (document.getElementById("inputNumber").value) == '') {
        alert("Es necesario que ingreses un número")
    }
    else {

        var n = parseInt(document.getElementById("inputNumber").value);

        if (n < 2 || typeof(n) == undefined) {
            alert("Ingresa un número mayor a 1")
        }
        else {

            for(i = n - 1; i > 1; i--) {
                if (n % i == 0) {
                    var result = false;
                    break;
                }
                else {
                    var result = true;
                };
            };
    
            if (result == false) {
                document.getElementById("result").innerHTML = '<div class="alert alert-danger" role="alert">El número NO es primo</div>';
            }
            else {
                document.getElementById("result").innerHTML = '<div class="alert alert-success" role="alert">El número SI es primo</div>';
            };
        }
    }

    

}