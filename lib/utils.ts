import {clsx, type ClassValue} from "clsx";
import {twMerge} from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export async function getRepos() {
	const res = await fetch("https://api.github.com/user/repos", {
		headers: {
			Accept: "application/vnd.github+json",
			Authorization: `Bearer ${process.env.GITHUB_KEY}`,
			"X-GitHub-Api-Version": "2022-11-28"
		},
	});

	if (!res.ok) {
		console.error("GitHub API error", res.status);
		return [];
	}

	return res.json();
}

export async function getTest() {
	const data = await fetch("https://api.restful-api.dev/objects");
	const response = await data.json();
	return response;
}
