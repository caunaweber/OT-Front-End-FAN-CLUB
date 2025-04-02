function validaInscricao(){
    let nome = document.frmInscricao.txtnome.value.trim();
    let email = document.frmInscricao.txtmail.value.trim();
    let telefone = document.frmInscricao.txtfone.value.trim();
    let dataNasc = document.frmInscricao.numDataNasc.value.trim();
    let sexoSelecionado = document.querySelector('input[name="sexo"]:checked');

    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let phonePattern = /^\(\d{2}\)\s?\d{5}-\d{4}$/;

    if (nome === "") {
        alert("Preencha o campo Nome.");
        document.frmInscricao.txtnome.focus();
        return false;
    }
    
    if (!phonePattern.test(telefone)) {
        alert("Preencha o campo Telefone corretamente no formato (99) 99999-9999.");
        document.frmInscricao.txtfone.focus();
        return false;
    }

    if (!emailPattern.test(email)) {
        alert("Preencha o campo Email corretamente.");
        document.frmInscricao.txtmail.focus();
        return false;
    }
    
    if (dataNasc === "") {
        alert("Preencha o campo Data de Nascimento.");
        document.frmInscricao.numDataNasc.focus();
        return false;
    }
    if (!sexoSelecionado) {
        alert("Selecione uma opção de Sexo.");
        return false;
    }

    return true;
}

document.addEventListener("DOMContentLoaded", function () {
    let form = document.frmInscricao;
    let btnEnviar = document.getElementById("btnEnviar");

    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let phonePattern = /^\(\d{2}\)\s?\d{5}-\d{4}$/;

    function verificaCampos() {
        let nome = form.txtnome.value.trim();
        let telefone = form.txtfone.value.trim();
        let email = form.txtmail.value.trim();
        let dataNasc = form.numDataNasc.value.trim();
        let sexoSelecionado = document.querySelector('input[name="sexo"]:checked');

        if (nome !== "" && telefone !== "" && email !== "" && dataNasc !== "" && sexoSelecionado &&
            phonePattern.test(telefone) && emailPattern.test(email)) {
            btnEnviar.disabled = false;
        } else {
            btnEnviar.disabled = true;
        }
    }

    form.txtnome.addEventListener("input", verificaCampos);
    form.txtfone.addEventListener("input", verificaCampos);
    form.txtmail.addEventListener("input", verificaCampos);
    form.numDataNasc.addEventListener("input", verificaCampos);

    document.querySelectorAll('input[name="sexo"]').forEach(function (radio) {
        radio.addEventListener("change", verificaCampos);
    });
});
