import {clsx, type ClassValue} from "clsx";
import {twMerge} from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}


export async function getRepos() {
	const repos = ["personal-page"];
	const username = "pkill-preston";

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
