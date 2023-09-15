class Clientes {

    private clientes: Array<Cliente>

    constructor() {
        this.clientes = new Array<Cliente>();

    }

    inserir(newCliente: Cliente): void {
        this.clientes.push(newCliente)
    }

    remover(cpf: string): void {
        this.clientes.forEach(cliente => {
            if (cliente.cpf === cpf) {
                const isCliente = this.clientes.indexOf(cliente);
                if (isCliente > -1) {
                    this.clientes.splice(isCliente, 1)
                }
            }
        })
    }

    listar(): Array<Cliente> {
        return this.clientes;
    }

    pesquisar(cpf: string) {
        return this.clientes.find(cliente => cliente.cpf === cpf)
    }

}