function calcularMelhorPreco() {

    //validar campos
    let precoAlcool = document.getElementById('alcool').value;
    let precoGasolina = document.getElementById('gasolina').value;

    if (precoAlcool === "" || precoGasolina === "") {
    alert("Preencha todos os campos!");
    }
    else {
    let valorAlcool = parseFloat(precoAlcool);
    let valorGasolina = parseFloat(precoGasolina);

    let resultado = valorAlcool / valorGasolina;

    if (resultado >= 0.7) {
        document.getElementById('resultado').innerHTML = "Melhor utilizar gasolina";
    }
    else {
        document.getElementById('resultado').innerHTML = "Melhor utilizar gasolina";
    }
    }

}