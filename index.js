#!/usr/bin/env node
const { getEvents } = require('./Services/githubService');

async function main() {
  try {
    const username = process.argv[2];

    const result = await getEvents(username);

    result.forEach(element => {
      console.log(`- ${element.type} at ${element.repo.name} in ${element.created_at}` )
    });
  } catch (error) {
    console.error("An error ocurred while fetching user events:", error.message);
  }
}

main();
