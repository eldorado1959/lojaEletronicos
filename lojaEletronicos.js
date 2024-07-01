var leitor = require('readline-sync');
var Produto = /** @class */ (function () {
    function Produto() {
    }
    return Produto;
}());
var Venda = /** @class */ (function () {
    function Venda() {
    }
    return Venda;
}());
constructor(this.nome = nome, this.preco = preco, this.marca = marvca, this.custo = custo);
{ }
calcularLucro();
number;
{
    return this.preco - this.custo;
}
exibirInformacoes();
void {
    console: console,
    : .log("Nome: ".concat(this.nome, ", Pre\u00E7o: R$").concat(this.preco.toFixed(2), ", Marca: ").concat(this.marca, ", Lucro: R$").concat(this.calcularLucro().toFixed(2))),
};
var VendaImpl = /** @class */ (function () {
    function VendaImpl(produto, quant_venda, data_venda) {
        if (produto === void 0) { produto = Produto; }
        if (quant_venda === void 0) { quant_venda = number; }
        this.valorTotal = this.calcularValorTotal();
    }
    VendaImpl.prototype.calcularValorTotal = function () {
        return this.produto.preco * this.quantidade;
    };
    VendaImpl.prototype.aplicarDesconto = function (percentual) {
        this.valorTotal = this.valorTotal * ((100 - percentual) / 100);
    };
    VendaImpl.prototype.exibirInformacoes = function () {
        console.log("Produto: ".concat(this.produto.nome, ", Quantidade: ").concat(this.quantidade, ", Valor Total: R$").concat(this.valorTotal.toFixed(2), ", Data: ").concat(this.data));
    };
    return VendaImpl;
}());
// Instanciar produtos
var tv = new ProdutoImpl('TV', 2000, 'Samsung', 1500);
var celular = new ProdutoImpl('Celular', 1200, 'Apple', 800);
var notebook = new ProdutoImpl('Notebook', 3500, 'Dell', 3000);
// Realizar vendas
var venda1 = new VendaImpl(tv, 2, new Date('2024-01-15'));
var venda2 = new VendaImpl(celular, 1, new Date('2024-02-10'));
var venda3 = new VendaImpl(notebook, 3, new Date('2024-03-05'));
// Métodos get
function getProduto(nome, produtos) {
    return produtos.find(function (produto) { return produto.nome === nome; });
}
function getVendas(produto, vendas) {
    return vendas.filter(function (venda) { return venda.produto === produto; });
}
// Cálculo de lucro
function calcularLucro(produto) {
    return produto.calcularLucro();
}
// Cálculo de vendas realizadas
function calcularTotalVendas(vendas) {
    return vendas.reduce(function (total, venda) { return total + venda.valorTotal; }, 0);
}
// Testar o sistema
tv.exibirInformacoes();
console.log("Lucro do produto ".concat(tv.nome, ": R$").concat(calcularLucro(tv).toFixed(2)));
venda1.exibirInformacoes();
var totalVendas = calcularTotalVendas([venda1, venda2, venda3]);
console.log("Total de vendas realizadas: R$".concat(totalVendas.toFixed(2)));
