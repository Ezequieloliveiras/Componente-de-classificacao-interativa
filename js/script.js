document.addEventListener('click', function() {
    const selectElements = document.querySelectorAll('.select')
    const conclusion = document.querySelector('#conclusion')
    const form = document.querySelector('form')

    function manipularClick(evento) {
        const alvo = evento.target

        selectElements.forEach(el => el.classList.remove('orange'))
        alvo.classList.add('orange')

        const valorSelecionado = alvo.textContent

        localStorage.setItem('valorSelecionado', valorSelecionado)

        if(conclusion) {
            conclusion.textContent = `You selected ${valorSelecionado} out of 5`
        }
    }

    selectElements.forEach(el => el.addEventListener('click', manipularClick))

    if(form) {
        form.addEventListener('submit', function(segundo_evento) {
            const valorSelecionado = localStorage.getItem('valorSelecionado')
            if(!valorSelecionado) {
                segundo_evento.preventDefault()
            }
        })
    }

})

window.addEventListener('load', function() {
    const conclusion = document.querySelector('#conclusion')
    const valorSelecionado = localStorage.getItem('valorSelecionado')

    if(conclusion && valorSelecionado) {
        conclusion.textContent = `You selected ${valorSelecionado} out of 5`
        localStorage.removeItem('valorSelecionado')
    }
})