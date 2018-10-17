
// plugin validation
let form = $('.form-contact');
form.validate({
    errorElement: 'span',
    rules: {
        name: 'required',
        email: {
            required: true,
            email: true
        },
        phone: 'required',
        text: 'required'
    },
    messages: {
        name: 'Por favor, digite seu nome',
        email: {
            required: 'Por favor, digite seu e-mail',
            email: 'por favor, digite um e-mail válido'
        },
        phone: 'Por favor, digite seu telefone',
        text: 'Por favor, digite sua mensagem'
    }
})