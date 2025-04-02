function validaInscricao(){

    if(document.frmInscricao.txtnome.value == ""){
        alert("Preencha o campo Nome.");
        document.frmInscricao.txtnome.focus();
        return false;
    }
    if(document.frmInscricao.txtmail.value == ""){
        alert("Preencha o campo Email.");
        document.frmInscricao.txtmail.focus();
        return false;
    }
    if(document.frmInscricao.txtfone.value == ""){
        alert("Preencha o campo Telefone.");
        document.frmInscricao.txtfone.focus();
        return false;
    }
    if(document.frmInscricao.numDataNasc.value == ""){
        alert("Preencha o campo Data.");
        document.frmInscricao.numDataNasc.focus();
        return false;
    }

    let sexoSelecionado = document.querySelector('input[name="sexo"]:checked');
    if (!sexoSelecionado) {
        alert("Selecione o campo Sexo.");
        document.querySelector('input[name="sexo"]').focus(); 
        return false;
    }


    return true;
}

document.addEventListener("DOMContentLoaded", function () {
    let form = document.frmInscricao;
    let btnEnviar = document.getElementById("btnEnviar");

    function verificaCampos() {
        let nome = form.txtnome.value.trim();
        let telefone = form.txtfone.value.trim();
        let email = form.txtmail.value.trim();
        let dataNasc = form.numDataNasc.value.trim();
        let sexoSelecionado = document.querySelector('input[name="sexo"]:checked');

        if (nome !== "" && telefone !== "" && email !== "" && dataNasc !== "" && sexoSelecionado) {
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
