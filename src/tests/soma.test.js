const soma = require("./soma");

describe("Teste de soma", () => {
    it("Soma de 2, 3 deve resultar em 5", () => {
        expect(soma(2, 3)).toBe(5);
    });

    it("Soma de 1, 1 deve resultar em 2", () => {
        expect(soma(1, 1)).toBe(2);
    });

    it("Soma de 4, 3 deve resultar em 5", () => {
        expect(soma(4, 3)).toBe(7);
    });
});