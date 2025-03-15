#!/usr/bin/env node
const { getUser } = require('./Services/githubService');

async function main() {
  try {
    const result = await getUser('rntdc');
    console.log("Hello, CLI World!");
    console.log(result);
  } catch (error) {
    console.error("Erro ao buscar usuário:", error.message);
  }
}

main();
