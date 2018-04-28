
  const url = "https://diggin.events:8101/guests?uid=gq8EbajUd63Oj";
  fetch(url)
    .then(response => response.json())
    .then(json => afficher(json));


  function afficher(json) {
    const div = document.querySelector('#listes');
    div.innerHTML = '';
    const h1 = document.createElement('p');
    h1.textContent = "Liste des invités";
    div.appendChild(h1);
    var noms = new Array();
    noms = json.data;
    noms.sort(function(a, b){
      if(a.prenom < b.prenom) return -1;
      if(a.prenom > b.prenom) return 1;
      return 0;
    })
    const ul = document.createElement('ul');

    for (var i=0; i<noms.length; i++){
      const listes = document.createElement('li');
      listes.textContent = noms[i].prenom;
      ul.appendChild(listes);
      div.appendChild(ul);
    }
  }

function inscription(){
  var Client = {};
  Client.nom = document.getElementById('nom').value;
  Client.prenom = document.getElementById('prenom').value;
  Client.mail = document.getElementById('email').value;
  Client.mdp = document.getElementById('mdp').value;
  Client.cadeau = document.getElementById('cadeaux').value;
  var chaineJSON = JSON.stringify(Client);
  var req = new XMLHttpRequest();
  req.open("POST", "https://diggin.events:8101/register?uid=gq8EbajUd63Oj");
  req.send(Client);
  const div = document.querySelector('#listes');
  const newclient = document.createElement('li');
  newclient.textContent = Client.nom;
  const ul = document.createElement('ul');
  ul.appendChild(newclient);
  div.appendChild(ul);
}

document.querySelector('button').addEventListener('click', inscription);
