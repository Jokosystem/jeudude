function nbreAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

$('button').click(() => {
    let nbre1 = nbreAleatoire(1,6);
    console.log(nbre1);
    let nbre2 = nbreAleatoire(1,6);
    console.log(nbre2);
    $('.player1').attr('src','./assets/dice'+ nbre1+ '.png');
    $('.player2').attr('src','./assets/dice'+ nbre2 + '.png');
    $('.gagnant').html(`
    <h2> ${nbre1 > nbre2 ? 'Le joueur 1 gagne !' : '' }</h2>
    <h2> ${nbre1 < nbre2 ? 'Le joueur 2 gagne !' : ''}</h2>
    <h2> ${nbre1 == nbre2 ? 'Egalité !!' : ''}</h2>
    `)
});