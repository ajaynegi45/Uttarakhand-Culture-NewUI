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
