let iptRecherche = document.getElementById('iptRecherche');
let listeCasesPersonnages = document.getElementsByClassName("nomPersonnage");

iptRecherche.addEventListener('keyup', () => {
    let value = iptRecherche.value

    for(let d of listeCasesPersonnages) {
        if(d.attributes.nomFR.toUpperCase().indexOf(value.toUpperCase()) < 0 && d.attributes.nomEN.toUpperCase().indexOf(value.toUpperCase()) < 0) {
            d.parentElement.classList.add("caseInvisible");
        } else {
            d.parentElement.classList.remove("caseInvisible");
        }
    }
});
