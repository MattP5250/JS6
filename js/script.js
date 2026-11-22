const utenti = ["ciccioGamer", "icardi", "khaby", "rocco", "anna"];
const password = ["ciccio1", "wandanara", "tiktok", "siffredi33", "tatangelo"];

function controlla() {
  const messaggio = document.getElementById("messaggio");
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  const posizione = utenti.indexOf(user);

  if (posizione != -1 && password[posizione] == pass) {
    messaggio.innerHTML = '<div class="alert alert-success">Login Successful</div>';
  } else {
    messaggio.innerHTML = '<div class="alert alert-danger">Login fallito</div>';
  }
}