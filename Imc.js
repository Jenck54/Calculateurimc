function Valider() {
    let Poids = document.getElementById('Poids').value
    let Taille = document.getElementById('Taille').value
    let resultat = Poids / (Taille * Taille)
    
    if (resultat < 18.5) {
        document.getElementById('resultat').style.backgroundColor = "rgb(97, 201, 219)"
    } else if (resultat < 25) {
        document.getElementById('resultat').style.backgroundColor = "rgb(97, 219, 172)"
    } else if (resultat < 30) {
        document.getElementById('resultat').style.backgroundColor = "rgb(201, 219, 97)"
    } else if (resultat < 35) {
        document.getElementById('resultat').style.backgroundColor = "rgb(219, 191, 97)"
    } else if (resultat < 40) {
        document.getElementById('resultat').style.backgroundColor = "rgb(219, 111, 97)"
    } else {
        document.getElementById('resultat').style.backgroundColor = "rgb(95, 15, 5)"
        document.getElementById('resultat').style.color = "white"
    }
    document.getElementById('resultat').innerHTML = "Votre IMC est de : " + parseFloat(resultat).toFixed(2)
}