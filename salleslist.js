const url = "https://diggin.events:8101/venues?uid=gq8EbajUd63Oj";
fetch(url)
  .then(response => response.json())
  .then(json => afficher(json));

  function afficher(json) {
    const div = document.querySelector('#listes');
    div.innerHTML = '';
    const h1 = document.createElement('p');
    h1.textContent = "Liste des salles";
    div.appendChild(h1);
    var noms = new Array();
    noms = json.data;
    const ul = document.createElement('ul');

    for (var i=0; i<noms.length; i++){
      const listes = document.createElement('li');
      listes.textContent = noms[i].name;
      ul.appendChild(listes);
      div.appendChild(ul);
    }
  }
