var date = new Date();
const div = document.querySelector('#data');
const p = document.createElement('p');
if (date.getDate() == 18  && date.getMonth() == 3 ){
  p.textContent = "Joyeux anniversaire Jérémie";
  div.appendChild(p);
}
else{
  p.textContent = "Ce site est en cours de construction";
  div.appendChild(p);
}
