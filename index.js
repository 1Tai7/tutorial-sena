const variablesMenu = document.getElementById("variables");
const funcionesMenu = document.getElementById("funciones");
const condicionalesMenu = document.getElementById("condicionales");
const buclesMenu = document.getElementById("bucles");
const eventosMenu = document.getElementById("eventos");

const variablesBody = document.getElementById("variables_parrafo");
const funcionesBody = document.getElementById("funciones_parrafo");
const condicionalesBody = document.getElementById("condicionales_parrafo");
const buclesBody = document.getElementById("bucles_parrafo");
const eventosBody = document.getElementById("eventos_parrafo");

variablesMenu.addEventListener("click", () => {
  variablesBody.style.display = "block";
  funcionesBody.style.display = "none";
  condicionalesBody.style.display = "none";
  buclesBody.style.display = "none";
  eventosBody.style.display = "none";
});

funcionesMenu.addEventListener("click", () => {
  variablesBody.style.display = "none";
  funcionesBody.style.display = "block";
  condicionalesBody.style.display = "none";
  buclesBody.style.display = "none";
  eventosBody.style.display = "none";
});

condicionalesMenu.addEventListener("click", () => {
  variablesBody.style.display = "none";
  funcionesBody.style.display = "none";
  condicionalesBody.style.display = "block";
  buclesBody.style.display = "none";
  eventosBody.style.display = "none";
});

buclesMenu.addEventListener("click", () => {
  variablesBody.style.display = "none";
  funcionesBody.style.display = "none";
  condicionalesBody.style.display = "none";
  buclesBody.style.display = "block";
  eventosBody.style.display = "none";
});

eventosMenu.addEventListener("click", () => {
  variablesBody.style.display = "none";
  funcionesBody.style.display = "none";
  condicionalesBody.style.display = "none";
  buclesBody.style.display = "none";
  eventosBody.style.display = "block";
});

const init = () => {
  variablesBody.style.display = "none";
  funcionesBody.style.display = "none";
  condicionalesBody.style.display = "none";
  buclesBody.style.display = "none";
  eventosBody.style.display = "none";
};
init();
