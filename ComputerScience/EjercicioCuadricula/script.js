const genCuadricula = () => {
    var n = parseInt(document.getElementById("inputNumber").value);

    for (var i = 0; i <= n; i++) {
        document.getElementById("cuadricula").innerHTML ="<span>" + i + "</span><br>";
    }
}