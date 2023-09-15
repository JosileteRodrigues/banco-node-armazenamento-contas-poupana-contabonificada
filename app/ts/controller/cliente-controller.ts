class clienteController{

    private nomeInput: HTMLInputElement;
    private cpfInput: HTMLInputElement;

    private clientes: Clientes

    constructor(){
        this.nomeInput = <HTMLInputElement>document.querySelector('#nome')
        this.nomeInput = <HTMLInputElement>document.querySelector('#cpf')
        this.clientes = new Clientes()
    }

    inserir(evento: Event){

        evento.preventDefault();
        let novoCliente = new Cliente(this.nomeInput.value,this.cpfInput.value)

        this.clientes.inserir(novoCliente);

        console.log(this.clientes.listar())
    }











    
}