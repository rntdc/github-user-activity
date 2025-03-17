const GITHUB_API_BASE_URL = 'https://api.github.com';

async function fetchJson(url) {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`HTTP Code ${response.status} - ${response.statusText}`);
    }

    return response.json();
}

async function getEvents(username) {
    return fetchJson(`${GITHUB_API_BASE_URL}/users/${username}/events`);
}

/* ...  */

module.exports = { getEvents };
