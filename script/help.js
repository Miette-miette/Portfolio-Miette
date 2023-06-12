let memory=localStorage.getItem('datas');

/* Fonction pour cacher le pop up */

function hidepopup(id){
    document.getElementById(id).style.display="none";
}

/* Fonction pour confirmer la lecture et stocker la donnée avec JSON*/
function confirme(){
    memory.help=true;
    localStorage.setItem('datas',JSON.stringify(memory));
    hidepopup('help');
}

/* Fonction pour verifier le premier passage ou non sur le site*/

function setup(){
    
    if (!memory){
        memory={
            help:false,
        };
        localStorage.setItem('datas',JSON.stringify(memory));
    }
    else{
        memory=JSON.parse(memory);
        if (memory.help){
            hidepopup('help');
        }    
    }
}


setup();