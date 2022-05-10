const factorial = () => {
    
    var n = parseInt(document.getElementById("number").value);

    
    var result = 1;

    for(var i = n; i > 1; i--) {
        result *= i;
    }

    document.getElementById("result").innerHTML = '<p>El factorial de ' + n + ' es igual a ' + result;

}
