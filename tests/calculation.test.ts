import { multiplicacao } from "./multiplicacao";

describe("Teste de cálculo", () => {
  it("Multiplicacao de 4, 3 deve resultar em 12", () => {
    expect(multiplicacao(4, 3)).toBe(12);
  });
});
