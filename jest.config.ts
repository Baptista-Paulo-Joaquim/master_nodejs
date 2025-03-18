/** @type {import('jest').Config} */
module.exports = {
  preset: "ts-jest", // Usa o ts-jest como preset para compilar TypeScript
  testEnvironment: "node", // Define o ambiente de teste
  moduleFileExtensions: ["ts", "tsx", "js"], // Extensões suportadas
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest", // Usa ts-jest para transformar arquivos TypeScript
  },
};
