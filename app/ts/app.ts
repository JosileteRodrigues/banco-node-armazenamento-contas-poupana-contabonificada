let contaController = new ContaController();
let clientes = new Clientes();

contaController.listar();

const c1 = new Conta('1', 100);
const p1 = new Poupanca('2', 100);
const cb1 = new ContaBonificada('3', 0);

clientes.inserir(new Cliente('Josilete','123456789'))
clientes.inserir(new Cliente('Maria','129632789'))
clientes.inserir(new Cliente('Mari','123741289'))
clientes.inserir(new Cliente('Alberto','123741125'))
clientes.inserir(new Cliente('Carlos','123496523'))

console.log(clientes.listar())

clientes.remover('123741289')

console.log(clientes.listar())

console.log(clientes.pesquisar('123456789'))
