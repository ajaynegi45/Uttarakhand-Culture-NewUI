/**
 * Executes a network request to the GitHub API using the provided endpoint.
 * @example
 * fetchGitHub('/users/octocat')
 * { login: 'octocat', id: 583231, ... }
 * @param {string} endpoint - The API endpoint to fetch data from.
 * @returns {Promise<Object>} Resolves to the JSON object representing the API response.
 * @description
 *   - Performs the request using dynamic ISR configuration, revalidating data every 1 hour.
 *   - Throws an error if the fetch request does not succeed.
 */
export async function fetchGitHub(endpoint: string) {
    const res = await fetch(`https://api.github.com${endpoint}`, {
        // headers: {
        //     Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        //     'X-GitHub-Api-Version': '2022-11-28',
        // },
        next: { revalidate: 3600 } // ISR for 1 hour
    });

    if (!res.ok) throw new Error(`Failed to fetch ${endpoint}`);
    return res.json();
}
