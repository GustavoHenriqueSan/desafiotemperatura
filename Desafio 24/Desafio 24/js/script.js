function verificar() {
    let tempe = parseFloat(document.getElementById("tempe").value);
    let F = (tempe * 1.8) + 32;
    let K = tempe + 273.15;

    document.getElementById("fahrenheit").innerHTML = F.toFixed(2);
    document.getElementById("kelvin").innerHTML = K.toFixed(2);
}