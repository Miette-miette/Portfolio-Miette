const onglet=[...document.querySelectorAll('.onglet')];
const ongletContenu=[...document.querySelectorAll('.onglet_contenu')];

onglet.forEach(onglet => onglet.addEventListener("click",ongletAnimation));

function ongletAnimation(e){
    const indexToRemove=onglet.findIndex(onglet => onglet.classList.contains("onglet_actif"));

    onglet[indexToRemove].classList.remove("onglet_actif");
    ongletContenu[indexToRemove].classList.remove("onglet_actif_contenu");

    const indexToShow=onglet.indexOf(e.target);

    onglet[indexToShow].classList.add("onglet_actif");
    ongletContenu[indexToShow].classList.add("onglet_actif_contenu");

}