#!/usr/bin/env node
const { getEvents } = require('./Services/githubService');

async function main() {
  try {
    const username = process.argv[2];

    const result = await getEvents(username);

    console.log(result);
  } catch (error) {
    console.error("Erro ao buscar usuário:", error.message);
  }
}

main();
