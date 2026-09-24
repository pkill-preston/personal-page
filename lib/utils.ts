import {clsx, type ClassValue} from "clsx";
import {twMerge} from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}


export async function getRepos() {
	const username = process.env.GITHUB_USERNAME;
	const reposEnv = process.env.GITHUB_REPOS;

	if (!username || !reposEnv) {
		console.error("GITHUB_USERNAME and GITHUB_REPOS must be set in .env");
		return [];
	}

	const repos = reposEnv
		.split(",")
		.map((r) => r.trim())
		.filter(Boolean);

	if (repos.length === 0) return [];

	try {
		const data = await Promise.all(
			repos.map((repo) =>
				fetch(`https://api.github.com/repos/${username}/${repo}`, {
					headers: {
						Accept: "application/vnd.github+json",
						Authorization: `Bearer ${process.env.GITHUB_KEY}`,
						"X-GitHub-Api-Version": "2022-11-28"
					},
					next: {revalidate: 3600}
				}).then(async (res) => {
					if (!res.ok) {
						console.error(`Error fetching ${repo}:`, res.status);
						return null;
					}
					return res.json();
				})
			)
		);

		return data.filter(Boolean);
	} catch (error) {
		console.error("GitHub fetch error:", error);
		return [];
	}
}
