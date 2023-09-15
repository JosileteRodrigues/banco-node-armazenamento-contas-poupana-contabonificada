class Clientes {
    constructor() {
        this.clientes = new Array();
    }
    inserir(newCliente) {
        this.clientes.push(newCliente);
    }
    remover(cpf) {
        this.clientes.forEach(cliente => {
            if (cliente.cpf === cpf) {
                const isCliente = this.clientes.indexOf(cliente);
                if (isCliente > -1) {
                    this.clientes.splice(isCliente, 1);
                }
            }
        });
    }
    listar() {
        return this.clientes;
    }
    pesquisar(cpf) {
        return this.clientes.find(cliente => cliente.cpf === cpf);
    }
}
