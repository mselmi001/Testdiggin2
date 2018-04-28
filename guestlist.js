
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

var NS4 = (document.layers);
var IE4 = (document.all);
var win = window;
var n = 0;
function Rechercher(str) {
  var txt, i, found;
  if (str == "")
    return false;
    if (NS4) {
      if (!win.find(str)){
        while(win.find(str, false, true))
        n++;
      }
        else
        n++;
      // Si le mot n'a pas été trouvé (Netscape)
      if (n == 0)
        alert("Pas trouvé !");
    }
    if (IE4) {
      txt = win.document.body.createTextRange();
      // Find the nth match from the top of the page.
      for (i = 0; i <= n && (found = txt.findText(str)) != false; i++) {
        txt.moveStart("character", 1);
        txt.moveEnd("textedit");
      }
      if (found) {
        txt.moveStart("character", -1);
        txt.findText(str);
        txt.select();
        txt.scrollIntoView();
        n++;
      }
      else {
        if (n > 0) {
          n = 0;
          Rechercher(str);
        }
// Si le mot n'a pas été trouvé (Explorer)
  else
  alert("Pas trouvé !");}}
  return false;
}
