const botao = document.querySelector("nav h2");
const linksMenu = document.querySelector (".links-menu");

botao.addEventListener("click", function(event){
    event.preventDefault(); //sempre usar para evitar o comportamento padrão do próprio navegador,ao clicar no botão. Nós quem programamos.

    linksMenu.classList.toggle("aberto");
    






});