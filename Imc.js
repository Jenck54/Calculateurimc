function Valider() {
    let Poids = document.getElementById('Poids').value
    let Taille = document.getElementById('Taille').value
    let resultat = Poids / (Taille * Taille)
    document.getElementById('resultat').innerHTML = resultat
}