console.log("JavaScript fonctionne !");
const btnMessage = document.getElementById("btnMessage");
const message = document.getElementById("message");

btnMessage.addEventListener("click", function () {
  message.textContent = "Bravo, tu as cliqué sur le bouton !";
});


const inputNom = document.getElementById("nom");
const btnNom = document.getElementById("btnNom");
const resultatNom = document.getElementById("resultatNom");

btnNom.addEventListener("click", function () {
  resultatNom.textContent = "Bonjour " + inputNom.value;
});

const contactForm = document.getElementById("contactForm");
const formResult = document.getElementById("formResult");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();
  formResult.textContent = "Message envoyé avec succès !";
});


contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const prenom = document.getElementById("prenom").value;
  const email = document.getElementById("email").value;
  const messageContact = document.getElementById("messageContact").value;

  if (prenom === "" || email === "" || messageContact === "") {
    formResult.textContent = "Veuillez remplir tous les champs.";
  } else {
    formResult.textContent = "Merci " + prenom + ", votre message a été envoyé.";
  }
});

const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

const competenceInput = document.getElementById("competenceInput");
const addCompetence = document.getElementById("addCompetence");
const competenceList = document.getElementById("competenceList");

addCompetence.addEventListener("click", function () {
  const li = document.createElement("li");
  li.textContent = competenceInput.value;
  competenceList.appendChild(li);
  competenceInput.value = "";
});