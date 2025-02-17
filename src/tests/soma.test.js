const soma = require("./soma");
const multiplicacao = require("./multiplicacao");

describe("Teste de soma", () => {
    it("Soma de 2, 3 deve resultar em 5", () => {
        expect(soma(2, 3)).toBe(5);
    });

    it("Multiplicacao de 4, 3 deve resultar em 12", () => {
        expect(multiplicacao(2, 3)).toBe(12);
    });
});