class clienteController {
    constructor() {
        this.nomeInput = document.querySelector('#nome');
        this.nomeInput = document.querySelector('#cpf');
        this.clientes = new Clientes();
    }
    inserir(evento) {
        evento.preventDefault();
        let novoCliente = new Cliente(this.nomeInput.value, this.cpfInput.value);
        this.clientes.inserir(novoCliente);
        console.log(this.clientes.listar());
    }
}
