function contato() {
    let Nome = document.getElementById('InputName')
    let Assunto = document.getElementById('AssuntoContent')
    let Email = document.getElementById('InputEmail')
    let Mensagem = document.getElementById('AreaMensagem')
    let TextContent = document.getElementById('spanG')

    if(Nome.value == '' || Assunto.value == '' || Email.value == '' || Mensagem.value == '') {
        TextContent.innerHTML = 'Por favor, preencha todos os campos'
    } else {
 
    }


}