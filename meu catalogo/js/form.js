var botao = document.querySelector(".botao");

botao.addEventListener("click", function (event) {
    event.preventDefault();
    var form = document.querySelector(".form");
    var ul = document.querySelector("#erros");
    var ave = getHTML(form);
    var erros = validar(ave);

    if (erros.length > 0) {
        exibeErro(erros);
        return;
    }
    montaTabela(ave);
    form.reset();
    ul.innerHTML = "";
});