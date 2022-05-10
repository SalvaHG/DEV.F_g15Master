const sumatoria = () => {
    
    var n = parseInt(document.getElementById("number").value);

 
    var result = 1;

    for(  var i = n; i > 1; i--) {
        result += i;
    }

    document.getElementById("result").innerHTML = '<p>La sumatoria de ' + n + ' es igual a ' + result;
    
}